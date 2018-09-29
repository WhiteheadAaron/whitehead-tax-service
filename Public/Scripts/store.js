'use strict';

const store = (function() {

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };
  

  return {
    html: 'aboutMe',
    searchTerm: '',
    items: [],
    checked: false,
    filter: null,


    findAndDelete
  };
}());