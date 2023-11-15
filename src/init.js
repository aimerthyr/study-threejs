/** 初始化 threejs 配置 */
export default function createThreeOptions() {
  // threejs 三个要素 场景 相机 渲染器
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // 默认相机坐标是 0,0,0 并且朝向 y 轴负方向
  camera.position.z = 10;
  // 创建渲染器
  const renderer = new THREE.WebGLRenderer();
  // 设置渲染器尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 挂载到 dom 元素上
  document.body.appendChild(renderer.domElement);
  return {
    scene,
    camera,
    renderer,
  };
}
