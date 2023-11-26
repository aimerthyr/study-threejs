import { createMultipleCubes } from '@common/geometry';
import initEvents from './event';
import { createDOM } from './model';
import createPlayground from '@core/index';

const { scene, camera, controls, renderer } = createPlayground();

// 1. 创建一个全景地球
// const earth = createEarth();
// scene.add(earth);

// 2. 创建一个全景公园
// const park = createPark();
// // 把摄像头放到内部，不能给 0（是因为轨道控制器会和摄像机做类似于乘法计算）
// camera.position.z = 0.1;
// park.scale.set(1, 1, -1);
// scene.add(park);

// 3. 创建一个视频
// const video = createVideo();
// scene.add(video);

// 4. 创建一个原生 DOM
const { elementObj, css3Renderer } = createDOM();
scene.add(elementObj);
function renderLoop() {
  renderer.render(scene, camera);
  controls.update();
  css3Renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
}
renderLoop();
const cubeList = createMultipleCubes(6);
cubeList.forEach(cube => {
  scene.add(cube);
});
initEvents(scene, camera);
