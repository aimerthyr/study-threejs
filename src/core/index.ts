import '@/style.css';
import createThreeOptions from '@core/init';
import createOrbitControls from '@core/orbitControl';
import render from '@core/render';
import resize from '@core/resize';
import createStats from '@core/stats';

/** 创建 threejs 基础配置练习场 */
export default function createPlayground() {
  // 创建 threejs 基础配置
  const { scene, camera, renderer } = createThreeOptions();

  // 创建辅助坐标系
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  //#region 实时渲染相关
  // 创建性能监视器
  const stats = createStats();
  // 创建轨道控制器
  const controls = createOrbitControls(camera, renderer);
  // 实时渲染（函数会不停执行）
  render({ scene, camera, renderer, controls, stats });
  //#endregion

  // 窗口自适应
  resize(renderer, camera);
  return {
    scene,
    camera,
    renderer,
    controls,
  };
}
