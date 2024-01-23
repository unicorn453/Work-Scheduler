// showing the current date
var today = dayjs();
console.log(today);

$("#currentDay").text(today.format("dddd, MMMM D"));
