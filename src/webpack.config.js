'use strict';

let path = require('path');

module.exports = {
  mode: 'development', // режим в котором будет работать веб пак (девелопмент, продакшн)
  entry: {
    signup: './js/signup.js',
    login: './js/login.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/js')
  },
  watch: true, // тру - веб пак будет отслеживать изменение файлов и в автоматическом режиме соберать проект

  // devtool: "source-map", // хранит местоположение иходника

  module: {} // модули и их настройка, можно установить babel
};

