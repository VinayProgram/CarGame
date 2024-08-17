
import { useKeyboardControls } from "@react-three/drei";
import { ObjectMap, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group, Matrix4, Vector3, Euler, AnimationMixer } from "three";
import { GLTF, GLTFLoader } from "three-stdlib"


const LoadCarModel = ({ position, rotation, model }:{position:Vector3, rotation:Euler, model:GLTF & ObjectMap}) => {
  return (
    <group rotation={rotation} position={position} scale={new Vector3(0.01, 0.01, 0.01)}>
      <primitive object={model.scene} />
    </group>
  );
};

const Car = () => {
  const model = useLoader(GLTFLoader, "/flying_car/scene.gltf");
  const mixer = useRef<AnimationMixer>();
  const ref = useRef<Group>(null);
  const [, get] = useKeyboardControls();
  const [position, setPosition] = useState(new Vector3(0, 0, 0));
  const [rotation, setRotation] = useState(new Euler(0, Math.PI, 0)); // Default rotation of 180 degrees

  useEffect(() => {
    if (ref.current) {
      mixer.current = new AnimationMixer(ref.current);
      model.animations.forEach((clip) => {
      mixer.current?.clipAction(clip).play();
      });
    }
  }, [model.animations]);

  useFrame((state, delta) => {
    const matrix = new Matrix4().makeTranslation(position.x, position.y, position.z);
    ref.current?.matrix.copy(matrix);
    const offset = new Vector3(0, 2, -7).applyEuler(rotation);
    const cameraPosition = position.clone().add(offset);
    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(position);
    state.camera.position.lerp(offset,0.05)
    const { forward, backward, left, right } = get();
    movePosition(forward, backward, left, right, delta);
  });

  const movePosition = (
    forward: boolean,
    backward: boolean,
    left: boolean,
    right: boolean,
    delta: number
  ) => {
    const newPosition = position.clone();
    const newRotation = rotation.clone();

    if (forward || backward || left || right) {
      mixer.current?.update(delta);
    }
    if (backward) {
      newPosition.x -= 0.1 * Math.sin(newRotation.y);
      newPosition.z -= 0.1 * Math.cos(newRotation.y);
    }
    if (forward) {
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
