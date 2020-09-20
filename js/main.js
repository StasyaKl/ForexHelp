$(document).ready(() => {
    $('#burger').click(() => {
        $('#menu').show();
        $('#burger').hide();
    });
    $('#menu > *').click(() => {
        $('#menu').hide();
        $('#burger').show();
    });
})
