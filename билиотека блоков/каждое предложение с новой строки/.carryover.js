
$(document).ready(function (e) {
  const div = document.querySelectorAll(".carryover");
  div.forEach(function (enter) {
    var s = enter.textContent;
    s = s.replace(/([A-Я])/g, "<br/>" + "$1").trim();
    return (enter.innerHTML = s);
  });
});