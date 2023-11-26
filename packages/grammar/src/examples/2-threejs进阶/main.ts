import createPlayground from '@core/index';
import { createLine } from './model';

const { scene } = createPlayground();

// 1. 创建六个颜色面的立方体
// const colorfulCube = createColorfulCube();
// scene.add(colorfulCube);

// 2. 创建多个立方体
// const cubeList = createMultipleCubes(6);
// cubeList.forEach(cube => {
//   scene.add(cube);
// });

// initEvents(scene);

// 3. 创建圆形平面
// const circle = createCircle();
// scene.add(circle);
// 4. 创建平面
// const plane = createPlane();
// scene.add(plane);
// 5. 创建球体
// const sphere = createSphere();
// scene.add(sphere);
// 6. 创建点状球体
// const pointSphere = createPointSphere();
// scene.add(pointSphere);
// 7. 创建线状球体
// const lineSphere = createLineSphere();
// scene.add(lineSphere);
// 8. 创建一条线
const line = createLine();
scene.add(line);
