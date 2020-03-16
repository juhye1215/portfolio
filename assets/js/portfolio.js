
$( function() {
    var state = true;
    $( ".overlay footer a" ).mouseover(function() {
      if ( state ) {
        $( ".overlay footer a" ).animate({
                 width: 200
        }, 1000 );
      } else {
        $( ".overlay footer a" ).animate({
           width: 180
        }, 1000 );
      }
      state = !state;
    });
  } );