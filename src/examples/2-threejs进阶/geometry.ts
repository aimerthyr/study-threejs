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

function getRandomColor() {
  // 生成随机的RGB颜色值
  const getRandomComponent = () => Math.floor(Math.random() * 256);
  // 小于 16 转成 16 进制是一个字符，所以需要在前面补一个 0
  const toHex = (num: number) => (num < 16 ? '0' : '') + num.toString(16);
  const r = getRandomComponent();
  const g = getRandomComponent();
  const b = getRandomComponent();
  // 将RGB值转换为十六进制格式
  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return hexColor;
}

function getRandomNumber(area: number[] | number): number {
  if (Array.isArray(area)) {
    const [min, max] = area;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return Math.floor(Math.random() * area + 1);
}

/** 创建多个立方体 */
export function createMultipleCubes(num: number) {
  return Array(num)
    .fill(null)
    .map(() => {
      // 大小是 3 的随机数
      const geometry = new BoxGeometry(getRandomNumber(3), getRandomNumber(3), getRandomNumber(3));
      // 颜色随机
      const material = new MeshBasicMaterial({ color: getRandomColor() });
      const cube = new Mesh(geometry, material);
      cube.name = 'cube';
      // 位置是 -5 到 5 的随机数
      cube.position.set(getRandomNumber([-5, 5]), getRandomNumber([-5, 5]), getRandomNumber([-5, 5]));
      return cube;
    });
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
