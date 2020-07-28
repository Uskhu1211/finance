var uiController = (function () {})();
var financeController = (function () {})();
var appController = (function (uiCtrl, fiCtrl) {
    function ctrlAddItem(){};
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which===13) {
        ctrlAddItem();
    };

})(uiController, financeController);
