"use strict";

/* global $ store eventHandlers */

const resultsJs = (function () {
  function handleResultsClicked() {
    $("#nav-bar").on("click", "#results", event => {
      event.preventDefault();
      store.html = "results";
      eventHandlers.render();
    });
  }

  function getItemIdFromElement(item) {
    return $(item)
      .closest(".itemGrid")
      .data("item-id");
  }

  function handleHideCheckedClicked() {
    $("#stuff").on("click", ".hideAll", event => {
      event.preventDefault();
      let newArray = store.items.filter(item => item.checked === "true");
      if (newArray.length > 0) {
        store.checked = true;
        eventHandlers.render();
      }
    });
  }

  function handleShowCheckedClicked() {
    $("#stuff").on("click", ".showAll", event => {
      event.preventDefault();
      store.checked = false;
      eventHandlers.render();
    });
  }

  function handleItemCheckClicked() {
    $("#stuff").on("click", ".checkbox", event => {
      const id = getItemIdFromElement(event.currentTarget);
      const thisItem = store.items.find(item => item.id === id);
      console.log('hello');

      if (thisItem.checked === "false") {
        thisItem.checked = "true";
      } else if (thisItem.checked === "true") {
        thisItem.checked = "false";
      }

      api
        .update(`/results/${id}`, thisItem)
        .then(() => {
          eventHandlers.render();
        })
        .catch(err => next(err));
    });
  }

  function handleDeleteCheckedClicked() {
    $("#stuff").on("click", ".deleteAll", event => {
      let newArray = store.items.filter(item => item.checked === "true");
      let message;
      if (newArray.length > 0) {
        if (store.checked === false) {
          message = `Are you sure? This will permanently delete ${newArray.length} items.`;
        }
        if (store.checked === true) {
          message = `Are you sure? There are currently ${newArray.length} items that are checked and hidden. This will permanently delete all of them.`;
        }
        let result = confirm(message);
        if (result) {
          let deleteItems = store.items.filter(item => item.checked === "true");
          for (let i = 0; i < deleteItems.length; i++) {
            let id = deleteItems[i].id;
            api
              .deleteItem(`/results/${id}`)
              .then(() => {
                store.findAndDelete(id);
              })
              .then(() => {
                eventHandlers.render();
              });
          }
        }
      }
    });
  }

  function dropdownFilterUsed() {
    $('#stuff').on('change', '.filterDropdown', () => {
      let value = $('.filterDropdown').val();
      if (store.filter !== value) {
        store.filter = String(value);
        eventHandlers.render();
      }
    });
  }

  function handleClicks() {
    handleResultsClicked();
    handleHideCheckedClicked();
    handleItemCheckClicked();
    handleShowCheckedClicked();
    handleDeleteCheckedClicked();
    dropdownFilterUsed();
  }

  return {
    handleClicks
  };
})();