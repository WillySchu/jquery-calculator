$(document).ready(function() {

  $("span").click(function() {
    var $text = $("#screen").text();
    console.log(!$.isNumeric($text[$text.length - 1]));
    if($(this).hasClass("operator") && !$.isNumeric($text[$text.length - 1])){
      $text = $text.slice(0, -1);
    }

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
