export default class Interface {
  hover(hoverElementSelector, changeElementSelector, addClass) {
    const hoverElement = document.querySelector(hoverElementSelector);
    const changeElement = document.querySelector(changeElementSelector);
    hoverElement.addEventListener('mouseenter', () => {
      changeElement.classList.add(addClass);
    });
    hoverElement.addEventListener('mouseleave', () => {
      changeElement.classList.remove(addClass);
    })
  }

  modal(btnSelector, ...pairSelectorClass) {

  }
} 