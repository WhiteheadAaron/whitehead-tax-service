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

  const update = function(path, obj) {
    return $.ajax({
      type: 'PUT',
      url: path,
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(obj)
    });
  };

  const deleteItem = function (path) {
    return $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: path
    })
  };

  return {
    create,
    search,
    getItems,
    deleteItem,
    update
  };
}());