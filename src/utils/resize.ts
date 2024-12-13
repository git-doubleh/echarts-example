/*
 * @Description: 自适应
 * @Date: 2024-10-15 09:40:09
 * @LastEditTime: 2024-10-15 10:42:30
 */
export const resize = () => {
  const clientWidth =
  document.body.clientWidth <= 1280 ? 1280 : document.body.clientWidth
    const pageRatio = (clientWidth / 1920).toFixed(4)
  window.document.getElementsByTagName("html")[0].style.fontSize = pageRatio + "px"
}