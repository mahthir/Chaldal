/*=========================================toggle menu button====================*/
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    if($('#main_section').hasClass('col-md-10')){
      $('#main_section').removeClass('col-md-10');
      $('#main_section').addClass('col-12');
    }else{
      $('#main_section').removeClass('col-12');
      $('#main_section').addClass('col-md-10');
      
      
    }
  });

/*================================================Owl carousel===============================*/

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  autopaly: true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      }
  }
   })

   /*========================active calass===================================*/
 var target=null;
   $(document).ready(function () {
          // $(".ul li ").on("click", function () {
          //     $(".ul li").find(".active").removeClass("active");
          //     $(this).addClass("active");
          // });
      });

      $(document).ready(function(){
      // Show hide popover
      $(".dropdown").click(function(){
          //$(this).find(".dropdown-menu").slideToggle("fast");
      });
  });
  function activeallclose(){
    
  }
  $('.dropdown1').on("click", function(event){
    //event.preventDefault();
    console.log(this);
    console.log($(this).hasClass('active') == false);
    if($(this).hasClass('active')==false){
      console.log($(this).find(".menu-list3"));
      $('.dropdown1.active').not(this).each(function(){
        console.log($(this).find(".dropdown-menu"));
        $(this).find(".menu-list3").toggle("slow");
       $(this).removeClass('active');
      });
      $(this).find(".menu-list3").toggle("slow");
      $(this).addClass('active');
    }
    
  
      
          
               
  });
  $('.dropdown2').on("click", function(event){
    if($(this).hasClass('active')==false){
      //console.log($(this).find(".menu-list3"));
      $('.dropdown2.active').not(this).each(function(){
        console.log($(this));
        $(this).find(".menu-list4").toggle("slow");
       $(this).removeClass('active');
      });
      $(this).find(".menu-list4").toggle("slow");
      $(this).addClass('active');
    }
  });
   