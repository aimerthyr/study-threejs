import createPlayground from '@core/index';
import { createMultipleCubes } from './geometry';

const { scene } = createPlayground();

// 1. 创建六个颜色面的立方体
// const colorfulCube = createColorfulCube();
// scene.add(colorfulCube);

// 2. 创建多个立方体
const cubeList = createMultipleCubes(6);
cubeList.forEach(cube => {
  scene.add(cube);
});
