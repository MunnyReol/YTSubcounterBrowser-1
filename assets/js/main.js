$(document).ready(function(){

    var channelName = "";
//channel 0 piewdiepie
    loadchannel("UC-lHJZR3Gqxm24_Vd_AJ5Yw");

    function loadchannel(name){

        channelName = name;

        var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+ name +'&key=AIzaSyCgCBendo5K3kPNEL9tO_TI4G8WAdp_hnM';

        $.getJSON(url, function(data){

            $('#odometer').html(data.items[0].statistics.subscriberCount);
        });

        var nameurl = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id='+ name +'&key=AIzaSyCgCBendo5K3kPNEL9tO_TI4G8WAdp_hnM';

        $.getJSON(nameurl, function(data){

            $('#channelname').html(data.items[0].snippet.title);
        });
    }

    setInterval( function() {

        var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+ channelName +'&key=AIzaSyCgCBendo5K3kPNEL9tO_TI4G8WAdp_hnM';
        $.getJSON(url, function(data){

            $('#odometer').html(data.items[0].statistics.subscriberCount);

        });
    },2000);

});

// channel 1 T-series

$(document).ready(function(){

    var channelName = "";

    loadchannel("UCq-Fj5jknLsUf-MWSy4_brA");

    function loadchannel(name){

        channelName = name;

        var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+ name +'&key=AIzaSyCgCBendo5K3kPNEL9tO_TI4G8WAdp_hnM';

        $.getJSON(url, function(data){

            $('#odometer2').html(data.items[0].statistics.subscriberCount);
        });


        var nameurl = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id='+ name +'&key=AIzaSyCgCBendo5K3kPNEL9tO_TI4G8WAdp_hnM';

        $.getJSON(nameurl, function(data){

            $('#channelname2').html(data.items[0].snippet.title);
        });
    }

    setInterval( function() {

        var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+ channelName +'&key=AIzaSyCgCBendo5K3kPNEL9tO_TI4G8WAdp_hnM';
        $.getJSON(url, function(data){

            $('#odometer2').html(data.items[0].statistics.subscriberCount);

        });
    },2000);

});

// for difference 

