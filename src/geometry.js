/** 创建一个立方体 */
export function createCube() {
  // 创建一个立方几何体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // 创建基础网格材质（平面或者线框）
  const material = new THREE.MeshBasicMaterial({ color: 'red' });
  // 创建网格物体
  const cube = new THREE.Mesh(geometry, material);
  return cube;
}
