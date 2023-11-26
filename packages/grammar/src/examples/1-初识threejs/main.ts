import createPlayground from '@core/index';
import { createCube } from './geometry';
import createGUI from './gui';

const { scene, controls } = createPlayground();

const cube = createCube();
// 将正方体加入到场景
scene.add(cube);

// 创建 GUI 辅助工具
createGUI(cube, controls);
