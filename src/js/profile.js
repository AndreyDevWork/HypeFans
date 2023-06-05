import Effects from "./modules/effects.mjs";
import ModifyInterface from "./modules/modify_interface.mjs";
document.addEventListener('DOMContentLoaded', () => {
  const effects = new Effects;
  const modifyInterface = new ModifyInterface;

  effects.addDeleteClass('.header__avatar', '.header__upload', 'header__upload_active');
  effects.addDeleteClass('.header__upload', '.header__upload-btn', 'header__upload-btn_active');

  modifyInterface.formToUploadPhoto('.header__upload-btn', '.header__input', '.header__form');

});