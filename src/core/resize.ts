/** 画布自适应 */
export default function resize(renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera) {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}
