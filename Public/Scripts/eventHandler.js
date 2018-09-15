'use strict';

const eventHandlers = (function() {

  function aboutMeHTML() {
    const output = '<h2>HELLO THERE</h2>';
    return output;
  }

  function render() {
    $('.stuff').html('<h2>HELLO THERE</h2>');
  }


  function handleAboutMeClicked() {
    $('#about').on('click', event => {
      event.preventDefault();
      
    });
  }

  function handleProductsAndServicesClicked() {
    $('#products').on('click', event => {
      event.preventDefault();
      
    });
  }

  function handleContactMeClicked() {
    $('#contact').on('click', event => {
      event.preventDefault();
      
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