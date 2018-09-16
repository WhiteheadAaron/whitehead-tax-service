'use strict';

/* global store */

const eventHandlers = (function() {

  function aboutMeHTML() {
    let output = '';

    if (store.html === 'aboutMe') {
      output =
       `<div class="aboutMeGrid">
       <div class = "aboutHeader">
        <h2>Randy Whitehead</h2>
            <h3>CPA</h3>
    </div>
    <img src="../Images/randy.jpg" class="aboutMeImage">
    <div class="aboutInfo">
        <p>My name is Randy, and I have been running my own tax business for people in the greater Madison area for 10? years. My full time day job is working for the City of Madison as a Principal Accountant. I have been working in this role since March of 2004.</p>
    </div>
    <div class="aboutQualificationsHeader">
        <h2>Qualifications</h2>
    </div>
    <div class="aboutQualificationCPA">
        <h3>Certified Public Account</h3>
            <p>Some information about your CPA certification</p>
    </div>
    <div class="aboutQualificationCollege">
        <h3>Upper Iowa University</h3>
            <p>Some information about your college</p>
    </div>
    </div>`;
    }
    if (store.html === 'contactMe') {
      output = `<div class="contactGrid">
      <div class="contactHeader">
          <h2>Contact Me</h2>
      </div>
      <div class="contactInfo">
          <p>Give me a call or send me an e-mail, and we can get to scheduling your tax appointment! Feel free to let me know which product or service you're interested in. If you don't quite know for sure, no problem! I can get more details from you, and we can discuss what your best option is.</p>
      </div>
      <div class="contactPhoneImg">
          <img src="../Images/phone.jpg" class="phoneImg">
      </div>
      <div class="contactEmailImg">
          <img src="../Images/email.jpg" class="emailImg">
      </div>
      <div class="contactPhone">
          <p>(608) 333-1090</p>
      </div>
      <div class="contactEmail">
          <p>WhiteheadRandy@hotmail.com</p>
      </div>
  </div>`;
    }
    if (store.html === 'productsAndServices') {
      output = '<h2>Coming Soon!</h2>';
    }
    return output;
  }

  function render() {
    let pageStuff = aboutMeHTML();
    console.log(pageStuff);

    $('.stuff').html(pageStuff);
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