
$(document).ready(function(){
    window.sr = ScrollReveal();
    sr.reveal("h1");
    sr.reveal(".despre");
    sr.reveal(".gal");
    sr.reveal("footer location");
    sr.reveal("#carousel");
    sr.reveal(".team");
    function close(){
        $(".popUp").css("display", "none");
        $(".popUp-content").empty();
    }
    function gallery(img) {

        for(x=0; x<img.length; x++){
           $(".popUp-content").append("<img src=" + img[x] + ">");
        }
        $(".popUp").css("display", "flex"); 
        $(".popUp img:first-child").addClass("activeImg");
        
        $(".closed").click(function(){
            close();
        });    
    };

    $(".popUp .left").click(function(){
        console.log($(".activeImg").index());
        if($(".popUp img:first-child").hasClass("activeImg")){
            $(".popUp img:first-child").removeClass("activeImg");
            $(".popUp img:last-child").addClass("activeImg");

        }
        else {
            var prev = $(".activeImg").prev();           
            $(".activeImg").removeClass("activeImg");
            prev.addClass("activeImg");
            prev = "";
        }
    });

    function next(){
        if($(".popUp img:last-child").hasClass("activeImg")){
            $(".popUp img:last-child").removeClass("activeImg");
            $(".popUp img:first-child").addClass("activeImg");
        }
        else {
            var next = $(".activeImg").next();
            $(".activeImg").removeClass('activeImg');
            next.addClass("activeImg");
        }
    };

    $(".popUp .right").click(function(){
        next();
    });

    $(".popUp-content").click(function(){
        next();
    });
    $(".impro").click(function(e){

        var img = ["media/impro1.jpg", "media/impro2.jpg", "media/impro3.jpg"]
        gallery(img);
    });
    $(".ua").click(function(e){
        var img = ["media/act1.jpg", "media/act2.jpg", "media/act3.jpg", "media/act4.jpg", "media/act5.jpg", ];
        gallery(img);
    });
    $(".quiz").click(function(e){
        var img = ["media/quiz1.jpg", "media/quiz2.jpg", "media/quiz3.jpg", "media/quiz4.jpg", "media/5.jpg", ];
        gallery(img);
    });
// scroll down button to anchor
    var scrollDown = function() {
		var offset = $("#target").offset().top - 50;
		
		$("html, body").animate({scrollTop: offset}, 1000, "easeInOutCubic");
	};
	$(".down").click(function(){
		scrollDown();
	});
// hero slider	
	function infiniteLoop(){
		var fadeInTime = 1000;
		var itemInterval = 7000;
		var fadeTime = 2500;
		var currentItem = 0;
		var maxLength = $(".full").length;
		$('.full').eq(currentItem).fadeIn(fadeTime);
		setInterval(function(){
		$('.full').eq(currentItem).fadeOut(fadeTime);	
			if(currentItem  == maxLength - 1){
				currentItem = 0;
			}
			else {
				currentItem++;
			}
		$('.full').eq(currentItem).fadeIn(fadeTime);	 
		}, itemInterval);
		

	}
	infiniteLoop();
//header animation scroll
	$(window).resize(function(){
		$(".hero").height($(window).height());
		$(".full").width($(window).width());
	});
	$(window).trigger("resize");
    if(window.location.pathname == "/portofolio") {
        $("header").addClass("sticky").animate();
    }
    else {
    	$(document).on("scroll", function(){
    		if($(window).scrollTop() > 100){
    			$("header").addClass("sticky").animate();
    		}
    		else {
    			$("header").removeClass("sticky");
    		}
    	});
    }
 if(top.location.pathname == "/") {
    $(document).on("scroll", function(){
        
        var contactTop = $(".white").offset().top;
        var cineSuntemTop = $(".cineSuntem").offset().top;
        if(cineSuntemTop < contactTop && $(window).width() < 1450){
            ;
            $(".theo").addClass("hidden");
            setTimeout(function(){
                $(".circle").addClass("hidden");
            }, 200);
            setTimeout(function(){
                $(".white").css("opacity", 0);
            }, 300)
            
        }
        else if(cineSuntemTop-160 > contactTop){
            
            $(".white").css("opacity", "1");            
            setTimeout(function(){
                $(".circle").removeClass("hidden");
            }, 200)
            setTimeout(function(){
                $(".theo").removeClass("hidden");
            }, 200)
          
        }
        
        
        
    })
}
// Click contact function
    $(".white").click(function(){

        if($(".mesaj").css("width") == "230px"){
            $(".rezerva").animate({
                    opacity:"0"
                }, 200);
            setTimeout(function(){
                $(".mesaj").animate({
                    width:"-230"
                }, 500, "easeOutBounce");
                $(".circle").removeClass("activ");
            }, 300);

            
        }
        else{
            $(".circle").addClass("activ");
            $(".mesaj").animate({
                width: "+230"
            }, 500, "easeOutBounce");
            setTimeout(function(){
                $(".rezerva").animate({
                    opacity:"1"
                }, 200);
            }, 500) 
        }
        
    });

// gallery 

});



function initMap() {
        var arte = {lat: 47.1646965, lng: 27.5779259};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18.75,
          center: arte,
          disableDefaultUI: true,
          styles:[
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bf1e2e"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#bf1e2e"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#21301c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": 'water',
        "elementType": 'geometry',
        "stylers": [{"color": '#17263c'}]
            },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    }
]
        });
        var marker = new google.maps.Marker({
          position: arte,
          map: map,
          icon: {
           url:"./media/mapM.png",
           scaledSize: new google.maps.Size(50, 50)
       	  }


        });
        var infowindow = new google.maps.InfoWindow({
        	content:"În fiecare Duminică, 19:00"
        });
        infowindow.open(map, marker)
};
