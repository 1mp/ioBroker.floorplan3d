import React, { Suspense } from "react";
import {Canvas} from "react-three-fiber";
import FloorPlan from "../../floor-plan/components/floor-plan";

export default function Main() {
	return (
		<Canvas camera={{ position: [10, 10, 10] }}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Suspense fallback={null}>
				<FloorPlan/>
			</Suspense>
		</Canvas>
	)
}