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
      .closest('.itemGrid')
      .data('item-id');
  }


  function handleHideCheckedClicked(){
    $('#stuff').on('click', '.hideAll', event => {
        event.preventDefault();
        console.log('hello');
        store.checked = true;
        eventHandlers.render();
    });
  }

  function handleShowCheckedClicked(){
    $('#stuff').on('click', '.showAll', event => {
        event.preventDefault();
        console.log('hellooo');
        store.checked = false;
        eventHandlers.render();
    });
  }

  function itemCheckToggled(id) {
      const thisItem = store.items.find(item => item.id === id);
      thisItem.checked = !thisItem.checked;
  }

  function handleItemCheckClicked() {
    $('#stuff').on('click', '.checkbox', event => {
        const id = getItemIdFromElement(event.currentTarget);
        console.log(id);
        itemCheckToggled(id);
    })
  }


  function handleClicks() {
    handleResultsClicked();
    handleHideCheckedClicked();
    handleItemCheckClicked();
    handleShowCheckedClicked();
  }

  return {
    handleClicks
  };
})();
