import {
  BufferAttribute,
  BufferGeometry,
  Line,
  LineBasicMaterial,
  LineSegments,
  MeshBasicMaterial,
  Points,
  PointsMaterial,
  SphereGeometry,
} from 'three';

/** 创建点状球体 */
export function createPointSphere() {
  const geometry = new SphereGeometry(1);
  // 点物体要使用点物体的材料
  const material = new PointsMaterial({
    color: 'blue',
    size: 0.05,
  });
  return new Points(geometry, material);
}

/** 创建线状球体 */
export function createLineSphere() {
  const geometry = new SphereGeometry(1);
  // 线物体要使用线物体的材料
  const material = new LineBasicMaterial({
    color: 'blue',
  });
  return new Line(geometry, material);
}

/**
 * 创建线
 * Line 将每个顶点连接起来的一条连续的线
 * LineLoop 所有顶点连接起来，最后将第一个顶点和最后一个顶点相连接
 * LineSegments 两个点为一组，连接成线段。不足两个点的不会连接
 *  */
export function createLine() {
  // 创建空几何体
  const geometry = new BufferGeometry();
  // 确定顶点
  const vertices = new Float32Array([
    //
    1, 0, 0,
    //
    0, 0, 1,
    //
    -1, 1, 0,
  ]);
  // 设置几何体顶点位置（ 3 代表三个点一个组）
  geometry.setAttribute('position', new BufferAttribute(vertices, 3));
  const material = new MeshBasicMaterial({ color: 'red' });
  return new LineSegments(geometry, material);
}
