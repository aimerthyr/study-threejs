import '../style.css';
import { createCube } from './geometry';
import createGUI from './gui';
import createThreeOptions from './init';
import createOrbitControls from './orbitControl';
import render from './render';
import resize from './resize';

// 创建 threejs 基础配置
const { scene, camera, renderer } = createThreeOptions();
// 创建正方体
const cube = createCube();
// 创建轨道控制器
const controls = createOrbitControls(camera, renderer);
// 创建辅助坐标系
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
// 将正方体加入到场景
scene.add(cube);

cube.scale.y = 2;
// cube.rotation.x = Math.PI / 4;

// 实时渲染（函数会不停执行）
render({ scene, camera, renderer, controls });

resize(renderer, camera);

createGUI(cube, controls);
