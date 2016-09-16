// Based on: http://stackoverflow.com/a/2055498/2878778

var cb = $('<input/>', {
    type: 'checkbox',
    id: 'unique-id',
    value: 'value-of-checkbox',
    name: 'newletters',
    checked: true|false
}).appendTo(container);

// Additionally, a label can be added.
var label = $('<label/>', {
    'for': 'unique-id-of-checkbox',
    text: 'I am a label'
}).appendTo(container);
