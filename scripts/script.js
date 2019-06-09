$(document).ready(function() {

//  var cursorArray = ['url("../img/cursor1.png"), auto',
//                     'url("../img/cursor2.png"), auto',
//                     'url("../img/cursor3.png"), auto',
//                     'url("../img/cursor4.png"), auto',
//                     'url("../img/cursor5.png"), auto',
//                     'url("../img/cursor6.png"), auto',
//                     'url("../img/cursor7.png"), auto',
//                     'url("../img/cursor8.png"), auto',
//                     'url("../img/cursor9.png"), auto',
//                     'url("../img/cursor10.png"), auto',
//                     'url("../img/cursor11.png"), auto',
//                     'url("../img/cursor12.png"), auto',
//                     'url("../img/cursor13.png"), auto',
//                     'url("../img/cursor14.png"), auto',
//                     'url("../img/cursor15.png"), auto',
//                     'url("../img/cursor16.png"), auto',
//                     'url("../img/cursor17.png"), auto',
//                     'url("../img/cursor18.png"), auto',
//                     'url("../img/cursor19.png"), auto',
//                     'url("../img/cursor20.png"), auto',
//                     'url("../img/cursor21.png"), auto',
//                     'url("../img/cursor22.png"), auto',
//                     'url("../img/cursor23.png"), auto',
//                     'url("../img/cursor24.png"), auto',
//                     'url("../img/cursor25.png"), auto',
//                     'url("../img/cursor26.png"), auto',
//                    ];
//  i = 0;
//  (function cursor(){
//    playground.style.cursor  = cursorArray[i];
//    i++;
//    if(i == cursorArray.length){
//      i = 0;
//    }
//     setTimeout(cursor, 50);
//  })();



  $('.my-custom-button1').click(function(event) {
    $button = $(event.target);

    // change the buttons text
    $button.text('added');

    // get data attribute to revel correct item in cart
    var itemName = $button.attr('data-item');
    console.log('itemName: ', itemName);

    // get the right item to reveal
    var $itemToReveal = $('#' + itemName);
    console.log('$itemToReveal: ', $itemToReveal);

    $itemToReveal.removeClass('is-hidden');

  });

  $('.my-custom-button2').click(function(event) {
    $button = $(event.target);

    // change the buttons text
    $button.text('added');

    // get data attribute to revel correct item in cart
    var itemName = $button.attr('data-item');
    console.log('itemName: ', itemName);

    // get the right item to reveal
    var $itemToReveal = $('#' + itemName);
    console.log('$itemToReveal: ', $itemToReveal);

    $itemToReveal.removeClass('is-hidden');

  });

});
