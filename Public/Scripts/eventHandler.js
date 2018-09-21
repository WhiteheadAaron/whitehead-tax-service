"use strict";

/* global store $  */

const eventHandlers = (function() {
  function aboutMeHTML() {
    let html = `            <div id="aboutMeStuff">
    <div class="aboutMeGrid">
        <div class="aboutHeader">
            <h2>Randy Whitehead</h2>
            <h3>CPA</h3>
        </div>
        <img src="./Images/randy.jpg" class="aboutMeImage">
        <div class="aboutInfo">
            <p>My name is Randy, and I have been running my own tax business for people in the greater
                Madison area for 10? years. My full time day job is working for the City of Madison as a
                Principal Accountant. I have been working in this role since March of 2004.</p>
        </div>
    </div>
</div>
<div id="qualificationsStuff">
    <div class="qualificationsGrid">
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
    </div>
</div>
<div id="contactServicesGrid">
<h3 class="banner">Want to know more?</h3>
<button class="servicesButton nav-button">Services</button>
<button class="contactButton nav-button">Contact Me</button>
</div>`;
    return html;
  }

  function productsHTML() {
    let html = `<div id="productsStuff">
    <div class="productsGrid">
        <div class="productsHeader">
        <h2>Tax Services</h2>
      </div>
      <div class="productsPersonal">
        <h3>Personal Tax Returns</h3>
            <p>Some information about your personal tax returns</p>
      </div>
      <div class="productsBusiness">
        <h3>Small Business Tax Returns</h3>
            <p>Some information about your small business tax returns</p>
      </div>
      </div>
</div>
<div id="contactServicesGrid">
<h3 class="banner">Want to schedule an appointment?</h3>
<button class="contactButton2 nav-button">Contact Me</button>
</div>`;
    return html;
  }

  function contactHTML() {
    let html = `<div id="contactStuff">
    <div class="contactGrid">
        <div class="contactHeader">
            <h2>Contact Me</h2>
        </div>
        <div class="contactInfo">
            <p>Fill out the form below, and we can get to scheduling your tax appointment! If you're not
                quite sure what exactly you need for your taxes, no problem! I can get more details from
                you, and we can discuss what your best option is.</p>
        </div>
        <form class="contactForm">
            <input type="text" placeholder="First Name" required>
            <input type="text" placeholder="Last Name" required>
            <input type="email" placeholder="Email Address" required>
            <input type="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}[0-9]{3}[0-9]{4}" title="123-456-7890 or 1234567890" required />
            <select>
                <option value="personal">Personal Taxes</option>
                <option value="business">Business Taxes</option>
                <option value="other">Other</option>
            </select>
            <button type="submit" class="contactSubmit">Submit</button>
        </form>
        <h4>Having issues with the form, or prefer to contact me directly? You can reach me at the phone number or e-mail below.</h4>
        <div class="contactPhoneImg">
            <img src="./Images/phone.jpg" class="phoneImg">
        </div>
        <div class="contactEmailImg">
            <img src="./Images/email.jpg" class="emailImg">
        </div>
        <div class="contactPhone">
            <p>(608) 333-1090</p>
        </div>
        <div class="contactEmail">
            <p>WhiteheadRandy@hotmail.com</p>
        </div>
    </div>
</div>`;
    return html;
  }

  function aboutNav() {
    let nav = `<div class="nav">
    <h1 class="header">Whitehead Tax Service</h1>
    <button id="about" class="curOn">About Me</button>
    <button id="products" class="nav-button">Services</button>
    <button id="contact" class="nav-button">Contact Me</button>
    <button id="results" class="nav-button">(Results)</button>
</div>`;
    return nav;
  }

  function servicesNav() {
    let nav = `<div class="nav">
    <h1 class="header">Whitehead Tax Service</h1>
    <button id="about" class="nav-button">About Me</button>
    <button id="products" class="curOn">Services</button>
    <button id="contact" class="nav-button">Contact Me</button>
    <button id="results" class="nav-button">(Results)</button>
</div>`;
    return nav;
  }

  function contactsNav() {
    let nav = `<div class="nav">
    <h1 class="header">Whitehead Tax Service</h1>
    <button id="about" class="nav-button">About Me</button>
    <button id="products" class="nav-button">Services</button>
    <button id="contact" class="curOn">Contact Me</button>
    <button id="results" class="nav-button">(Results)</button>
</div>`;
    return nav;
  }

  function contactSubmitted() {
    let stuff = `<div id="contactStuff">
    <div class="contactGrid">

        <h3>Thank you! I will contact you as soon as possible to schedule your appointment! Sit back and relax, and I'll handle your taxes for you.</h3>
        <img src="Images/giphy.gif">
        
        <h4>Need to contact me directly? You can reach me at the phone
            number or e-mail below.</h4>
        <div class="contactPhoneImg">
            <img src="./Images/phone.jpg" class="phoneImg">
        </div>
        <div class="contactEmailImg">
            <img src="./Images/email.jpg" class="emailImg">
        </div>
        <div class="contactPhone">
            <p>(608) 333-1090</p>
        </div>
        <div class="contactEmail">
            <p>WhiteheadRandy@hotmail.com</p>
        </div>
    </div>
</div>`;
    return stuff;
  }

  function render() {
    let aboutMeStuff = aboutMeHTML();
    let aboutMeNav = aboutNav();
    let productsStuff = productsHTML();
    let productsNav = servicesNav();
    let contactStuff = contactHTML();
    let contactNav = contactsNav();
    let newContactStuff = contactSubmitted();

    let display;
    let nav;

    if (store.html === "aboutMe") {
      display = aboutMeStuff;
      nav = aboutMeNav;
    }
    if (store.html === "productsAndServices") {
      display = productsStuff;
      nav = productsNav;
    }
    if (store.html === "contactMe") {
      display = contactStuff;
      nav = contactNav;
    }
    if (store.html === "contactMeSubmitted") {
      display = newContactStuff;
      nav = contactNav;
    }

    $("#nav-bar").html(nav);
    $("#stuff").html(display);
  }

  function handleAboutMeClicked() {
    $("#nav-bar").on("click", "#about", event => {
      event.preventDefault();
      store.html = "aboutMe";
      render();
    });
  }

  function handleProductsAndServicesClicked() {
    $("#nav-bar").on("click", "#products", event => {
      event.preventDefault();
      store.html = "productsAndServices";
      render();
    });
    $("#stuff").on("click", ".servicesButton", event => {
      event.preventDefault();
      store.html = "productsAndServices";
      window.scrollTo(top);
      render();
    });
  }

  function handleContactMeClicked() {
    $("#nav-bar").on("click", "#contact", event => {
      event.preventDefault();
      store.html = "contactMe";
      render();
    });
    $("#stuff").on("click", ".contactButton", event => {
      event.preventDefault();
      store.html = "contactMe";
      window.scrollTo(top);
      render();
    });
    $("#stuff").on("click", ".contactButton2", event => {
      event.preventDefault();
      store.html = "contactMe";
      window.scrollTo(top);
      render();
    });
  }

  function handleContactSubmitClicked() {
    $("#stuff").on("submit", ".contactForm", event => {
      event.preventDefault();
      store.html = "contactMeSubmitted";
      render();
    });
  }

  function handleClicks() {
    handleAboutMeClicked();
    handleProductsAndServicesClicked();
    handleContactMeClicked();
    handleContactSubmitClicked();
  }

  return {
    handleClicks,
    render
  };
})();
