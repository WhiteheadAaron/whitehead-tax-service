"use strict";

const resultsJs = (function() {
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
      store.checked = true;
      eventHandlers.render();
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

      if (thisItem.checked === 'false') {
          thisItem.checked = 'true';
      }
      else if (thisItem.checked === 'true') {
          thisItem.checked = 'false';
      }
      

      api.update(`/results/${id}`, thisItem)
        .then(() => {
            eventHandlers.render();
      })
        .catch(err => next(err));
    });
  }

  function handleDeleteCheckedClicked() {
    $("#stuff").on("click", ".deleteAll", event => {
      let result = confirm(
        "Are you sure? This is permanent and cannot be undone."
      );
      if (result) {
        let deleteItems = store.items.filter(item => item.checked === 'true');
        console.log(deleteItems);
        for (let i = 0; i < deleteItems.length; i++) {
          let id = deleteItems[i].id;
          console.log(id);
          api
            .deleteItem(`/results/${id}`)
            .then(() => {
              console.log(store.items.filter(item => item.id === id));
              store.findAndDelete(id);
            })
            .then(() => {
              eventHandlers.render();
            });
        }
      }
    });
  }

  function handleClicks() {
    handleResultsClicked();
    handleHideCheckedClicked();
    handleItemCheckClicked();
    handleShowCheckedClicked();
    handleDeleteCheckedClicked();
  }

  return {
    handleClicks
  };
})();
