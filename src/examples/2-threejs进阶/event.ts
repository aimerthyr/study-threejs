import { BoxGeometry, Mesh, MeshBasicMaterial, Scene } from 'three';

/** 初始化事件监听 */
export function initEvents(scene: Scene) {
  // 双击随机移除一个物体
  window.addEventListener('dblclick', () => {
    const cubeList = scene.children.filter(item => item.name === 'cube') as Mesh<BoxGeometry, MeshBasicMaterial>[];
    if (!cubeList.length) {
      return;
    }
    const cube = cubeList[0];
    // 移除物体时，需要将其图形和材质都移除掉（调用 dispose 方法）
    cube.geometry.dispose();
    cube.material.dispose();
    scene.remove(cube);
  });
}
