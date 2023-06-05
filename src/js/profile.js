import Interface from "./modules/interface.mjs";
import Form from "./modules/form.mjs";
document.addEventListener('DOMContentLoaded', () => {
  const interfacee = new Interface;
  const form = new Form;

  interfacee.hover('.header__avatar', '.header__upload', 'header__upload_active');
  interfacee.hover('.header__upload', '.header__upload-btn', 'header__upload-btn_active');

  form.modifyUploadPhoto('.header__upload-btn', '.header__input', '.header__form');

  interfacee.modal('.header__btn', ['menu__modal', 'menu__modal_active'], ['menu__overlay', 'menu__overlay_active']);

});