import {
  BoxGeometry,
  MeshBasicMaterial,
  DoubleSide,
  Mesh,
  PlaneGeometry,
  TextureLoader,
  Group,
  Vector2,
  Raycaster,
  Scene,
  PerspectiveCamera,
  Object3D,
  Intersection,
  Object3DEventMap,
  VideoTexture,
} from 'three';
import { CSS3DObject } from 'three/examples/jsm/Addons.js';

export function createCube() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ side: DoubleSide });
  return new Mesh(geometry, [material]);
}

export function createMark() {
  const texture = new TextureLoader().load(new URL(`./assets/other/landmark.png`, import.meta.url).href);
  const geometry = new PlaneGeometry(0.05, 0.05);
  const material = new MeshBasicMaterial({ map: texture, side: DoubleSide, transparent: true });
  return new Mesh(geometry, material);
}

/** 清空场景中的 mark（因为要切换场景） */
export function clearMarks(group: Group) {
  [...group.children].forEach((child: any) => {
    if (!child.isCSS3DObject) {
      child.geometry.dispose();
      child.material.dispose();
      if (child.name === 'video') {
        child.material.map.image?.pause();
      }
    }
    group.remove(child);
  });
}

/** 注册点击事件 */
export function registerClickEvent(
  fn: (res: Intersection<Object3D<Object3DEventMap>>[]) => void,
  options: {
    scene: Scene;
    camera: PerspectiveCamera;
  },
) {
  document.body.addEventListener('click', ev => {
    const raycaster = new Raycaster();
    const pointer = new Vector2();
    pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, options.camera);
    const intersects = raycaster.intersectObjects(options.scene.children);
    fn(intersects.filter(v => ['landMark', 'dom', 'vide'].includes(v.object.name)));
  });
}

export function createDOM(clickEvent: () => void) {
  const element = document.createElement('div');
  element.className = 'dom-mark-style';
  element.innerText = '前进';
  element.style.pointerEvents = 'all';
  element.addEventListener('click', clickEvent);
  const css3Element = new CSS3DObject(element);
  css3Element.scale.set(1 / 800, 1 / 800, 1 / 800);
  return css3Element;
}

export function createMovie() {
  const geometry = new PlaneGeometry(0.2, 0.1);
  const video = document.createElement('video');
  video.src = '../video/movie.mp4';
  video.addEventListener('loadeddata', () => {
    video.play();
  });
  const texture = new VideoTexture(video);
  const material = new MeshBasicMaterial({ map: texture, side: DoubleSide });
  return new Mesh(geometry, material);
}
