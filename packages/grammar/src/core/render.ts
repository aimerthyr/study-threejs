import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

/** 渲染函数（内部会通过 requestAnimationFrame 不停更新场景和相机实时渲染） */
export default function render(renderOption: {
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  controls: OrbitControls;
  stats: Stats;
}) {
  const { scene, camera, renderer, controls, stats } = renderOption;
  const renderloop = () => {
    renderer.render(scene, camera);
    // 需要调用 update() 方法，去更新轨道的位置
    controls.update();
    // 需要调用 update() 方法，去更新性能统计
    stats.update();
    requestAnimationFrame(() => {
      renderloop();
    });
  };
  renderloop();
}
