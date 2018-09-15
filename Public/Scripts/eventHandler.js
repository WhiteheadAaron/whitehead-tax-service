'use strict';

const eventHandlers = (function() {




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
  
  function handleMakeAnAppointmentClicked() {
    $('#appointment').on('click', event => {
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
    handleMakeAnAppointmentClicked();
    handleContactMeClicked();
  }

  return {
    handleClicks,
    // render
  };
}());