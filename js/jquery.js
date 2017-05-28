$(document).ready(function(){



    $("#dialog").dialog({
        autoOpen: false,
        height: 400,
        width: 500
    });
    $("#opener").click(function () {
        $("#dialog").dialog("open");
    });
});
