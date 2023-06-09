export default class Interface {
  triggerToggleClasses({triggerSelector, event, pair}) {
    const trigger = document.querySelector(triggerSelector);
    trigger.addEventListener(event, () => {
      pair.forEach((twoElements) => {
        const [elementSelector, classAdd] = twoElements;
        const element = document.querySelector(elementSelector);
        element.classList.toggle(classAdd);
      });
    });
  }
}

  
  

