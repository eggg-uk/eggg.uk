// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.8 / window.innerHeight * 0.8, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
document.getElementById('canvas').appendChild(renderer.domElement);

// Lighting
const light = new THREE.AmbientLight(0x404040);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff,1);
directionalLight.position.set(5,10,7.5);
scene.add(directionalLight);

// Models array and bounding box tracker
const models = [];
let totalWidth = 0;
let totalHeight = 0;
let totalDepth = 0;

// OrbitControls for mouse interaction
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable damping (inertia)
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;

// Function to update the camera and viewport
function updateCameraAndViewport() {
    // Calculate bounding box
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);

    // Update total dimensions
    totalWidth = size.x;
    totalHeight = size.y;
    totalDepth = size.z;

    // Calculate the center of the bounding box
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Position the camera to fit the entire bounding box
    const maxDim = Math.max(totalWidth, totalHeight, totalDepth);
    const fov = camera.fov * (Math.PI / 30);
    const distance = Math.abs(maxDim / (2 * Math.tan(fov / 2)));
    camera.position.set(center.x*2, center.y*1.25, center.z + 25 );
    camera.lookAt(center);

    // Update the renderer and camera aspect ratio
    camera.aspect = window.innerWidth * 0.8 / window.innerHeight * 0.8;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
}

// Function to add a model
function addModel(x, y, z) {
    //debug
    console.log('addModel called: x:' , x ,' y:', y ,' z:', z);
    //
    const geometry = new THREE.BoxGeometry(x, y, z);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0xDA9814,
        metalness: 0.5,
        roughness: 0.5
    });
    const cube = new THREE.Mesh(geometry, material);

    // Position the model to avoid overlap
    cube.position.x = (totalWidth + x + 50)  ;
    models.push(cube);
    scene.add(cube);

    // Update camera and viewport
    updateCameraAndViewport();
}

function addSpheroid(x,y,z){
    const geometry = new THREE.SphereGeometry(0.5,32,16);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0xDA9814,
        metalness: 0.5,
        roughness: 0.5
    });
    const sphere = new THREE.Mesh(geometry, material);

    // Position the model to avoid overlap
    sphere.position.x = (totalWidth + x + 50)  ;
    sphere.scale.x = x;
    sphere.scale.y = y;
    sphere.scale.z = z;
    models.push(sphere);
    scene.add(sphere);

    // Update camera and viewport
    updateCameraAndViewport();

}

// Function to remove the last model
function removeModel() {
    const model = models.pop();
    if (model) {
        console.log('removing Model: ',model)
        scene.remove(model);
        updateCameraAndViewport(); // Update camera and viewport after removing the model
    }
}

// Event listeners for buttons
document.getElementById('addModel').addEventListener('click', () => {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const z = parseFloat(document.getElementById('z').value);
    if (x > 0 && y > 0 && z > 0) {
        addModel(x, y, z);
    }
});

document.getElementById('removeModel').addEventListener('click', removeModel);

// Set up camera position
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update controls
    renderer.render(scene, camera);
}

document.getElementById('addSpheroid').addEventListener('click', () => {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const z = parseFloat(document.getElementById('z').value);
    if (x > 0 && y > 0 && z > 0) {
        addSpheroid(x, y, z);
    }
});




animate();
