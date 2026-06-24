import * as THREE from 'three';

// Thiết lập Scene
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(200, 200);
container.appendChild(renderer.domElement);

// Tạo một khối hình học (Geometry)
const geometry = new THREE.IcosahedronGeometry(1, 1);
const material = new THREE.MeshNormalMaterial({ wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 2.5;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();