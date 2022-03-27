### Product Configurator with react-three-fiber

<br>

> Product configuration is the process of customizing a product to meet the needs of a customer. A product configuration tool is usually included as a part of CPQ software and allows customers and sales reps to configure products themselves.

<br>
<br>

#### articles

[Building a 3D Product Configurator with Nuxt and Three.js (Part 1)](https://official-osorina.medium.com/creating-a-3d-configurator-with-nuxt-and-three-js-part-1-6d40da0209e0)

<br>

#### video examples

[3D model configurator with React Three Fiber and gltfjsx](https://www.youtube.com/watch?v=xy_tbV4pC54)

[Working with GLTF models in React.js: Build a product customizer with react-three-fiber](https://www.youtube.com/watch?v=2jwqotdQmdQ&list=PLIQopnnM5nVatnVa0YZZFGG1EDaSpJ2tn&index=480)

<br>
<br>

---

<br>
<br>

# 🐖

## Before start!!!

> Read the documentation and install the dependencies 🌞

<br>

#### React three fiber

##### [documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)

<br>

#### Models

##### Get some models here:

- low poly [poly.pizza](https://poly.pizza/search/shoe)

[]()

<br>

#### Installation

```javascript
npm i three @react-three/fiber @react-three/drei
```

##### What is react three Drei?

> A growing collection of useful helpers and fully functional, ready-made abstractions for react-three-fiber. If you make a component that is generic enough to be useful to others, think about making it available here through a PR! npm install @react-three/drei.

<br>

##### [@react Three/drei Examples](https://codesandbox.io/examples/package/@react-three/drei)

<br>
<br>

### What we will be doing in this tutorial:

<br>

- How to use React.js with react-three-fiber to render and manipulate 3d models

- How to interactively change properties of the 3d model

- How to work with **GLTF** file formats in React

<br>
<br>

---

<br>
<br>

# 🌈

## Lets Begin!!!

<br>

#### Import the dependencies we will be using to create the project:

<br>

```javascript
import { useRef, useState } from "react";
//
// the canvas is our scene
import { Canvas } from "@react-three/fiber";
//
// The Orbits controls will help us to rotate the model in a tridimensional way
import { OrbitControls, useGLTF } from "@react-three/drei";
// the useGLTF, will help us to load the model in the gltf format.
```

<br>
<br>

# 🎨

### The Canvas

> **Like in painting, the canvas** is the thing where you add all the stuff you want your scene to contain, a painter will add threes, flowers, clouds etc inside the canvas, but before we can use the canvas we have to choose the size of our canvas, do we want it large or really wide?...

<br>

- Start by adding the **canvas**, then inside the canvas add a geometry.

<br>

- To this geometry you will add some values **height, width, depth** in other words the **x,y,z** axis.

```javascript
// args: arguments
args={[2,2,]}
```

<br>

#### Inside the canvas we will tell it that we will like to start with a mesh, the sort of mesh we want is a box, so in this case it's a boxGeometry, you can also add plane geometry etc

<br>

> **A Mesh** is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space. We'll create a new mesh using a BoxGeometry and a MeshStandardMaterial which automatically attach to their parent. [Adding a Mesh Component](https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene)
