$(document).ready(function () {
  var currentFloor = 02;
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var floorPath = $(".home-image path");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-buttom");
  var viewFlatsButton = $(".view-flats");

  floorPath.on("mouseover", function() {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    //$(`[data-floor=${currentFloor}]`).toggleClass("current-floor"); 
    $('.counter').text(currentFloor);  
  });
  
  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);
  
  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function() {
    // проверяем, что номер этаха менее 18го
    if (currentFloor < 18) {
      currentFloor++;
      var usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 01, а не 1
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); 
    }
  });

  counterDown.on("click", function() {
    if (currentFloor > 2) {
      currentFloor--;
      var usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); 
    }    
  });

  function toggleModal() { // функция открытия и закрытия модального окна
    modal.toggleClass("is-open");
  }
});