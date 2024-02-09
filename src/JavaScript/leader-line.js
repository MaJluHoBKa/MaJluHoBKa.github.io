var linesMap = {};

$(document).ready(function() {
    document.addEventListener("mousemove", function(event) {
        // Проверяем, является ли цель события элементом с классом 'apex-add'
        if (event.target.classList.contains('apex-add')) {
            var idOfElementBeingMoved = event.target.id;

            // Проверяем, существует ли линия в linesMap для данного id
            if (linesMap[idOfElementBeingMoved]) {
                // Вызываем метод position() для соответствующей линии
                linesMap[idOfElementBeingMoved].forEach(function(lineInfo) {
                    if (lineInfo && lineInfo.line) {
                        lineInfo.line.position();
                    }
                });
            }
        }
    });
});