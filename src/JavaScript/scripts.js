$(document).ready(function() {
    var ID = 1;
    let isHide = false;
    $('#button-add').on('click', function() {
        AddApex();
    });

    $('#input').on('keypress', function(event) {
        if (event.which === 13) {
            event.preventDefault();
            AddApex();
        }
    });

    $('#button-delete-all').on('click', function(){
        Object.keys(linesMap).forEach(function(key) {
            var e = $(key);
            if (linesMap[e.parentNode.id]) {
                var linesToRemove = linesMap[e.parentNode.id].slice();
        
                linesToRemove.forEach(function(lineInfo) {
                    if (lineInfo && lineInfo.line) {
                        lineInfo.line.remove();
        
                        var secondApexId = lineInfo.linkApex;
                        if (linesMap[secondApexId]) {
                            linesMap[secondApexId] = linesMap[secondApexId].filter(function(lineInfoSecond) {
                                return lineInfoSecond.linkApex !== e.parentNode.id || !lineInfoSecond.line;
                            });
                        }
                    }
                });
                
                delete linesMap[e.parentNode.id];
            }
            e.parentNode.parentNode.removeChild(e.parentNode);
        })
        //linesMap = {};
    });

    $('#button-hide').on('click', function(){
        if(isHide){
            $(".button").show();
            $("#input").show();
            $(".button").prop("disabled", false);
            $("#input").prop("disabled", false);
            $("#eye").removeClass("fa-eye-slash").addClass("fa-eye");
            isHide = false;
        }
        else{
            $(".button").hide();
            $("#input").hide();
            $(".button").prop("disabled", true);
            $("#input").prop("disabled", true);
            $("#eye").removeClass("fa-eye").addClass("fa-eye-slash");
            isHide = true;
        }
    });

    function AddApex() {
        var div = $('<div>')
            .addClass('apex-add')
            .attr('draggable', 'true')
            .attr('id', ID)
            .css({
                'position': 'absolute',
                'z-index': '4'
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
    
        ID++;
    
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
    }
});

function deleteApex(e){
    if (linesMap[e.parentNode.id]) {
        var linesToRemove = linesMap[e.parentNode.id].slice();

        linesToRemove.forEach(function(lineInfo) {
            if (lineInfo && lineInfo.line) {
                lineInfo.line.remove();

                var secondApexId = lineInfo.linkApex;
                if (linesMap[secondApexId]) {
                    linesMap[secondApexId] = linesMap[secondApexId].filter(function(lineInfoSecond) {
                        return lineInfoSecond.linkApex !== e.parentNode.id || !lineInfoSecond.line;
                    });
                }
            }
        });
        
        delete linesMap[e.parentNode.id];
    }
    e.parentNode.parentNode.removeChild(e.parentNode);
}