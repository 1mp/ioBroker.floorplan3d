import React from "react";
import {useLoader} from "react-three-fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export default function FloorPlan() {
	const gltf = useLoader(GLTFLoader, './floorplan3d/models/gleesen-grundriss-v1.gltf');

	return <primitive object={gltf.scene} position={[0, 0, 0]} />
}