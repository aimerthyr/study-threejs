import { createCube } from './src/geometry';
import createThreeOptions from './src/init';
import render from './src/render';
import './style.css';

// 创建 threejs 基础配置
const { scene, camera, renderer } = createThreeOptions();
// 创建正方体
const cube = createCube();
// 将正方体加入到场景
scene.add(cube);
// 实时渲染（函数会不停执行）
render({ scene, camera, renderer });
