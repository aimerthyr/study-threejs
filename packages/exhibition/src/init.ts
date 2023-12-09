import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { CSS3DRenderer, OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0.1;
const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = Math.PI / 4; // 最小仰角
controls.maxPolarAngle = Math.PI - Math.PI / 4; // 最大仰角
controls.enableZoom = false;

// 创建CSS3D渲染器
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0px';
cssRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(cssRenderer.domElement);

function render() {
  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(render);
}
render();

// 监听窗口大小变化
document.body.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

export { scene, camera, renderer };
