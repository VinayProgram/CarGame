import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group, Matrix4, Vector3, Euler, AnimationMixer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LoadCarModel = ({ position, rotation, model }) => {
  return (
    <group rotation={rotation} position={position} scale={new Vector3(0.01, 0.01, 0.01)}>
      <primitive object={model.scene} />
    </group>
  );
};

const Car = () => {
  const model = useLoader(GLTFLoader, "/flying_car/scene.gltf");
  const mixer = useRef();
  const ref = useRef<Group>(null);
  const [, get] = useKeyboardControls();
  const [position, setPosition] = useState(new Vector3(0, 0, 0));
  const [rotation, setRotation] = useState(new Euler(0, Math.PI, 0)); // Default rotation of 180 degrees

  useEffect(() => {
    if (ref.current) {
      mixer.current = new AnimationMixer(ref.current);
      model.animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
  }, [model.animations]);

  useFrame((state, delta) => {
    const matrix = new Matrix4().makeTranslation(position.x, position.y, position.z);
    ref.current?.matrix.copy(matrix);

    // Adjust the camera offset behind the car
    const offset = new Vector3(0, 2, -7).applyEuler(rotation); // Negative Z to place the camera behind the car
    const cameraPosition = position.clone().add(offset);
    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(position);

    const { forward, backward, left, right, jump } = get();
    movePosition(forward, backward, left, right, delta);
  });

  const movePosition = (
    forward: boolean,
    backward: boolean,
    left: boolean,
    right: boolean,
    delta: any
  ) => {
    const newPosition = position.clone();
    const newRotation = rotation.clone();

    if (forward || backward || left || right) {
      mixer.current?.update(delta);
    }
    if (forward) {
      newPosition.x -= 0.1 * Math.sin(newRotation.y);
      newPosition.z -= 0.1 * Math.cos(newRotation.y);
    }
    if (backward) {
      newPosition.x += 0.1 * Math.sin(newRotation.y);
      newPosition.z += 0.1 * Math.cos(newRotation.y);
    }
    if (left) newRotation.y += 0.05;
    if (right) newRotation.y -= 0.05;

    setPosition(newPosition);
    setRotation(newRotation);
  };

  return (
    <group ref={ref}>
      <LoadCarModel position={position} rotation={rotation} model={model} />
    </group>
  );
};

export default Car;
