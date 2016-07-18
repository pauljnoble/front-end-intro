$(document).on('ready', function() {

    var foodItems = ['Wine', 'Cheese', 'Pizza', 'Cupcakes', 'Bananas', 'Apples', 'Oranges', 'Granola', 'Cereal'];

    $('.add').on('click', function() {
        var insertPoint = $(this).parent().find('li:nth-child(3)');
        
        $('<li />', {
            'text': foodItems[randomInt(0,foodItems.length-1)],
            'class': 'new-item'
        }).insertAfter(insertPoint);
    });

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max+1-min)) +min;
    }

});

