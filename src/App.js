import { Suspense, useRef, useState } from "react";
//
// the canvas is our scene
import { Canvas } from "@react-three/fiber";
//
// The Orbits controls will help us to rotate the model in a tridimensional way
import { OrbitControls, useGLTF } from "@react-three/drei";
// the useGLTF, will help us to load the model in the gltf format.

/*




*/

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={"#94B8B7"}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={"#BCD7D4"}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={"#788780"}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={"#BCD7D4"}
      />
    </group>
  );
}

function App() {
  //
  const [mesh, setMesh] = useState("#BCD7D4");
  const [stripes, setStripes] = useState("#b2cdc7");
  const [soul, setSoul] = useState("#BCD7D4");
  const [band, setBand] = useState("#ffffff");
  //

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />

                <Model
                  customColors={{
                    mesh: mesh,
                    stripes: stripes,
                    soul: soul,
                    band: band,
                  }}
                />

                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </div>
          {/* 
          
          
          */}
          <h2>Color chooser</h2>

          <div className="colors">
            <div>
              <input
                type="color"
                id="mesh"
                name="mesh"
                value={mesh}
                onChange={(e) => setMesh(e.target.value)}
              />
              <label for="mesh">Mesh</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={stripes}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label for="stripes">Stripes</label>
            </div>
            <div>
              <input
                type="color"
                id="soul"
                name="soul"
                value={soul}
                onChange={(e) => setSoul(e.target.value)}
              />
              <label for="soul">Soul</label>
            </div>
            <div>
              <input
                type="color"
                id="band"
                name="band"
                value={band}
                onChange={(e) => setBand(e.target.value)}
              />
              <label for="band">Band</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
