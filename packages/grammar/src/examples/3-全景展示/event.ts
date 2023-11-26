import { PerspectiveCamera, Raycaster, Scene, Vector2 } from 'three';

export default function initEvents(scene: Scene, camera: PerspectiveCamera) {
  window.addEventListener('click', ev => {
    // 定义光线投射对象
    const raycaster = new Raycaster();
    // 定义二维向量（用于保存转换后的 x,y 坐标）
    const pointer = new Vector2();
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
    // 通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(pointer, camera);
    // 获取这条线穿过了哪些物体，收集成一个数组
    console.log(raycaster.intersectObjects(scene.children));
  });
}
