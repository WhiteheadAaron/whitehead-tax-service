'use strict';

/* global eventHandlers $ api store */
// eslint-disable-next-line no-unused-vars

$(document).ready(function () {

  eventHandlers.handleClicks();
  resultsJs.handleClicks();

  api.getItems((items) => {
    items.forEach((item) => store.items.push(item));
    eventHandlers.render();
  });
  
});