$(document).ready(function() {

    function change(dir) {
        var currIndex = $('.images').find('.active').index();
        var newIndex = (currIndex + dir);

        // If the new index is beyond the range then return to zero
        if ((newIndex + 1) > $('.images').children().length) {
            newIndex = 0;
        }

        // If the new index is less than the first element return to the end
        if (newIndex < 0) {
            newIndex = ($('.images').children().length - 1);
        }

        $('.images').children().removeClass('active');
        $('.images').children(':eq(' + newIndex + ')').addClass('active');
    }

    $('.left-btn').on('click', function(e) {
        e.preventDefault();
        change(-1);
    });

    $('.right-btn').on('click', function(e) {
        e.preventDefault();
        change(1);
    });

});          