/**
 * Created by MrIggyman1234 on 18/12/2016.
 */


$("textarea").keypress(function(){
    var max_length = 500 - $("textarea").text().length;
    $("#word-count").text(max_length);
});