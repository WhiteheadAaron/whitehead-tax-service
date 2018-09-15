'use strict';

/* global store */

const eventHandlers = (function() {

  function aboutMeHTML() {
    let output = '';

    if (store.html === 'aboutMe') {
      output = '<h2>About Me</h2>';
    }
    if (store.html === 'contactMe') {
      output = '<h2>Contact Me</h2>';
    }
    if (store.html === 'productsAndServices') {
      output = '<h2>Products and Services</h2>';
    }
    return output;
  }

  function render() {
    

    $('.stuff').html(aboutMeHTML);
  }


  function handleAboutMeClicked() {
    $('#about').on('click', event => {
      event.preventDefault();
      store.html = 'aboutMe';
      render();
    });
  }

  function handleProductsAndServicesClicked() {
    $('#products').on('click', event => {
      event.preventDefault();
      store.html = 'productsAndServices';
      render();
    });
  }

  function handleContactMeClicked() {
    $('#contact').on('click', event => {
      event.preventDefault();
      store.html = 'contactMe';
      render();
    });
  }
  
  
  
  function handleClicks() {
    handleAboutMeClicked();
    handleProductsAndServicesClicked();
    handleContactMeClicked();
  }

  return {
    handleClicks,
    render
  };
}());