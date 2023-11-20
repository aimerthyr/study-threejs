import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
/** 创建一个轨道控制器 */
export default function createOrbitControls(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  // 1. 阻尼效果
  controls.enableDamping = true;
  // // 2. 开启自动旋转轨道控制器效果->带动摄像机一起旋转（摄像机顺时针水平旋转）
  // controls.autoRotate = true;
  // // 3. 垂直角度范围控制（0 上面，Math.PI 下面）
  // controls.maxPolarAngle = Math.PI;
  // controls.minPolarAngle = 0;
  // // 水平角度范围控制
  // controls.maxAzimuthAngle = 1.5 * Math.PI;
  // controls.minAzimuthAngle = 0.5 * Math.PI;
  // // 4. 摄像机移动范围控制
  // controls.minDistance = 2;
  // controls.maxDistance = 10;
  return controls;
}
