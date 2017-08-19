$(document).ready(function () {
    var table = $("#WebRequestGridView tbody tr");

    var redCounter = 0;
    var orangeCounter = 0;
    var grayCounter = 0;
    for (var i = 0; i < table.length; i++) {
        console.log($(table[i]).css('background-color'));

        if ($(table[i]).css("background-color") === "rgb(255, 0, 0)") {
            redCounter++;

        } else if ($(table[i]).css("background-color") === "rgb(255, 165, 0)") {
            orangeCounter++;

        } else if ($(table[i]).css("background-color") === "rgb(128, 128, 128)") {
            grayCounter++;

        }
        $(".redCounter").text(redCounter);
        $(".orangeCounter").text(orangeCounter);
        $(".grayCounter").text(grayCounter);
    }
/* first pop up when you click animated button you will see pop up contains table and buttons. Buttons will have some functionality.  Thats the plan. This function is to put hand image button to the head part of table. */
    $("link[rel=icon]").attr("href", "http://i.imgur.com/2yuQih2.png");
    var buttonToTheHead = $("#WebRequestGridView thead tr th:first-child");
    $button = $("#button1");
    $button.appendTo(buttonToTheHead);
    $button.removeClass("hideButton");
    $button.show();

    $(".buttonClass").each(function (index, element) {
        $(element).prop("id", index);

    });
    var color = $('tbody tr:first-child').css('background-color');
    var checkbox1 = $('#checkbox');

    $("#button").css('background-color', color).on('click', function () {

        $(this).hide();
        var table = $('#WebRequestGridView');
        $("#popup").dialog({
            draggable: true,


            show: {
                effect: "fold",
                duration: 500
            },
            hide: {
                effect: "fold",
                duration: 500
            },

            position: {
                my: "left top",
                at: "left top",
                collision: "flipfit flipfit",
                of: window
            },

            width: "auto",
            height: "auto",

            open: function (event) {

                $(".overlap").hide();
                $('#popup').append(table);
                table.show();
                localStorage.setItem("popup", "true");

                $("td").on("click", ".buttonClass", function (event) {
                    var $id = $(this).prop('id');
                    localStorage.setItem("popup2", $id);
                    var outputTable = document.createElement('table');
                    var parentTr = $(this).parent().parent('tr');
                    var clonedTHead = $(this).closest('tbody').siblings('thead ').clone(true);

                    $.each(clonedTHead.find('th'), function (i, ele) {
                        var newRow = document.createElement('tr');
                        $(ele).appendTo(newRow);
                        parentTr.find('td').eq(i).clone(true).appendTo(newRow);
                        $(newRow).appendTo(outputTable);

                    });
                    $(outputTable).find('[class^=hidden-]').removeClass('hidden-md hidden-xs hidden-stuff');


                    showPopup(outputTable);


                    function showPopup(your_variable) {
                        var color = $('#popup tr:first-child').css('background-color');

                        /* when you click "bÃ¼yÃ¼teÃ§" image button you will see spesific row appearence in nice view. */
                        $("#popup2").dialog({

                            draggable: true,

                            show: {
                                effect: "fold",
                                duration: 500
                            },
                            hide: {
                                effect: "fold",
                                duration: 500
                            },
                            position: {
                                my: "center top",
                                at: "right top",
                                collision: "fit fit",
                                of: window
                            },




                            // minWidth:300,
                            minWidth: 800,
                            maxHeight: 400,



                            open: function () {


                                $(this).html(your_variable);
                            },
                            close: function () {
                                localStorage.setItem("popup2", "null");
                            }

                        });
                    }

                });
            },
            close: function () {
                localStorage.setItem("popup", "false");
                $(".overlap").show();
                $('#button').show();
                $("#button11").css("opacity", "0.4");

                /*  if ($("#popup2").dialog("isOpen")) {
                    alert("sss");
                    $("#popup2").dialog("close");

                      $(".boxContainer").dialog("close");
                }*/

            }
        });
    }).prev(".ui-dialog-titlebar").css("background", "#E6E6B8");
    /* When you clcik hand image on the table you will se another pop ups. That will give you quick explanation hot checkboxes work. */
    $(document).on("click", "input[id=button1]", function () {

        $('.boxContainer').dialog({
            draggable: true,


            show: {
                effect: "fold",
                duration: 500
            },
            hide: {
                effect: "fold",
                duration: 500
            },

            position: {
                my: "left top",
                at: "left bottom + 50%",

                collision: "flipfit flipfit",
                of: window
            },

            minWidth: "700",
            minHeight: "120",
            open: function() {localStorage.setItem("boxContainer", "true");},
            close: function() {localStorage.setItem("boxContainer", "false");}




        }).prev(".ui-dialog-titlebar").css("background", "black");
    });

    //$('#popup').dialog('open');

    var checkState = function () {

        if (localStorage.getItem('popup') === "true") {
            $("#button").trigger('click');
        }
        if (localStorage.getItem('popup2')) {
            var $popup2id = localStorage.getItem('popup2');
            setTimeout(function delay() {
                $("#" + $popup2id).trigger('click');
            }, 1000);

        }
        if (localStorage.getItem('boxContainer') === "true") {

            setTimeout(function delay(){ $("input[id=button1]").trigger('click');}, 500);
        }

    };
    checkState();
});



