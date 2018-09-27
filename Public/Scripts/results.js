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
      console.log("hello");
      store.checked = true;
      eventHandlers.render();
    });
  }

  function handleShowCheckedClicked() {
    $("#stuff").on("click", ".showAll", event => {
      event.preventDefault();
      console.log("hellooo");
      store.checked = false;
      eventHandlers.render();
    });
  }

  function itemCheckToggled(id) {
    const thisItem = store.items.find(item => item.id === id);
    thisItem.checked = !thisItem.checked;
  }

  function handleItemCheckClicked() {
    $("#stuff").on("click", ".checkbox", event => {
      const id = getItemIdFromElement(event.currentTarget);
      const thisItem = store.items.find(item => item.id === id);
      let checked;
      itemCheckToggled(id);
      if (thisItem.checked) {
          checked === true;
      }
      else {
          checked === false;
      }
      let newObj = {
        checked
      };
      api.update(`/results/${id}`, newObj)
        .then(() => {
            
      });
    });
  }

  function handleDeleteCheckedClicked() {
    $("#stuff").on("click", ".deleteAll", event => {
      let result = confirm(
        "Are you sure? This is permanent and cannot be undone."
      );
      if (result) {
        let deleteItems = store.items.filter(item => item.checked);
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
