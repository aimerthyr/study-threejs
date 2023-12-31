import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

/** 创建一个立方体 */
export function createCube() {
  // 创建一个立方几何体
  const geometry = new BoxGeometry(1, 1, 1);
  // 创建基础网格材质（平面或者线框）
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  // 创建网格物体
  const cube = new Mesh(geometry, material);
  return cube;
}
