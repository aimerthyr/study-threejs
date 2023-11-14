/** 渲染函数（内部会通过 requestAnimationFrame 不停更新场景和相机实时渲染） */
export default function render(renderOption) {
  const { scene, camera, renderer } = renderOption;
  const renderloop = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(() => {
      renderloop();
    });
  };
  renderloop();
}
