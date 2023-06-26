import Interface from "./modules/interface.mjs";
import Form from "./modules/form.mjs";
document.addEventListener('DOMContentLoaded', () => {
  const interfacee = new Interface;
  const form = new Form;

  interfacee.triggerToggleClasses({
    triggerSelector: '.header__avatar',
    event: 'mouseenter',
    pair: [
      ['.header__upload', 'header__upload_active']
    ]
  });
  interfacee.triggerToggleClasses({
    triggerSelector: '.header__avatar',
    event: 'mouseleave',
    pair: [
      ['.header__upload', 'header__upload_active']
    ]
  });


  interfacee.triggerToggleClasses({
    triggerSelector: '.header__upload',
    event: 'mouseenter',
    pair: [
      ['.header__upload-btn', 'header__upload-btn_active']
    ]
  });
  interfacee.triggerToggleClasses({
    triggerSelector: '.header__upload',
    event: 'mouseleave',
    pair: [
      ['.header__upload-btn', 'header__upload-btn_active']
    ]
  });


  form.modifyUploadPhoto('.header__upload-btn', '.header__input', '.header__form');


  interfacee.triggerToggleClasses({
    triggerSelector: '.header__btn',
    event: 'click',
    pair: [
      ['.menu__modal', 'menu__modal_active'],
      ['.menu__overlay', 'menu__overlay_active']
    ]
  });

  
  interfacee.triggerToggleClasses({
    triggerSelector: '.menu__overlay',
    event: 'click',
    pair: [
      ['.menu__modal', 'menu__modal_active'],
      ['.menu__overlay', 'menu__overlay_active']
    ]
  });
  interfacee.triggerToggleClasses({
    triggerSelector: '#cancel',
    event: 'click',
    pair: [
      ['.menu__modal', 'menu__modal_active'],
      ['.menu__overlay', 'menu__overlay_active']
    ]
  });

  form.modifyUploadPhoto('.upload__btn', '.upload__input', '.upload');


});






