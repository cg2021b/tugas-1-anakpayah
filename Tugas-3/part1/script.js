
//======== UTILS
const randomInRange = (from, to, convertInt = false) => {
    let x = Math.random() * (to - from);
  
    if (convertInt) return Math.floor(x + from);
    return x + from;
  };
  
  // Texture Loader
  const textureLoader = new THREE.TextureLoader();
  const brickTexture = textureLoader.load("brick.jpg");
  const woodTexture = textureLoader.load("Wood.jpg");
  
  const createCube = (
    width,
    height,
    depth,
    texture,
    color =  0xffffff,
    position = [0, 0, 0]
  ) => {
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(depth, height, width),
      new THREE.MeshPhongMaterial({ color: color, map: texture})
    );
  
    cube.position.x = position[0];
    cube.position.y = position[1];
    cube.position.z = position[2];
    return cube;
  };
  
  const createPlane = (width, height, color = Math.random() * 0xffffff) => {
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshPhongMaterial({
        color: color,
        side: THREE.DoubleSide,
        shininess: 0,
      })
    );
    return plane;
  };

//======= UTILS

// canvas
const canvas = document.querySelector("canvas.webgl");

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbffffb);
scene.fog = new THREE.FogExp2(0xffffff, 0.002);

// lighting
const dirLight1 = new THREE.DirectionalLight(0xffffff);
dirLight1.position.set(-700, 700, 150);
dirLight1.castShadow = true;

dirLight1.shadow.mapSize.width = 1024;
dirLight1.shadow.mapSize.height = 512;

dirLight1.shadow.camera.near = 100;
dirLight1.shadow.camera.far = 1200;

dirLight1.shadow.camera.left = -1000;
dirLight1.shadow.camera.right = 1000;
dirLight1.shadow.camera.top = 350;
dirLight1.shadow.camera.bottom = -350;

scene.add(dirLight1);

const dirLight2 = new THREE.DirectionalLight(0x002288);
dirLight2.position.set(-1, -1, -1);
scene.add(dirLight2);

const dirLight3 = new THREE.DirectionalLight(0xffffff, 0.2);
dirLight3.position.set(1500, 900, 100);
dirLight3.castShadow = true;

dirLight3.shadow.mapSize.width = 1024;
dirLight3.shadow.mapSize.height = 512;

dirLight3.shadow.camera.near = 100;
dirLight3.shadow.camera.far = 1200;

dirLight3.shadow.camera.left = -1000;
dirLight3.shadow.camera.right = 1000;
dirLight3.shadow.camera.top = 350;
dirLight3.shadow.camera.bottom = -350;

scene.add(dirLight3);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

// geometry
ground = createPlane(16000, 16000, 0xbffffa);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

  for (let j = 1; j <= 15; j++) {

    let posZ = -500 + j * 80;
    let randY = 200 - j * 10;

  let posX1= -60, posZ1 = -50;
  let posX2= 20, posZ2 = 10;

  let sizeX1= randomInRange(10, 15, true),
    sizeY1= randomInRange(randY-10, randY, true),
    sizeZ1= randomInRange(10, 15, true);
    
  let sizeX2= randomInRange(10, 15, true),
    sizeY2= randomInRange(randY-15, randY, true),
    sizeZ2= randomInRange(10, 15, true);

    const blok = createCube(sizeX1, sizeY1, sizeZ1, brickTexture);
      blok.castShadow = true;
      blok.receiveShadow = false;
      blok.position.x = posX1 - j*2;
      blok.position.z = posZ -30;
      blok.position.y += 0.5 * sizeY1;
    scene.add(blok);

    const blok2 = createCube(sizeX2, sizeY2, sizeZ2, woodTexture);
      blok2.castShadow = true;
      blok2.receiveShadow = false;
      blok2.position.x = posX2 + j*2;
      blok2.position.z = posZ + 25;
      blok2.position.y += 0.5 * sizeY2;
    scene.add(blok2);

  }


// size optimize 
const sizes = {
    width: 0.8 * window.innerWidth,
    height: 0.8 * window.innerHeight,
  };

// camera setting
camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
);
camera.position.set(0, 70, 200);
  
controls = new THREE.MapControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 100;
controls.maxDistance = 750;
controls.maxPolarAngle = Math.PI / 2;

// render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


//=========== Interactive Action
// Sizing canvas
  window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = 0.9 * window.innerWidth;
  sizes.height = 0.9 * window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const mainLoop = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(mainLoop);
};
  
mainLoop();