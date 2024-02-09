selectedApex = [];
let isSelectionEnabled = false;

$(document).ready(function() {
    $('#button-link').on('click', function() {
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
            handleSelection();
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