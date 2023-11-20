import { OrbitControls } from "three/examples/jsm/Addons.js";

/** 渲染函数（内部会通过 requestAnimationFrame 不停更新场景和相机实时渲染） */
export default function render(renderOption: {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
}) {
  const { scene, camera, renderer, controls } = renderOption;
  const renderloop = () => {
    renderer.render(scene, camera);
    // 需要调用 update() 方法，去更新轨道的位置
    controls.update();
    requestAnimationFrame(() => {
      renderloop();
    });
  };
  renderloop();
}
