import { useRef, useState } from "react";
//
// the canvas is our scene
import { Canvas } from "@react-three/fiber";
//
// The Orbits controls will help us to rotate the model in a tridimensional way
import { OrbitControls, useGLTF } from "@react-three/drei";
// the useGLTF, will help us to load the model in the gltf format.

function App() {
  //

  const ref = useRef();
  //

  return (
    <div className="App">
      <Canvas>
        <mesh ref={ref}>
          <boxGeometry attach="geometry" args={[4, 4, 4]} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
