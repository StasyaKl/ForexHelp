$(document).ready(() => {
    $('#burger').click(() => {
        $('#header-menu').show();
        $('#burger').hide();
    });
    $('#menu > *').click(() => {
        $('#header-menu').hide();
        $('#burger').show();
    });
})