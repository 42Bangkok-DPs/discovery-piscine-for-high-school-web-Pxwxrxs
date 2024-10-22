$(document).ready(function() {
    $('#submit').click(function() {
        const inputValue = $('#input').val();
        $('#output').text(`You typed: ${inputValue}`);
    });
});
