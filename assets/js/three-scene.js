window.addEventListener("load", () => {
let targetRotation = 0;
const scene = new THREE.Scene();

const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

const renderer =
    new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });

renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        1.5
    )
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document
    .getElementById("three-container")
    .appendChild(renderer.domElement);

const material =
    new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });

const particlesCount = 500;

const positions = new Float32Array(
    particlesCount * 3
);

for(let i = 0; i < particlesCount * 3; i++){

    positions[i] =
        (Math.random() - 0.5) * 50;
}

const particlesGeometry =
    new THREE.BufferGeometry();

particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);

const particlesMaterial =
    new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.03
    });

const particles =
    new THREE.Points(
        particlesGeometry,
        particlesMaterial
    );

scene.add(particles);

camera.position.z = 5;
const clock = new THREE.Clock();
function animate() {

    const elapsed =
clock.getElapsedTime();

particles.rotation.y =
elapsed * 0.05;
    particles.rotation.x += 0.0002;

    renderer.render(scene, camera);
}

animate();

window.addEventListener("scroll",()=>{

    targetRotation =
        window.scrollY * 0.001;

});
});