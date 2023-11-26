import { BoxGeometry, Color, Mesh, MeshBasicMaterial, Object3DEventMap } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';
export default function createGUI(
  cube: Mesh<BoxGeometry, MeshBasicMaterial, Object3DEventMap>,
  controls: OrbitControls,
) {
  // 2. 创建 GUI 对象
  const gui = new GUI();
  // 3. 添加具体控制器使用
  // gui.add() 添加图形用户界面工具
  // 参数1：关联 DOM 对象，JS 对象，3D 物体对象
  // 参数2：对象其中的某个属性，给这个属性关联用户界面工具（从而快速调整它的值）
  // （字符串->输入框）
  gui.add(document, 'title');
  // 3.1 控制立方体显示/隐藏（布尔->多选框）
  gui.add(cube, 'visible');
  // 3.2 轨道控制器回归初始角度（函数->按钮）
  gui.add(controls, 'reset');
  // 3.3 控制立方体颜色（找属性方式：文档->打印->百度）
  // 效果：立方体默认颜色和文字 <=> 显示在工具标签上
  const colorObj = {
    color: `#${cube.material.color.getHexString()}`,
  };
  gui.addColor(colorObj, 'color').onChange(val => {
    cube.material.color = new Color(val);
  });
  // 3.4 创建分组-立方体位置
  const folder = gui.addFolder('立方体位置');
  // 参数3：最小值范围，参数4：最大值范围，参数5：步长 （数字->进度条）
  folder.add(cube.position, 'x', -5, 5, 0.1);
  folder.add(cube.position, 'y', -5, 5, 0.1);
  folder.add(cube.position, 'z', -5, 5, 0.1);
  folder.open();
  // 3.5 下拉菜单(关键：第三个参数为对象时->下拉菜单)
  // 对象中属性名->下拉菜单选项名
  // 初始值匹配后会影响下拉菜单默认选中哪一项
  gui.add({ 类型: '1' }, '类型', { 方案1: '1', 方案2: '2' }).onChange(val => {
    // val 方案对象的 '1','2'
    switch (val) {
      case '1':
        cube.position.set(0, 0, 0);
        break;
      case '2':
        cube.position.set(2, 2, 2);
        break;
    }
  });
}
