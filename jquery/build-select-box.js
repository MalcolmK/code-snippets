// Note: This snippet is not fully elaborated yet.

// Add options to a select box.
function addOptionToSelectBox (rootDomClass, dataObject) {
    $(rootDomClass)
        .append($("<option></option>")
            .attr("value", dataObject.key)
            .text(dataObject.value)
        );
}//function
