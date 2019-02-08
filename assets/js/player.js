var song1 = document.getElementById("audio");
var song2 = document.getElementById("audio2");

function player(){
    song1.play();
}

song1.onended = function(){

    song1.pause();
    song2.play();
}

song2.onended = function(){

    song2.pause();
    song1.play();
}
$(document).ready(function(){
    $('ul').click(function(){
        $('ul').toggleClass('active')
        });
});

$("#audio").prop('muted' ,false);
    $('#mute-audio').click(function (){
        if($("#audio").prop('muted')) {
            $("#audio").prop('muted' ,false);
        } else {
            $("#audio").prop('muted' , true);
        }
});

$("#audio2").prop('muted' ,false);
    $('#mute-audio').click(function (){
        if($("#audio2").prop('muted')) {
            $("#audio2").prop('muted' ,false);
        } else {
            $("#audio2").prop('muted' , true);
        }
});