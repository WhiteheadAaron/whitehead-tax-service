/* global $ */
'use strict';

const api = (function () {
  const search = function (path, query) {
    return $.ajax({
      type: 'GET',
      url: path,
      dataType: 'json',
      data: query
    });
  };

  const getItems = function (callback) {

    $.getJSON('/results', (response) => {
      callback(response);
    });
  };


  const create = function (path, obj) {
    return $.ajax({
      type: 'POST',
      url: path,
      contentType: 'application/json',
      dataType: 'json',
      processData: false,
      data: JSON.stringify(obj)
    });
  };

  return {
    create,
    search,
    getItems
  };
}());