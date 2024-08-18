import { useLoader } from "@react-three/fiber";
import React from "react";
import { Vector3 } from "three";
import {  GLTFLoader } from "three-stdlib";


const models:ModelType[] = [
    {
        path: "/concerto.glb",
        scale: new Vector3(1, 1, 1),
        position: new Vector3(0, 0, 0)
    },
{
    path: "/dae_crib_-_solarpunk_arboretum.glb",
    scale: new Vector3(10, 10, 10),
    position: new Vector3(0, 0, 0)
},    
{
    path: "/forest.glb",
    scale: new Vector3(1, 1, 1),
    position: new Vector3(0, 0, 0)
},
{
    path: "/hornet.glb",
    scale: new Vector3(1, 1, 1),
    position: new Vector3(0, 0, 0)
},

{
    path: "/mid-low_poly_poplar_forest_assets.glb",
    scale: new Vector3(1, 1, 1),
    position: new Vector3(0, 0, 0)
},
{
    path: "/stylized_mangrove_greenhouse.glb",
    scale: new Vector3(1, 1, 1),
    position: new Vector3(0, 0, 0)
},
{
    path: "/tiny_house.glb",
    scale: new Vector3(1, 1, 1),
    position: new Vector3(0, 0, 0)
},
{
    path: "/ukrainian_traditional_house.glb",
    scale: new Vector3(10, 10, 10),
    position: new Vector3(0, 0, 0)
},
{
    path: "/just_a_girl.glb",
    scale: new Vector3(0.5, 0.5, 0.5),
    position: new Vector3(0, -20, 0)
}
];





const GetModelScene = (m:string) => {
    const modelObj = useLoader(GLTFLoader, m);
    return modelObj;
};

const PlanetShip = () => {
    const radius = 300; // Radius for circular placement
    const angleStep = (2 * Math.PI) / models.length; // Angle step based on number of models
    
    const modelScenes = models.map((model, index) => {
        const angle = index * angleStep;
        model.position.set(Math.cos(angle) * radius,
        model.position.y,
        Math.sin(angle) * radius) 
        return {
            scene: GetModelScene(model.path).scene,
            scale: model.scale,
            position: model.position,
        };
    });

    return (
        <React.Suspense>
            {modelScenes.map((x, index) => (
                <group
                    key={index}
                    position={x.position}
                    scale={x.scale}
                >
                    <primitive object={x.scene}></primitive>
                </group>
            ))}
        </React.Suspense>
    );
};



const Planets = () => {
    return (
        <React.Suspense>
            <group>
                <PlanetShip /> 
            </group>
        </React.Suspense>
    );
};

export default Planets;

type ModelType={
        path: string
        scale: Vector3,
        position: Vector3
    }
