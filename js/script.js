var buttonEl = $(".buttons");
var input = $(".col-10");

// showing the current date
var today = dayjs();
input.addClass("textarea");
$("#currentDay").text(today.format("dddd, MMMM D"));
//set function for values when page is reloaded
$(document).ready(function () {
  for (let i = 0; i < input.length; i++) {
    var storedInput = localStorage.getItem("input_" + i);

    if (storedInput !== null) {
      // Set the stored value to the corresponding input element
      input.eq(i).val(JSON.parse(storedInput));
    }
  }
});
// adding function for each button
buttonEl.on("click", ".saveBtn", function (event) {
  var clickedButton = $(event.target);
  var buttonIndex = buttonEl.find(".saveBtn").index(clickedButton);
  var inputEl = input.eq(buttonIndex);

  localStorage.setItem("input_" + buttonIndex, JSON.stringify(inputEl.val()));

  console.log(inputEl.val());
});
