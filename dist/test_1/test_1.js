'use strict';

function togglePopup() {
  var popup = document.getElementsByClassName('popup')[0];
  if (hasClass(popup, '-hidden')) {
    removeClass(popup, '-hidden');
  } else {
    addClass(popup, '-hidden');
  }
}

function addClass(elem, className) {
  if (elem.classList) {
    elem.classList.add(className);
  } else {
    elem.className += ' ' + className;
  }
}

function removeClass(elem, className) {
  if (elem.classList) {
    elem.classList.remove(className);
  } else {
    elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(elem.className);
  }
}

function changeText() {
  var absolute = document.getElementsByClassName('absolute')[0];
  absolute.innerText = 'new text 12345!';
}