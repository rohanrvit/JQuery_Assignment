$(document).ready(function() {
    $("h1").click(function() {
        alert( $(this).text());
    });
 
});
// $( "li" ).each(function( index ) {
//     console.log( index + ": " + $( this ).text() );
//   });
// $(document).ready(function(){
// $("button").click(function(){
//     var i=1;
//    var a= $("#language").val();
//    $( "#language" ).each(function( i )
//    {
//          if(typeof(Storage)!=="undefined")
//              {
   
//             sessionStorage.setItem( i,a.toString());
//             alert("user data saved successfully!");
//             i++;
//     }

// else{
//     alert("Storage not supported ! ");
// }}
//    $('#list').append('<li>'+a+'</li>');
//                return false;
// })
// });
$(document).ready(function(){
    
    $("button").click(function(){
        var i=1;

       var a= $("#language").val();
       if(typeof(Storage)!=="undefined"){
         if(localStorage.getItem("i")!==undefined)
         {
             i=localStorage.getItem("i");
             sessionStorage.setItem( i,a.toString());
        
             alert("user data saved successfully!")
             i++;
         }
       
        localStorage.setItem("i",i);
    }else{
        alert("Storage not supported ! ");
    }
       $('#list').append('<li>'+a+'</li>');
                   return false;
    })
    });