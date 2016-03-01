$(document).ready(function() {

  $("span").click(function() {
    var $text = $("#screen").text();

    if ($(this).text() === "x") {
      $text += "*";
    }
    else if ($(this).text() === "\367") {
      $text += "/";
    }
    else {
      $text += $(this).text();
    }
    $("#screen").text($text);
  });

  $("#cancel").click(function() {
    $("#screen").text("");
  });

  $("#calc").click(function() {
    var $text = $("#screen").text().slice(0, -1);

    $text = eval($text);
    $("#screen").text($text);
  });
});
