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
      <div class="wrapper">
        <div class="card">
          <div class="product-canvas">
            <Canvas>
              <mesh ref={ref}>
                <boxGeometry attach="geometry" args={[4, 4, 4]} />
              </mesh>
            </Canvas>
          </div>
          {/* 
          
          
          */}
          <h2>Color chooser</h2>

          <div class="colors">
            <div>
              <input type="color" id="head" name="head" value="#e66465" />
              <label for="head">Main</label>
            </div>

            <div>
              <input type="color" id="body" name="body" value="#f6b73c" />
              <label for="body">Stripes</label>
            </div>
            <div>
              <input type="color" id="body" name="body" value="#f6b73c" />
              <label for="body">Soul</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
