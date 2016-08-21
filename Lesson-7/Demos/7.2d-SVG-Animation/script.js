var data = {
    'Australia': [6, 7, 9],
    'GB': [14, 16, 7],
    'USA': [23, 20, 18]
};

var $gold, $silver, $bronze;

var loadData = function (key) {
    $gold.attr('height', getHeight(0, key));
    $gold.next('text').text(getVal(0, key));
    $silver.attr('height', getHeight(1, key));
    $silver.next('text').text(getVal(1, key));
    $bronze.attr('height', getHeight(2, key));
    $bronze.next('text').text(getVal(2, key));
}

var getVal = function (index, key) {
    return (data[key][index]);
}

var getHeight = function (index, key) {
    return ((data[key][index] * 8) + 'px');
}

var attachListener = function () {
    $('a').on('click', function(e) {
        e.preventDefault();
        loadData($(this).attr('data-key'));
        $('a').removeClass('active');
        $(this).addClass('active');
    });
}

$(document).ready(function() {

    $gold = $('.gold');
    $silver = $('.silver');
    $bronze = $('.bronze');

    loadData('Australia');

    attachListener();

});