"use strict";

let mainCallBtn = document.querySelector('.send-btn');
let mainModal = document.querySelector('.main-modal');
let mainModalX = document.querySelector('.main-modal-x');
let mainOrderBtn = document.querySelector('.btn-service');
let orderModalX = document.querySelector('.order-modal-x');
let orderModal = document.querySelector('.order-modal');
let orderModalX1 = document.getElementById('omx-1');
let orderModalX2 = document.getElementById('omx-2');
let mapInfo = document.querySelector('.map-info');
let contactInfo = document.querySelector('.contact-info');
let scrollBtn = document.querySelector('.scroll-btn');
let mediaBtn = document.querySelector('.btn-bottom');
let restBtn = document.querySelector('.rest-btn');
let hotelBtn = document.querySelector('.hotel-bottom-btn');
let contactBtn = document.querySelector('.contacts-btn');
let mainText = document.querySelector('.main-text');
let titleShadow = document.querySelector('.title-shadow');
let titleReal = document.querySelector('.title-real');
let titleShadow1 = document.querySelector('.title-shadow1');
let titleReal1 = document.querySelector('.title-real1');
let stocksShadow = document.querySelector('.stocks-shadow');
let stocksReal = document.querySelector('.stocks-real');
let restShadow = document.querySelector('.rest-shadow');
let restReal = document.querySelector('.rest-real');
let setShadow = document.querySelector('.set-shadow');
let setReal = document.querySelector('.set-real');
let hotelShadow = document.querySelector('.hotel-shadow');
let hotelReal = document.querySelector('.hotel-real');
let partyReal = document.querySelector('.party-real');
let partyShadow = document.querySelector('.party-shadow');
let questionsShadow = document.querySelector('.questions-shadow');
let questionsReal = document.querySelector('.questions-real');
let commentShadow = document.querySelector('.comment-shadow');
let commentReal = document.querySelector('.comment-real');
let contanctMap = document.querySelector('.contacts-map-img');

let scrollValue = 11850;
let scrollValueOrigin = 700;
let scrollValueMedia = 200;
let scrollValueConditions = 1200;
let scrollValueStocks = 2900;
let scrollValueRest = 3700;
let scrollValueSet = 4600;
let scrollValueHotel = 6500;
let scrollValueParty = 7800;
let scrollValueQuestions = 8900;
let scrollValueComment = 10500;



mainText.animate([
    {
     opacity: 0,
     transform: 'translateX(-5rem)'
    },

    {
     transform: 'translateX(4rem)'
    },

    {
     opacity: 1,
     transform: 'translate(0)'
    }
 ], {
   duration: 3000,
   iterations: 1,
   easing: "linear"
 });


 



mainCallBtn.addEventListener('click',function(e1){
    e1.preventDefault();
    e1.stopPropagation();
    setTimeout(function(){
        mainModal.style.cssText = "display:block;";
    }, 1000);
});


mainModalX.addEventListener('click',function(e2){
    e2.preventDefault();
    e2.stopPropagation();
    mainModal.style.cssText = "display:none;";
});


mainOrderBtn.addEventListener('click',function(e3){
    e3.preventDefault();
    e3.stopPropagation();
    setTimeout(function(){
        orderModal.style.cssText = "display:block;";
    }, 1000);
});


orderModalX.addEventListener('click',function(e4){
    e4.preventDefault();
    e4.stopPropagation();
    orderModal.style.cssText = "display:none;";
});


orderModalX1.addEventListener('click',function(e5){
    e5.preventDefault();
    e5.stopPropagation();
    orderModal.style.cssText = "display:none;";
});


orderModalX2.addEventListener('click',function(e6){
    e6.preventDefault();
    e6.stopPropagation();
    orderModal.style.cssText = "display:none;";
});


//   window.onscroll = function (e) {
//       console.log(window.scrollY); // Value of scroll Y in px
//   };


mapInfo.addEventListener('click',function(e7){
    e7.preventDefault();
    e7.stopPropagation();
    
   
   
    //window.scrollTo(0, scrollValue);
    window.scrollTo({
        top: scrollValue,
        behavior: "smooth"
    });
});


contactInfo.addEventListener('click',function(e8){
    e8.preventDefault();
    e8.stopPropagation();
    
   
   
    //window.scrollTo(0, scrollValue);
    window.scrollTo({
        top: scrollValue,
        behavior: "smooth"
    });
});


