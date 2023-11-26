import { BoxGeometry, CircleGeometry, DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, SphereGeometry } from 'three';

/** 创建不同颜色面的立方体 */
export function createColorfulCube() {
  const geometry = new BoxGeometry(1, 1, 1);
  // 顺序是 x 正负，y 正负，z 正负
  const materials = ['red', 'blue', 'yellow', 'orange', 'gray', 'purple'].map(color => {
    return new MeshBasicMaterial({ color });
  });
  return new Mesh(geometry, materials);
}

/** 创建圆形平面 */
export function createCircle() {
  const circle = new CircleGeometry(5);
  const material = new MeshBasicMaterial({ color: 'red', side: DoubleSide });
  return new Mesh(circle, material);
}

/** 创建平面 */
export function createPlane() {
  const plane = new PlaneGeometry(1, 1);
  const material = new MeshBasicMaterial({ color: 'red', side: DoubleSide });
  return new Mesh(plane, material);
}

/** 创建球体 */
export function createSphere() {
  const sphere = new SphereGeometry(1);
  const material = new MeshBasicMaterial({ color: 'red' });
  return new Mesh(sphere, material);
}
