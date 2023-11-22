import {
  BoxGeometry,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  SRGBColorSpace,
  SphereGeometry,
  TextureLoader,
  VideoTexture,
} from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/Addons.js';

/** 创建一个全景地球 */
export function createEarth() {
  // 创建球体
  const geometry = new SphereGeometry(3);
  // 使用纹理加载器去创建纹理对象
  const texture = new TextureLoader().load('/images/earth.png');
  // 使用纹理对象创建材质对象
  const material = new MeshBasicMaterial({ map: texture });
  return new Mesh(geometry, material);
}

/** 创建一个全景公园 */
export function createPark() {
  const geometry = new BoxGeometry(5, 5, 5);
  const imgURLs = ['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg'];
  const materials = imgURLs.map(url => {
    const texture = new TextureLoader().load(`/images/${url}`);
    // 设置纹理对象的颜色通道为 RGB（防止图片颜色太浅）
    texture.colorSpace = SRGBColorSpace;
    return new MeshBasicMaterial({ map: texture, side: DoubleSide });
  });
  return new Mesh(geometry, materials);
}

/** 创建一个视频 */
export function createVideo() {
  const geometry = new PlaneGeometry(6, 3);
  const video = document.createElement('video');
  video.src = '/public/videos/mouse_cat.mp4';
  video.muted = true;
  video.addEventListener('loadeddata', () => {
    video.play();
  });
  // 视频纹理器可以将视频转成纹理对象
  const texture = new VideoTexture(video);
  const material = new MeshBasicMaterial({ map: texture });
  return new Mesh(geometry, material);
}

/** 创建 DOM */
export function createDOM() {
  const element = document.createElement('div');
  element.innerText = '我是 div';
  element.style.color = '#fff';

  // 将 DOM 元素 转成 3D 物体
  const elementObj = new CSS3DObject(element);
  // 默认会把字体大小直接当成单位，这就会导致变得特别大（所以一般会进行缩放）
  elementObj.scale.set(1 / 16, 1 / 16, 1 / 16);
  // 创建一个 DOM 渲染器
  const css3Renderer = new CSS3DRenderer();
  css3Renderer.setSize(window.innerWidth, window.innerHeight);
  css3Renderer.domElement.style.position = 'fixed';
  css3Renderer.domElement.style.left = '0';
  css3Renderer.domElement.style.top = '0';
  // 防止创建的 HTML 元素遮挡场景（所以禁用掉所有鼠标交互）
  css3Renderer.domElement.style.pointerEvents = 'none';
  document.body.appendChild(css3Renderer.domElement);
  return {
    elementObj,
    css3Renderer,
  };
}
