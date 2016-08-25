// wait for the DOM to finish loading


$(document).ready(function() {


  var box = $('.box');
  var x = 0;
  var y = [];
  var winner = false;
  //console.log(y);



    box.on('click', function boxClicked(event){
      if(winner === false){
        if(!($(this).html()==="x") && !($(this).html()==="o")){
          if(x%2===0){
            $(this).html("x");
            $(this).addClass("xClass")
            x++;
            y.push("x");

            console.log(x);
            // console.log($('#box1').html());
          }else {
        // box.on('click', function boxClicked(event){
            $(this).html("o");
            //console.log(x);
            $(this).addClass("oClass")
            x++;
            y.push("o");
        // })
          }
        }
        //X winning combinations
        if($('#box1').html()==="x" && $('#box2').html()==="x" && $('#box3').html()==="x"){
          xWins();
        }
        if($('#box4').html()==="x" && $('#box5').html()==="x" && $('#box6').html()==="x"){
          xWins();
        }
        if($('#box7').html()==="x" && $('#box8').html()==="x" && $('#box9').html()==="x"){
          xWins();
        }
        if($('#box1').html()==="x" && $('#box4').html()==="x" && $('#box7').html()==="x"){
          xWins();
        }
        if($('#box2').html()==="x" && $('#box5').html()==="x" && $('#box8').html()==="x"){
          xWins();
        }
        if($('#box3').html()==="x" && $('#box6').html()==="x" && $('#box9').html()==="x"){
          xWins();
        }
        if($('#box1').html()==="x" && $('#box5').html()==="x" && $('#box9').html()==="x"){
          xWins();
        }
        if($('#box3').html()==="x" && $('#box5').html()==="x" && $('#box7').html()==="x"){
          xWins();
        }


        //O winning combinations
        if($('#box1').html()==="o" && $('#box2').html()==="o" && $('#box3').html()==="o"){
          oWins();
        }
        if($('#box4').html()==="o" && $('#box5').html()==="o" && $('#box6').html()==="o"){
          oWins();
        }
        if($('#box7').html()==="o" && $('#box8').html()==="o" && $('#box9').html()==="o"){
          oWins();
        }
        if($('#box1').html()==="o" && $('#box4').html()==="o" && $('#box7').html()==="o"){
          oWins();
        }
        if($('#box2').html()==="o" && $('#box5').html()==="o" && $('#box8').html()==="o"){
          oWins();
        }
        if($('#box3').html()==="o" && $('#box6').html()==="o" && $('#box9').html()==="o"){
          oWins();
        }
        if($('#box1').html()==="o" && $('#box5').html()==="o" && $('#box9').html()==="o"){
          oWins();
        }
        if($('#box3').html()==="x" && $('#box5').html()==="o" && $('#box7').html()==="o"){
          oWins();
        }


        if(y.length > 8){
          $('.displayResult').append("<span>" + "Draw! Click Reset To Play Again!" + "</span>")
          //alert('Draw! Click Reset To Play Again!')
          winner = true;
        }
      }
    })

    function xWins(){
      $('.displayResult').append("<span>" + "'X' has won! Click Reset To Play Again!" + "</span>")
      //alert('X has won! Click Reset To Play Again!');
      winner = true;
    }

    function oWins(){
      $('.displayResult').append("<span>" + "'O' has won! Click Reset To Play Again!" + "</span>")
      //alert('O has won! Click Reset To Play Again!');
      winner = true;
    }

    $('.btn-default').on('click', function resetClick(event){
      // console.log("help");
      $('.box').html("");
      $('.box').removeClass("xClass oClass");
      $('span').remove();
      x=0;
      y=[];
      winner = false;
    })






});


