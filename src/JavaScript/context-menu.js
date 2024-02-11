$(document).ready(function() {
    let isColour = false;
    let divId;

    $(document).on("contextmenu", ".apex-add", function(event) {
        event.preventDefault();
        divId = $(this).attr('id');
        $(".contextMenu").css({
          display: "block",
          left: event.pageX,
          top: event.pageY
        });
        $(".subMenu").hide();
    });
  
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".contextMenu, .apex-add").length) {
          $('.arrow-icon').css({
            'transform': 'scaleX(1)'
          })
          $(".contextMenu").hide();
          isColour = false;
        }
    });
    
    $(".contextMenu ul li").on("click", function() {
        $('.arrow-icon').css({
        'transform': 'scaleX(1)'
        })
        $(".contextMenu").hide();
        isColour = false;
    });

    $('#colour').on('click', function() {
      event.stopPropagation();
      if(!isColour){
        $('.arrow-icon').css({
          'transform': 'scaleX(-1)'
        })
        $(this).next('.subMenu').fadeIn(300);
        isColour = true;
      }
      else{
        $('.arrow-icon').css({
          'transform': 'scaleX(1)'
        })
        $(this).next('.subMenu').fadeOut(300);
        isColour = false;
      }
    });

    $("#redButton").on('click', function(){
        $("#" + divId).css({
          "border": "3px solid red"
        })
        $("#" + divId).hover(
          function() {
              $(this).css("box-shadow", "0px 0px 10px red");
          },
          function() {
            $(this).css("box-shadow", "none");
          }
        );
    });

    $("#pinkButton").on('click', function(){
      $("#" + divId).css({
        "border": "3px solid #ff00c8"
      })
      $("#" + divId).hover(
        function() {
            $(this).css("box-shadow", "0px 0px 10px #ff00c8");
        },
        function() {
          $(this).css("box-shadow", "none");
        }
      );
    });

    $("#purpleButton").on('click', function(){
      $("#" + divId).css({
        "border": "3px solid #ae00ff"
      })
      $("#" + divId).hover(
        function() {
            $(this).css("box-shadow", "0px 0px 10px #ae00ff");
        },
        function() {
          $(this).css("box-shadow", "none");
        }
      );
    });

    $("#blueButton").on('click', function(){
      $("#" + divId).css({
        "border": "3px solid #1500ff"
      })
      $("#" + divId).hover(
        function() {
            $(this).css("box-shadow", "0px 0px 10px #1500ff");
        },
        function() {
          $(this).css("box-shadow", "none");
        }
      );
    });

    $("#turquoiseButton").on('click', function(){
      $("#" + divId).css({
        "border": "3px solid #00ffe1"
      })
      $("#" + divId).hover(
        function() {
            $(this).css("box-shadow", "0px 0px 10px #00ffe1");
        },
        function() {
          $(this).css("box-shadow", "none");
        }
      );
    });

    $("#greenButton").on('click', function(){
      $("#" + divId).css({
        "border": "3px solid #00ff09"
      })
      $("#" + divId).hover(
        function() {
            $(this).css("box-shadow", "0px 0px 10px #00ff09");
        },
        function() {
          $(this).css("box-shadow", "none");
        }
      );
    });

    $("#yellowButton").on('click', function(){
      $("#" + divId).css({
        "border": "3px solid #fbff00"
      })
      $("#" + divId).hover(
        function() {
            $(this).css("box-shadow", "0px 0px 10px #fbff00");
        },
        function() {
          $(this).css("box-shadow", "none");
        }
      );
    });

    $("#orangeButton").on('click', function(){
      $("#" + divId).css({
        "border": "3px solid #ff7b00"
      })
      $("#" + divId).hover(
        function() {
            $(this).css("box-shadow", "0px 0px 10px #ff7b00");
        },
        function() {
          $(this).css("box-shadow", "none");
        }
      );
    });

});