$('document').ready(function(){
  console.log('JQ');
  $('.operatorButton').on('click', function(){
    // what type of operator is this?
    var myOperator = $(this).data('operator');
    console.log('in operator button click', myOperator);
    // get user number inputs
    var num0 = $('#num0').val();
    var num1 = $('#num1').val();
    // assemble logic to send to Server
    var objectToSend = {
      x: num0,
      y: num1,
      type: myOperator
    };
    console.log('sending', objectToSend);
    // recieve and answer// display answer on DOM
    $.ajax({
      type: 'POST',
      url: '/math',
      data: objectToSend,
      success: function(response){
        console.log('back from ajax with:', response);
        // recieve and answer - response.answer
        // display answer on DOM
        $('#outputP').text(response.answer);
      }
    }); // end ajax
  }); // end operatorButton click



  /// END TEXT POST
}); // end doc.ready
