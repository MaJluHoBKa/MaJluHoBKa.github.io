selectedApex = [];
let isSelectionEnabled = false;
let Link = false;

$(document).ready(function() {
    $('#button-link').on('click', function() {
        Link = true;
        isSelectionEnabled = true;
        $('.apex-add').css("opacity", "0.5");
    });

    $('#button-swap').on('click', function() {
        Link = false;
        isSelectionEnabled = true;
        $('.apex-add').css("opacity", "0.5");
    });
});

function selectElement(event, element) {
    if (event.button === 0 && isSelectionEnabled) {
        if(selectedApex.length === 1 && element !== selectedApex[0]) {
            selectedApex.push(element);
        }
        else if(selectedApex.length === 0) {
            selectedApex.push(element);
        }

        if (selectedApex.length === 2) {
            if(Link){
                handleSelection();
            }
            else{
                swapApex();
            }
        }
    }
}
function handleSelection() {
    var firstApex = document.getElementById(selectedApex[0].id);
    var secondApex = document.getElementById(selectedApex[1].id);

    var line = new LeaderLine(
        firstApex,
        secondApex,
        {
            color: "#b4b4b4"
        }
    );
    line.size = 3;

    linesMap[selectedApex[0].id] = linesMap[selectedApex[0].id] || [];
    linesMap[selectedApex[1].id] = linesMap[selectedApex[1].id] || [];

    linesMap[selectedApex[0].id].push({
        line: line,
        linkApex: secondApex.id
    });
    linesMap[selectedApex[1].id].push({
        line: line,
        linkApex: firstApex.id
    });

    $('.apex-add').css("opacity", "1");
    isSelectionEnabled = false;
    selectedApex.length = 0;
}
function swapApex(){
    var firstApex = $("#" + selectedApex[0].id);
    var secondApex = $("#" + selectedApex[1].id);

    var originalWidthFirstApex = firstApex.outerWidth();
    var originalHeightFirstApex = firstApex.outerHeight();
    var originalWidthSecondApex = secondApex.outerWidth();
    var originalHeightSecondApex = secondApex.outerHeight();
    
    firstApex.css({"width": originalWidthSecondApex + "px", "height": originalHeightSecondApex + "px"});
    secondApex.css({"width": originalWidthFirstApex + "px", "height": originalHeightFirstApex + "px"});

    var textFirstApex = firstApex.find('span').first().text();
    var textSecondApex = secondApex.find('span').first().text();
    firstApex.find('span').first().text(textSecondApex);
    secondApex.find('span').first().text(textFirstApex);

    $('.apex-add').css("opacity", "1");
    isSelectionEnabled = false;
    selectedApex.length = 0;
}