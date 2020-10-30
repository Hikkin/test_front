function countup(clicked_id) {
  var takeidup = clicked_id.substring(0, clicked_id.length - 3);
  (document.getElementById(takeidup + "_inp").value) = Number(document.getElementById(takeidup + "_inp").value) + 1;
};
function countdown(clicked_id) {
  var takeiddown = clicked_id.substring(0, clicked_id.length - 5);
  if (Number(document.getElementById(takeiddown + "_inp").value) > 1) {
    document.getElementById(takeiddown + "_inp").value = Number(document.getElementById(takeiddown + "_inp").value) - 1;
  } else {
    alert("Не может быть меньше 1");
  }
}
function buybutton() {
  alert("Товар добавлен в корзину");
}