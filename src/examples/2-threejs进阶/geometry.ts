/** 创建不同颜色面的立方体 */
export function createColorfulCube() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // 顺序是 x 正负，y 正负，z 正负
  const materials = ['red', 'blue', 'yellow', 'orange', 'gray', 'purple'].map(color => {
    return new THREE.MeshBasicMaterial({ color });
  });
  return new THREE.Mesh(geometry, materials);
}

function getRandomColor() {
  // 生成随机的RGB颜色值
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // 将RGB值转换为十六进制格式
  const hexColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
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
export function createMultipleCubes() {
  return Array(6)
    .fill(null)
    .map(() => {
      // 大小是 3 的随机数
      const geometry = new THREE.BoxGeometry(getRandomNumber(3), getRandomNumber(3), getRandomNumber(3));
      // 颜色随机
      const material = new THREE.MeshBasicMaterial({ color: getRandomColor() });
      const cube = new THREE.Mesh(geometry, material);
      // 位置是 -5 到 5 的随机数
      cube.position.set(getRandomNumber([-5, 5]), getRandomNumber([-5, 5]), getRandomNumber([-5, 5]));
      return cube;
    });
}