/* it is for changing "saturated colors*/
$("link[rel=icon]").attr("href", "http://i.imgur.com/2yuQih2.png");
$(document).ready(function () {
    var table = $("#WebRequestGridView tbody tr");

    for (var i = 0; i < table.length; i++) {

        if ($(table[i]).css('background-color') === "rgb(0, 255, 127)") {
            $(table[i].removeAttribute("style", ""));
            $(table[i]).addClass("niceGreen");
        }
    }
});


//just select this collection 1x, going thru dom & searching for elems is relatively expensive, cache when possible:

/* those function is connected rw of a table with checkboxes so you can control animation with checkboxes */
var $row = $('#WebRequestGridView tbody tr');
var $checkbox = $('#checkbox');

$($row).each(function () {
    if (this.style.backgroundColor == "orange") {
        $(this).addClass("niceOrange");
        $(this).attr("style", "");
    } else if (this.style.backgroundColor == "blue") {
        $(this).addClass("niceBlue");
        $(this).attr("style", "");

    } else if (this.style.backgroundColor == "gray") {
        $(this).addClass("niceGray");
        $(this).attr("style", "");

    } else if (this.style.backgroundColor == "red") {
        $(this).addClass("niceRed");
        $(this).attr("style", "");

    }
});


/*This function is for animating the button. We have some cases meantioned below.
 * First line or ftable can be red. Table is actually sorted by default. And record or records that is/are colorized by red will appear in the top. And First of all out function will check if there is red records or not. In case of existance of red button will turn to red and is animated.
 * If there is no red at all. Function will check orange or gray records. If orange record/records is before gray record/records. Button will be animated to orange. Otherwise it is animated with gray*/

setInterval(function () {
    var $button = document.querySelector('#button');
    var buttonColor = $('tbody tr:first-child').css('background-color');
    if (buttonColor === "rgb(255, 0, 0)") {

        $button.style.removeProperty('background-color');

        $('.box').toggleClass('case1');
    } else if (buttonColor !== "rgb(255, 0, 0)") {

        var row = document.querySelectorAll('#WebRequestGridView tr');
        var gray = false,
            orange = false;
        for (var i = 0; i < row.length; i++) {
            var rowColor = $(row[i]).css("background-color");

            if (rowColor === "rgb(255, 165, 0)") {
                orange = true;
            } else if (rowColor === "rgb(128, 128, 128)") {
                gray = true;

            }
        }
        if (orange) {

            $button.style.removeProperty('background-color');

            $('.box').toggleClass('case3');
        } else if (gray) {

            $button.style.removeProperty('background-color');

            $('.box').toggleClass('case4');
        }
    }
}, 500);
$(document).ready(function () {
    for (var i = 0; i < $row.length; i++) {
        if ($("#checkbox").prop('checked') === true) {

            if ($('#checkbox').parent().css('color') === $($row[i]).css('background-color')) {
                $($row[i]).addClass("niceOrange");

                $($row[i]).toggleClass("darkenNiceOrange");
            }
        }
        if ($("#checkbox3").prop('checked') === true) {

            if ($('#checkbox3').parent().css('color') === $($row[i]).css('background-color')) {
                $($row[i]).addClass("niceGray");

                $($row[i]).toggleClass("darkenNiceGray");
            }
        }
        if ($("#checkbox4").prop('checked') === true) {

            if ($('#checkbox4').parent().css('color') === $($row[i]).css('background-color')) {


                $($row[i]).addClass("niceRed");
                $($row[i]).toggleClass("darkenNiceRed");
            }
        }

    }
});
$(document).on("change", "#checkbox", function (e) {
    for (var i = 0; i < $row.length; i++) {
        if ($("#checkbox").prop('checked') === false) {

            $($row[i]).removeClass("darkenNiceOrange");
        } else if ($("#checkbox").prop('checked') === true) {

            $($row[i]).toggleClass("darkenNiceOrange");
        }
    }
});
$(document).on("change", "#checkbox3", function (e) {
    for (var i = 0; i < $row.length; i++) {
        if ($("#checkbox3").prop('checked') === false) {

            $($row[i]).removeClass("darkenNiceGray");
        } else if ($("#checkbox3").prop('checked') === true) {
            $($row[i]).toggleClass("darkenNiceGray");
        }
    }
});
$(document).on("change", "#checkbox4", function (event) {
    for (var i = 0; i < $row.length; i++) {
        if ($("#checkbox4").prop('checked') === false) {
            $($row[i]).removeClass("darkenNiceRed");
        } else if ($("#checkbox4").prop('checked') === true) {

            $($row[i]).toggleClass("darkenNiceRed");
        }
    }
});

/*---------------------------*/
//information
    $("#button").mouseover(function () {
        $("#button11").css("opacity", "1");
    });
    $("#button11").click(function () {
        $("#window").dialog({

            /*            close: function () {
               $("#button11").css("opacity", "0.4")
            }*/
        });

    });



});

//sort the table
/*$(document).ready(function () {
    $("#WebRequestGridView").tablesorter();
});*/
