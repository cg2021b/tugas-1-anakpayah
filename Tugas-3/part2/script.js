// Canvas
const canvas = document.querySelector("canvas.webgl");

// Buat Scene
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xbffffb, 0.003);
scene.background = new THREE.Color(0xbffffb);

// Pengaturan Camera
const sizes = {
  width: 0.8 * window.innerWidth,
  height: 0.8 * window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  2000
);
camera.position.set(16, 9, 35);

const orbitControls = new THREE.OrbitControls(camera, canvas);
orbitControls.target.set(0, 5, 0);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


// Create Lighting
scene.add(new THREE.DirectionalLight(0xffffff, 2));
scene.add(new THREE.AmbientLight(0xd1fff0, 0.8));

// Create Geometry
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 200),
    new THREE.MeshPhongMaterial({
      color: 0xfced1,
      side: THREE.DoubleSide,
      shininess: 1,
    })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  scene.add(ground);

// Render Load Model 

let loader = new THREE.GLTFLoader();
loader.load("ijn_shimakaze/scene.gltf", (gltf) => { 
    gltf.scene.scale.set(10,10,10);
    scene.add(gltf.scene) 
} );


// Sizing canvas
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = 0.8 * window.innerWidth;
    sizes.height = 0.8 * window.innerHeight;
  
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
  
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
  
  const mainLoop = () => {
    renderer.render(scene, camera);
    orbitControls.update();
    window.requestAnimationFrame(mainLoop);
  };
  
  mainLoop();