import {
  BoxGeometry,
  DoubleSide,
  Group,
  Intersection,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Object3DEventMap,
  SRGBColorSpace,
  TextureLoader,
} from 'three';
import '../style.css';
import { scene, camera } from './init';
import { SCENE_CONFIG } from './config';
import { clearMarks, createCube, createDOM, createMark, registerClickEvent } from './utils';

const cube = createCube();
// 用于存放 mark 标记
const group = new Group();
// 点击 mark 标记
const clickMarkTarget = (data: Intersection<Object3D<Object3DEventMap>>[]) => {
  if (data.length === 0) return;
  switchScene(data[0].object.userData.target, cube);
};

/** 切换场景 */
function switchScene(sceneName: string, cube: Mesh<BoxGeometry, MeshBasicMaterial[]>) {
  clearMarks(group);
  const config = SCENE_CONFIG.get(sceneName)!;
  const materialList = config.imageUrlList.map(v => {
    const texture = new TextureLoader().load(`../technology/${config.index}/${v}`);
    // 设置颜色通道，防止颜色过浅
    texture.colorSpace = SRGBColorSpace;
    const material = new MeshBasicMaterial({ map: texture, side: DoubleSide });
    return material;
  });
  cube.material = materialList;
  cube.scale.set(1, 1, -1);

  config.markList.forEach(v => {
    let mark = null;
    if (v.name === 'landMark') {
      mark = createMark(`../other/landmark.png`);
    } else if (v.name === 'dom') {
      const clickEvent = () => {
        switchScene(v.targetAttr, cube);
      };
      mark = createDOM(clickEvent);
    } else {
      // mark = createMovie();
    }
    const [px, py, pz] = v.position;
    const [rx, ry, rz] = v.rotation;
    mark.name = v.name;
    mark.userData = {
      target: v.targetAttr,
    };
    mark.position.set(px, py, pz);
    mark.rotation.set(rx, ry, rz);
    group.add(mark);
  });
  scene.add(group);
}

scene.add(cube);

switchScene('one', cube);

registerClickEvent(clickMarkTarget, { scene, camera });

document.body.addEventListener('click', () => {});
