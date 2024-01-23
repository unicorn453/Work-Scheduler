var buttonEl = $(".buttons");
var input = $(".col-10");
// showing the current date
var today = dayjs();
var currentHour = today.hour();
input.addClass("textarea");
$("#currentDay").text(today.format("dddd, MMMM D"));
//set function for values when page is reloaded
$(document).ready(function () {
  for (let i = 0; i < input.length; i++) {
    var storedInput = localStorage.getItem("input_" + i);

    if (storedInput !== null) {
      // set the stored value to the corresponding input element
      input.eq(i).val(JSON.parse(storedInput));
    }
  }
});
// adding function for each button
buttonEl.on("click", ".saveBtn", function (event) {
  var clickedButton = $(event.target);
  var buttonIndex = buttonEl.find(".saveBtn").index(clickedButton);
  var inputEl = input.eq(buttonIndex);

  changeValue(buttonIndex, inputEl.val());
});
// adding function to set a new value and delete the old one
function changeValue(buttonIndex, newValue) {
  localStorage.removeItem("input_" + buttonIndex);

  localStorage.setItem("input_" + buttonIndex, JSON.stringify(newValue));
}
// Function to update the class based on the current hour
$(function () {
  input.each(function (index, element) {
    updateClass($(element), currentHour);
  });
});

function updateClass(inputEl, currentHour) {
  var hour = parseInt(inputEl.closest(".time-block").find(".val").text());

  if (currentHour > hour) {
    inputEl.removeClass("present future").addClass("past");
  } else if (currentHour < hour) {
    inputEl.removeClass("past present").addClass("future");
  } else {
    inputEl.removeClass("past future").addClass("present");
  }
}
