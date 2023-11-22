import { PerspectiveCamera, WebGLRenderer } from 'three';

/** 画布自适应 */
export default function resize(renderer: WebGLRenderer, camera: PerspectiveCamera) {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}
