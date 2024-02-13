$(document).ready(function() {
    let isColour = false;
    let isEdit = false;
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
        $(".subMenu-edit").hide();
    });
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".contextMenu, .apex-add").length) {
          $('.arrow-icon').css({
            'transform': 'scaleX(1)'
          })
          if(!isEdit){
              $(".contextMenu").hide();
              isColour = false;
          }
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
        event.stopPropagation();
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
      event.stopPropagation();
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
      event.stopPropagation();
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
      event.stopPropagation();
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
      event.stopPropagation();
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
      event.stopPropagation();
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
      event.stopPropagation();
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
      event.stopPropagation();
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

    $('#edit').on('click', function() {
      event.stopPropagation();
      if(!isEdit){
        $(this).next('.subMenu-edit').fadeIn(100).next('.edit-button').fadeIn(100);
        var Apex = $("#" + divId);
        var textApex = Apex.find('span').first().text();
        $('#input-edit').val(textApex);
        isEdit = true;
      }
      else{
        $(this).next('.subMenu-edit').fadeOut(100).next('.edit-button').fadeOut(100);
        isEdit = false;
      }
    });
    $('#OK-edit').on('click', function() {
      event.stopPropagation();
      var Apex = $("#" + divId);
      var textApex = $('#input-edit').val();
      Apex.find('span').first().text(textApex);
      $('.contextMenu').fadeOut(100);
      isEdit = false;
      isColour = false;
    });
    $('#CANCEL-edit').on('click', function() {
      event.stopPropagation();
      $('.contextMenu').fadeOut(100);
      isEdit = false;
      isColour = false;
    });
    $('#input-edit').on('click', function(event) {
      event.stopPropagation();
    });

    $('#add-node').on('click', function() {
      event.stopPropagation();
      var apex = $("#" + divId);
      var div = $('<div>')
            .addClass('apex-add')
            .attr('draggable', 'true')
            .attr('id', ID)
            .css({
                'position': 'absolute',
                'z-index': '900'
            })
            .on('mousedown', function(event) {
                selectElement(event, this);
            })
            .appendTo('#desk-apex');
    
        var textSpan = $('<span>');
        div.append(textSpan);
        var textAdd = $('#input').val();
        textSpan.text(textAdd);
        $('#input').val('');
    
        div.draggable({
            containment: "parent"
        });
        
        var newButton = $("<button>")
            .addClass("button-delete")
            .attr("draggable", "false")
            .on("click", function() {
                deleteApex(this);
            });
        div.append(newButton);

        apex = document.getElementById(divId);
        var child = document.getElementById(ID);
        var line = new LeaderLine(
          apex,
          child,
          {
              color: "#b4b4b4"
          }
        );
        line.size = 3;
        linesMap[apex.id] = linesMap[apex.id] || [];
        linesMap[child.id] = linesMap[child.id] || [];

        linesMap[apex.id].push({
            line: line,
            linkApex: child.id
        });
        linesMap[child.id].push({
            line: line,
            linkApex: apex.id
        });
        ID++;
    });
});