window.onscroll = function (e9) {
    e9.preventDefault();
    e9.stopPropagation();

       //console.log(window.scrollY);

        window.scrollY >= scrollValueOrigin ?  scrollBtn.style.cssText = "display:block" : scrollBtn.style.cssText = "display:none";
        
         switch(true){
            case (window.scrollY === scrollValueMedia):
                titleShadow.animate([
                    {
                      opacity: 0,
                      transform: 'translateX(-3rem)'
                    },
      
                    {
                      opacity: 1,
                      transform: 'translate(0)'
                    }
                 ], {
                     duration: 1000,
                     iterations: 1,
                     easing: "linear",
                     endDelay:500
                 });
      
      
                 titleReal.animate([
                    {
                      opacity: 0,
                      transform: 'translateY(-2rem)'
                    },
      
                    {
                      opacity: 1,
                      transform: 'translate(0)'
                    }
                 ], {
                  duration: 1000,
                  iterations: 1,
                  easing:  "linear",
                  //delay:500
                 });
                 //break;


                 case (window.scrollY === scrollValueConditions):
                    titleShadow1.animate([
                        {
                          opacity: 0,
                          transform: 'translateX(-3rem)'
                        },
            
                        {
                          opacity: 1,
                          transform: 'translate(0)'
                        }
                     ], {
                         duration: 1000,
                         iterations: 1,
                         easing: "linear",
                         endDelay:500
                     });
            
            
                     titleReal1.animate([
                        {
                          opacity: 0,
                          transform: 'translateY(-2rem)'
                        },
            
                        {
                          opacity: 1,
                          transform: 'translate(0)'
                        }
                     ], {
                      duration: 1000,
                      iterations: 1,
                      easing:  "linear",
                      //delay:500
                     });
                     //break;


                     case (window.scrollY === scrollValueStocks):
                        stocksShadow.animate([
                            {
                              opacity: 0,
                              transform: 'translateX(-3rem)'
                            },
                
                            {
                              opacity: 1,
                              transform: 'translate(0)'
                            }
                         ], {
                             duration: 1000,
                             iterations: 1,
                             easing: "linear",
                             endDelay:500
                         });
                
                
                         stocksReal.animate([
                            {
                              opacity: 0,
                              transform: 'translateY(-2rem)'
                            },
                
                            {
                              opacity: 1,
                              transform: 'translate(0)'
                            }
                         ], {
                          duration: 1000,
                          iterations: 1,
                          easing:  "linear",
                          //delay:500
                         });
                       

                         case (window.scrollY === scrollValueRest):
                            restShadow.animate([
                                {
                                  opacity: 0,
                                  transform: 'translateX(3rem)'
                                },
                    
                                {
                                  opacity: 1,
                                  transform: 'translate(0)'
                                }
                             ], {
                                 duration: 1000,
                                 iterations: 1,
                                 easing: "linear",
                                 endDelay:500
                             });
                    
                    
                             restReal.animate([
                                {
                                  opacity: 0,
                                  transform: 'translateY(-2rem)'
                                },
                    
                                {
                                  opacity: 1,
                                  transform: 'translate(0)'
                                }
                             ], {
                              duration: 1000,
                              iterations: 1,
                              easing:  "linear",
                              //delay:500
                             });


                             case (window.scrollY === scrollValueSet):
                                setShadow.animate([
                                    {
                                      opacity: 0,
                                      transform: 'translateX(3rem)'
                                    },
                        
                                    {
                                      opacity: 1,
                                      transform: 'translate(0)'
                                    }
                                 ], {
                                     duration: 1000,
                                     iterations: 1,
                                     easing: "linear",
                                     endDelay:500
                                 });
                        
                        
                                 setReal.animate([
                                    {
                                      opacity: 0,
                                      transform: 'translateY(-2rem)'
                                    },
                        
                                    {
                                      opacity: 1,
                                      transform: 'translate(0)'
                                    }
                                 ], {
                                  duration: 1000,
                                  iterations: 1,
                                  easing:  "linear",
                                  //delay:500
                                 });


                                 case (window.scrollY === scrollValueHotel):
                                    hotelShadow.animate([
                                        {
                                          opacity: 0,
                                          transform: 'translateX(3rem)'
                                        },
                            
                                        {
                                          opacity: 1,
                                          transform: 'translate(0)'
                                        }
                                     ], {
                                         duration: 1000,
                                         iterations: 1,
                                         easing: "linear",
                                         endDelay:500
                                     });
                            
                            
                                     hotelReal.animate([
                                        {
                                          opacity: 0,
                                          transform: 'translateY(-2rem)'
                                        },
                            
                                        {
                                          opacity: 1,
                                          transform: 'translate(0)'
                                        }
                                     ], {
                                      duration: 1000,
                                      iterations: 1,
                                      easing:  "linear",
                                      //delay:500
                                     });


                                     case (window.scrollY === scrollValueParty):
                                        partyShadow.animate([
                                            {
                                              opacity: 0,
                                              transform: 'translateX(-3rem)'
                                            },
                                
                                            {
                                              opacity: 1,
                                              transform: 'translate(0)'
                                            }
                                         ], {
                                             duration: 1000,
                                             iterations: 1,
                                             easing: "linear",
                                             endDelay:500
                                         });
                                
                                
                                         partyReal.animate([
                                            {
                                              opacity: 0,
                                              transform: 'translateY(-2rem)'
                                            },
                                
                                            {
                                              opacity: 1,
                                              transform: 'translate(0)'
                                            }
                                         ], {
                                          duration: 1000,
                                          iterations: 1,
                                          easing:  "linear",
                                          //delay:500
                                         });



                                         case (window.scrollY === scrollValueQuestions):
                                            questionsShadow.animate([
                                                {
                                                  opacity: 0,
                                                  transform: 'translateX(3rem)'
                                                },
                                    
                                                {
                                                  opacity: 1,
                                                  transform: 'translate(0)'
                                                }
                                             ], {
                                                 duration: 1000,
                                                 iterations: 1,
                                                 easing: "linear",
                                                 endDelay:500
                                             });
                                    
                                    
                                             questionsReal.animate([
                                                {
                                                  opacity: 0,
                                                  transform: 'translateY(-2rem)'
                                                },
                                    
                                                {
                                                  opacity: 1,
                                                  transform: 'translate(0)'
                                                }
                                             ], {
                                              duration: 1000,
                                              iterations: 1,
                                              easing:  "linear",
                                              //delay:500
                                             });


                                             case (window.scrollY === scrollValueComment):
                                                commentShadow.animate([
                                                {
                                                  opacity: 0,
                                                  transform: 'translateX(-3rem)'
                                                },
                                    
                                                {
                                                  opacity: 1,
                                                  transform: 'translate(0)'
                                                }
                                             ], {
                                                 duration: 1000,
                                                 iterations: 1,
                                                 easing: "linear",
                                                 endDelay:500
                                             });
                                    
                                    
                                             commentReal.animate([
                                                {
                                                  opacity: 0,
                                                  transform: 'translateY(-2rem)'
                                                },
                                    
                                                {
                                                  opacity: 1,
                                                  transform: 'translate(0)'
                                                }
                                             ], {
                                              duration: 1000,
                                              iterations: 1,
                                              easing:  "linear",
                                              //delay:500
                                             });
    

                                             case (window.scrollY === scrollValue):
                                                contanctMap.animate([
                                                {
                                                  opacity: 0,
                                                  transform: 'scale(1.1)'
                                                },
                                    
                                                {
                                                  opacity: 1,
                                                  transform: 'scale(1)'
                                                }
                                             ], {
                                                 duration: 2000,
                                                 iterations: 1,
                                                 easing: "linear",
                                                 endDelay:500
                                             });
                                   
         }
       

};


scrollBtn.addEventListener('click',function(e10){
    e10.preventDefault();
    e10.stopPropagation();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


mediaBtn.addEventListener('click',function(e11){
    e11.preventDefault();
    e11.stopPropagation();
    setTimeout(function(){
        orderModal.style.cssText = "display:block;";
    }, 1000);
});


restBtn.addEventListener('click',function(e12){
    e12.preventDefault();
    e12.stopPropagation();

    setTimeout(function(){
        orderModal.style.cssText = "display:block;";
    }, 1000);
});


hotelBtn.addEventListener('click',function(e13){
    e13.preventDefault();
    e13.stopPropagation();

    setTimeout(function(){
        orderModal.style.cssText = "display:block;";
    }, 1000);
});


contactBtn.addEventListener('click',function(e14){
    e14.preventDefault();
    e14.stopPropagation();


    setTimeout(function(){
        orderModal.style.cssText = "display:block;";
    }, 1000);
});


