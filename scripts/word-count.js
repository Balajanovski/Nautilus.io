/**
 * Created by MrIggyman1234 on 18/12/2016.
 */

$(document).ready(function(){
    $("#message").keydown(function(){
        var max_length = 500 - $("#message").val().length;
        if (max_length == NaN)
            $("#word-count").text(max_length + " characters left");
        else
            $("#word-count").text(max_length + " characters left");
    });
    $("#message").keyup(function(){
        var max_length = 500 - $("#message").val().length;
        if (max_length == NaN)
            $("#word-count").text(max_length + " characters left");
        else
            $("#word-count").text(max_length + " characters left");
    });
});