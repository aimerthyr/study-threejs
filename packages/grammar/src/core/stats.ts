import Stats from 'three/examples/jsm/libs/stats.module.js';

/** 创建性能监视器 */
export default function createStats() {
  const stats = new Stats();
  document.body.appendChild(stats.dom);
  return stats;
}
