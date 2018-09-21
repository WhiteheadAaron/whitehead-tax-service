"use strict";

/* global store $  */

const eventHandlers = (function() {
  //   function render() {
  //     let aboutMeStuff = aboutMeHTML();
  //     let qualificationsStuff = qualificationsHTML();
  //     let productsStuff = productsHTML();
  //     let contactStuff = contactHTML();

  //     $('#aboutMeStuff').html(aboutMeStuff);
  //     $('#qualificationsStuff').html(qualificationsStuff);
  //     $('#productsStuff').html(productsStuff);
  //     $('#contactStuff').html(contactStuff);
  //   }

  function handleAboutMeClicked() {
    $("#about").on("click", event => {
      event.preventDefault();
      document.location.hash = "#aboutMeStuff";
    });
  }

  // function handleProductsAndServicesClicked() {
  //   $('#products').on('click', event => {
  //     event.preventDefault();
  //     // store.html = 'productsAndServices';
  //     render();
  //   });
  // }

  // function handleContactMeClicked() {
  //   $('#contact').on('click', event => {
  //     event.preventDefault();
  //     // store.html = 'contactMe';
  //     render();
  //   });
  // }

  function handleClicks() {
    handleAboutMeClicked();
    // handleProductsAndServicesClicked();
    // handleContactMeClicked();
  }

  return {
    handleClicks
    // render
  };
})();
