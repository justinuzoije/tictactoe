$( document ).ready(function() {

    
    function start() {

        var game = false;
        var plays = 0;
        var player;

        function playerTurn() {
            if (plays % 2 === 0) {
                player = '1';
            } else {
                player = '2';
            }
        }

        playerTurn();


   
        $(".square").on("mouseenter", function() {
            console.log('Player ' + player + ' turn');

            if ( $(this).hasClass('clicked') ) {
                return;
            
            } else if (player === '1') {
                $(this).addClass('first');

            
            } else if (player === '2') {
                $(this).addClass('green');
            }

        }); 


   
        $('.square').on('mouseleave', function(){
            if ( $(this).hasClass('clicked') ) {
                return;
            } else {
                $(this).removeClass('first').removeClass('green');
            }
        }); 



        $(".square").on("click", function(){
            plays += 1;
            $(this).addClass('clicked');

        
            if (player === '1') {
                $(this).addClass('first').text('1');

            
            } else if (player === '2') {
                $(this).addClass('second').text('2');
            }


        }); 
    } 


    start();
}); 
