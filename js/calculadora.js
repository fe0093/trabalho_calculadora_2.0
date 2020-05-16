$(document).ready(function() {
    $("button").click(function() {
      var tex = $(this).text();
      if (tex != "=") {
        var inp = $("input").attr("value");
        $("input").attr("value", inp + tex);
      } else {
        var put = eval($("input").val());
        $("input").attr("value", put);
      }
    });
  
    $("#reset").click(function() {
      $("input").attr("value", "");
    });
  });