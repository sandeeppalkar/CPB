
//ZeroClipboard start
          var count=0;
          function zclipHack(){
             $("#copyCode").zclip({
                path:"ZeroClipboard.swf",
                copy:function(){return $(".pageHolder").html();}
             });
          }
          $('#copyCode').click(function(){
            count++;
            //alert('count='+count+ '');
            zclipHack();
          }); 
          zclipHack(); 
          //ZeroClipboard end 
         


          // grid Drag & drop
         $(function () {
            $(".grid").sortable({       
            });         
         // grid Drag & drop end






         //active class
          var selector = '.sidebar-wrapper .nav li';
          $(selector).on('click', function(){
              $(selector).removeClass('active');
              $(this).addClass('active');
          });


          //page heading change
           $( ".sidebar .nav li p" ).click(function() {
            var htmlString = $( this ).html();
            $( '.title1' ).text( htmlString );
          });


          //adblock hide for landing pages  

          $( document ).ready(function() {         
          $("#addNone").css("display","none");
          $( ".sidebar-wrapper .nav li a" ).click(function () {
              if ( $( this ).hasClass( "adBlockNone" ) ) {
                $('#addNone').hide();
                } else {
                   $('#addNone').show();
                }
          });
          });



          //no result hide for other pages 
          $( document ).ready(function() {    
           $("#noresultNone").css("display","none");
          $( ".sidebar-wrapper .nav li a" ).click(function() {
              if ( $( this ).hasClass( "noMsgNone" ) ) {
                    $('#noresultNone').show();
                } else {
                   $('#noresultNone').hide();
                }
          });
          });


         //add coloum start        
           $('#oneColum').click(function(){
            $('.pageHolder').append('<div class="new_rect border"></div>');         
               $(".border").click(function() {
                  $(".border").removeClass('addBorder');
                  $(this).addClass('addBorder');
               }); 
           });
         
           $('#twoColum').click(function(){
             $('.pageHolder').append('<div class="twoCol"> <div class="twoColIn border flt" ></div> <div class="twoColIn border frt"></div></div>');         
               $(".border").click(function() {
                  $(".border").removeClass('addBorder');
                  $(this).addClass('addBorder');
               }); 
           });
         
            $('#threeColum').click(function(){
             $('.pageHolder').append('<div class="threeCol"> <div class="threeColIn border" ></div> <div class="threeColIn border"></div> <div class="threeColIn border"></div></div>');         
               $(".border").click(function() {
                  $(".border").removeClass('addBorder');
                  $(this).addClass('addBorder');
               }); 
           });
         //add coloum end
         
         //add components start
         
         //add search components start      
               var objToCloneSH1 = $('.searchHolder1');
               for (var i = 0; i < 1; i++)
               $(".search1").click(function(){                
                  objToCloneSH1.clone().prependTo('.addBorder'); 
                   $(".addBorder .searchHolder1").removeClass("none");  
                   $(".searchStyle").css("display", "block");
               });

               var objToCloneSH2 = $('.searchHolder2');
               for (var i = 0; i < 1; i++)
               $(".search2").click(function(){                  
                  objToCloneSH2.clone().prependTo('.addBorder');
                   $(".addBorder .searchHolder2").removeClass("none");
                   $(".searchStyle").css("display", "block");
               });
           
               var objToCloneSH3 = $('.searchHolder3');
               for (var i = 0; i < 1; i++)
               $(".search3").click(function(){
                  objToCloneSH3.clone().prependTo('.addBorder');
                  $(".addBorder .searchHolder3").removeClass("none");
                  $(".searchStyle").css("display", "block");
               });           
         
              var objToCloneSH4 = $('.searchHolder4');
               for (var i = 0; i < 1; i++)
               $(".search4").click(function(){
                  objToCloneSH4.clone().prependTo('.addBorder');
                  $(".addBorder .searchHolder4").removeClass("none");
                  $(".searchStyle").css("display", "block");
               });

               var search1style = '.searchHolder1{padding:10px 0;width:100%}.search_box{margin:0 auto;width:96%}.search_box .srch-txt{height:40px;border:1px solid #d9d9d9;width:74%;padding:9px 5px;line-height:40px;float:left}.search_box .srch-btn{width:24%;float:right;cursor:pointer;height:40px;font-size:13px;border:none;color:#333;-webkit-appearance:none;outline:0;font-weight:700;background:#f6d962}';
               var searchcounter1 = 1;
               $(".search1").click(function(){
                  if(searchcounter1==1){
                     $( "#mainStyle" ).append(search1style);   
                  }else{}
                  searchcounter1++;
               });
           
               var search2style = '.searchHolder2{padding:10px 0;width:100%}.search_box2{margin:0 auto;width:96%}.search_box2 .srch-txt{height:40px;border:1px solid #d9d9d9;width:74%;padding:9px 5px;line-height:40px;float:left}.search_box2 .srch-btn{width:24%;float:right;cursor:pointer;height:40px;font-size:13px;border:none;color:#333;-webkit-appearance:none;outline:0;font-weight:700;background:url(images/search.png) center no-repeat #f6d962}';
               var searchcounter2 = 1;
               $(".search2").click(function(){
                  if(searchcounter2==1){
                     $( "#mainStyle" ).append(search2style);   
                  }else{}
                  searchcounter2++;
               });
          
               var search3style = '.searchHolder3{padding:10px 0;width:100%}.search_box3{width:96%;margin:0 auto;background:#fff;height:56px;padding:8px 0;border:1px solid #006770;border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;-o-border-radius:15px;-ms-border-radius:15px}.search_box3 .srchBtn{width:30px;float:right;margin-right:5px;cursor:pointer;height:42px;font-weight:400;font-size:18px;border:none;-webkit-appearance:none;outline:0;background:url(images/search.png) left center no-repeat #fff;text-transform:uppercase}.search_box3 .srch-txt1{height:42px;width:86%;padding:9px 2%;line-height:24px;float:left;background:#fff;border:0;color:#006670;font-size:18px;border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;-o-border-radius:15px;-ms-border-radius:15px}';
               var searchcounter3 = 1;
               $(".search3").click(function(){
                  if(searchcounter3==1){
                     $( "#mainStyle" ).append(search3style);   
                  }else{}
                  searchcounter3++;
               });
          
               var search4style = '.searchHolder4{margin:10px auto;width:96%}.searchHolder4 span{color:#fff;font-size:15px;font-weight:700;padding:0 0 0 10px}.searchHolder4 .searchBox{margin:4px auto 0;border:2px solid #60708a;background:#fff;border-radius:5px}.searchHolder4 .srch-btn{width:25%;float:right;cursor:pointer;height:40px;font-weight:400;font-size:18px;background:#555;color:#fff;-webkit-appearance:none;outline:0;text-transform:uppercase;border:0;padding:0}.searchHolder4 .srchTxt{background:0 0;border:0;float:left;height:40px;line-height:40px;padding:5px 1%;width:70%;color:#60708a;font-size:16px;border-radius:5px 0 0 5px}';
               var searchcounter4 = 1;
               $(".search2").click(function(){
                  if(searchcounter4==1){
                     $( "#mainStyle" ).append(search4style);   
                  }else{}
                  searchcounter4++;
               });
         //add search components end

         //add ads components start
               var objToCloneRS1 = $('.results');
               for (var i = 0; i < 1; i++)
               $(".ad1").click(function(){
                  objToCloneRS1.clone().prependTo('.addBorder');
                  $(".addBorder .results").removeClass("none")
                  $(".adsStyle").css("display", "block");
               });
                     
               var objToCloneRS2 = $('.results2');
               for (var i = 0; i < 1; i++)
               $(".ad2").click(function(){
                  objToCloneRS2.clone().prependTo('.addBorder');
                  $(".addBorder .results2").removeClass("none")
                  $(".adsStyle").css("display", "block");
               });
                    
               var objToCloneRS3 = $('.results3');
               for (var i = 0; i < 1; i++)
               $(".ad3").click(function(){
                  objToCloneRS3.clone().prependTo('.addBorder');
                  $(".addBorder .results3").removeClass("none")
                  $(".adsStyle").css("display", "block");
               });
         
               var ad1style = '.results,.results a.list,.results li{display:block;overflow:hidden}.results{margin:0 auto;width:96%}.results li{margin:15px 0 4px;position:relative;border:1px solid #b5b4b5;background:#fff}.results .num{font-size:45px;color:#2d2d2d;float:left;line-height:58px;font-weight:400;text-align:center;margin:1.5% 0 0}.results .adTextWrap{float:left;width:83%;padding:1% 0 1% 3%}.results a.list{word-wrap:break-word;padding:3% 15% 3% 3%;background:url(images/arrow.png) 97% center no-repeat}.results a.list .title{font-size:25px;color:#2d2d2d;line-height:34px;margin-bottom:4px;font-weight:700}.results a.list .desc,.results a.list .sepr,.results a.list .url{color:#7c7c7d;font-size:15px}.results a.list .desc{display:inline;line-height:20px}.results li:hover{background:#259deb;border:1px solid #19699d}.results li:hover .list{background:url(images/arrowHover.png) 97% center no-repeat}.results li:hover .desc,.results li:hover .num,.results li:hover .title,.results li:hover .url{color:#fff}';
               var adcounter1 = 1;
               $(".ad1").click(function(){
                  if(adcounter1==1){
                     $( "#mainStyle" ).append(ad1style);   
                  }else{}
                  adcounter1++;
               });

               var ad2style = '.results2,.results2 a.list,.results2 li{display:block;overflow:hidden}.results2{margin:0 auto;width:96%}.results2 li{margin:15px 0 4px;position:relative;border:1px solid #b5b4b5;background:#fff}.results2 .num{font-size:37px;color:#2d2d2d;float:left;line-height:51px;font-weight:400;text-align:center;width:50px;height:50px;margin:2.4% 0 0;background:#dc675f}.results2 .adTextWrap{float:left;width:83%;padding:1% 0 1% 3%}.results2 a.list{word-wrap:break-word;padding:3% 15% 3% 3%;background:url(images/arrow.png) 97% center no-repeat}.results2 a.list .title{font-size:25px;color:#2d2d2d;line-height:34px;margin-bottom:4px;font-weight:700}.results2 a.list .desc,.results2 a.list .sepr,.results2 a.list .url{color:#7c7c7d;font-size:15px}.results2 a.list .desc{display:inline;line-height:20px}.results2 li:hover{background:#259deb;border:1px solid #19699d}.results2 li:hover .list{background:url(images/arrowHover.png) 97% center no-repeat}.results2 li:hover .desc,.results2 li:hover .num,.results2 li:hover .title,.results2 li:hover .url{color:#fff}@media screen and (max-width:481px){.results2 .num{display:none}}';
               var adcounter2 = 1;
               $(".ad2").click(function(){
                  if(adcounter2==1){
                     $( "#mainStyle" ).append(ad2style);   
                  }else{}
                  adcounter2++;
               });

               var ad3style = '.results3,.results3 li{display:block;overflow:hidden}.results3{margin:0 auto;width:96%}.results3 li{margin:15px 0 4px;position:relative;border:1px solid #b5b4b5;background:#fff}.results3 .num{font-size:37px;color:#2d2d2d;float:left;line-height:51px;font-weight:400;text-align:center;width:50px;height:50px;margin:2.4% 0 0;background:#dc675f;display:none}.results3.adTextWrap{float:left;width:83%;padding:1% 0 1% 3%}.results3 a.list{word-wrap:break-word;display:block;overflow:hidden;padding:3% 15% 3% 3%;background:url(images/arrow.png) 97% center no-repeat}.results3 a.list .title{font-size:25px;color:#2d2d2d;line-height:34px;margin-bottom:4px;font-weight:700}.results3 a.list .desc,.results3 a.list .sepr,.results3 a.list .url{color:#7c7c7d;font-size:15px}.results3 a.list .desc{display:inline;line-height:20px}.results3 li:hover{background:#259deb;border:1px solid #19699d}.results3 li:hover .list {background:url(images/arrowHover.png) 97% center no-repeat}.results3 li:hover .desc,.results3 li:hover .num,.results3 li:hover .title,.results3 li:hover .url{color:#fff}@media screen and (max-width:481px) {.results2 .num{ display: none;}}';
               var adcounter3 = 1;
               $(".ad3").click(function(){
                  if(adcounter3==1){
                     $( "#mainStyle" ).append(ad3style);   
                  }else{}
                  adcounter3++;
               });
         
         //add ads components end

         //add kwds components start        
          
               var objToCloneKW1 = $('.kwdWrap');
               for (var i = 0; i < 1; i++)
               $(".kwd1").click(function(){
                  objToCloneKW1.clone().prependTo('.addBorder');
                  $(".addBorder .kwdWrap").removeClass("none")
                  $(".kwdsStyle").css("display", "block");
               });

               var objToCloneKW2 = $('.kwdWrap2');
               for (var i = 0; i < 1; i++)
               $(".kwd2").click(function(){
                  objToCloneKW2.clone().prependTo('.addBorder');
                   $(".addBorder .kwdWrap2").removeClass("none")
                   $(".kwdsStyle").css("display", "block");
               });

               var objToCloneKW3 = $('.kwdWrap3');
               for (var i = 0; i < 1; i++)
               $(".kwd3").click(function(){
                  objToCloneKW3.clone().prependTo('.addBorder');
                   $(".addBorder .kwdWrap3").removeClass("none")
                   $(".kwdsStyle").css("display", "block");
               });


               var kwd1style = '.kwdWrap{margin:0 auto;width:96%}.kwdWrap li{color:#1dc7ea;font-size:21px;margin:20px 0;text-align:left;float:left;width:100%}.kwdWrap li a{color:#1a1a1a;background:url(images/arrowsmall.png) right center no-repeat;padding:0 50px 0 10px}';
               var kwcounter1 = 1;
               $(".kwd1").click(function(){
                  if(kwcounter1==1){
                     $( "#mainStyle" ).append(kwd1style);   
                  }else{}
                  kwcounter1++;
               });

               var kwd2style = '.kwdWrap2{margin:0 auto;width:96%}.kwdWrap2 li{color:#1dc7ea;font-size:21px;margin:20px 0;text-align:left;float:left;width:100%}.kwdWrap2 li a{color:#1a1a1a;background:url(images/arrowsmall.png) left center no-repeat;padding:0 0 0 40px}';
               var kwcounter2 = 1;
               $(".kwd2").click(function(){
                  if(kwcounter2==1){
                     $( "#mainStyle" ).append(kwd2style);   
                  }else{}
                  kwcounter2++;
               });

               var kwd3style = '.kwdWrap3{margin:0 auto;width:96%}.kwdWrap3 li{color:#1dc7ea;font-size:21px;margin:20px 0;text-align:left;float:left;width:100%}.kwdWrap3 li a{color:#1a1a1a;padding:0 0 0 20px}';
               var kwcounter3 = 1;
               $(".kwd3").click(function(){
                  if(kwcounter3==1){
                     $( "#mainStyle" ).append(kwd3style);   
                  }else{}
                  kwcounter3++;
               });

         
         //add kwds components end
         

         //No result msg

               var objToCloneNoResult = $('.no-results');
               for (var i = 0; i < 1; i++)
               $(".noResMsg").click(function(){
                  objToCloneNoResult.clone().prependTo('.addBorder');
                  $(".addBorder .no-results").removeClass("none")
                  $(".noRmsgstyle").css("display", "block");
               });

               var noResMsgstyle = '.no-results{text-align: center;color: #000;font-size: 15px;margin: 15px 0; padding: 5px 0;}';
               var noResMsgcounter1 = 1;
               $(".noResMsg").click(function(){
                  if(noResMsgcounter1==1){
                     $( "#mainStyle" ).append(noResMsgstyle);   
                  }else{}
                  noResMsgcounter1++;
               });

         //No result msg end


         //add components end
          //accordian start
            $(".accordian li h2").click(function(){
                 //slide up all the link lists
                 $(".accordian ul .innContent").slideUp();
                 //slide down the link list below the h3 clicked - only if its closed
                 if(!$(this).next().is(":visible"))
                 {
                     $(this).next().slideDown();
                 }
             })
            //accordian end

            // for replace numbers in tags
            //for (var i = 0; i < size; i++)
           $(".preview").click(function(){ 
               var size = $(".newResults").size();
               for (var i = 0; i < size; i++)
               alert(size);
               $('ul li').each(function(index){
                  $(".title").text("<ad_title_text:" + i + "/>")
               });
           });


 //searchInput
   $('#colorSelector_SI_bg').ColorPicker({
      color: '#000000',
      onShow: function (colpkr) {
         $(colpkr).fadeIn(500);
         return false;
      },
      onHide: function (colpkr) {
         $(colpkr).fadeOut(500);
         return false;  
      },
      onChange: function (hsb, hex, rgb) {
         $(".addBorder .srch-txt").css('backgroundColor', '#' + hex);
      }
   });


   $('#colorSelector_SI').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .srch-txt").css('color', '#' + hex);
        }
    });

   $('#colorSelector_SI_brdr').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .srch-txt").css('borderColor', '#' + hex);
        }
    });  

   $("#size_SI").change(function() {
        $(".addBorder .srch-txt").css("font-size", $(this).val() + "px");
    });

   $("#radius_SI").change(function() {
        $(".addBorder .srch-txt").css("border-radius", $(this).val() + "px");
    });
     $("#fontFamily_SI").change(function() {
        $(".addBorder .srch-txt").css("font-family", $(this).val());
    });
    $("#border_SI").change(function() {
        $(".addBorder .srch-txt").css("border", $(this).val());
    });
    $("#borderWidth_SI").change(function() {
        $(".addBorder .srch-txt").css("border-width", $(this).val() + "px");
    });
    $("#fontStyle_SI").change(function() {
        $(".addBorder .srch-txt").css("font-style", $(this).val());
    });
    $("#fontWeight_SI").change(function() {
        $(".addBorder .srch-txt").css("font-weight", $(this).val());
    });
    $("#textAlign_SI").change(function() {
        $(".addBorder .srch-txt").css("text-align", $(this).val());
    });
    $("#letterSpacing_SI").change(function() {
         $(".addBorder .srch-txt").css("letter-spacing", $(this).val() + "px");
    });

    //searchButton Start
   $('#colorSelector_SB_bg').ColorPicker({
      color: '#000000',
      onShow: function (colpkr) {
      $(colpkr).fadeIn(500);
      return false;
      },
      onHide: function (colpkr) {
      $(colpkr).fadeOut(500);
      return false;
      },
      onChange: function (hsb, hex, rgb) {
      $(".addBorder .srch-btn").css('backgroundColor', '#' + hex);
      }
   });


   $('#colorSelector_SB').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .srch-btn").css('color', '#' + hex);
        }
    });

   $('#colorSelector_SB_brdr').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .srch-btn").css('borderColor', '#' + hex);
        }
    });  

   $("#size_SB").change(function() {
        $(".addBorder .srch-btn").css("font-size", $(this).val() + "px");
    });

   $("#radius_SB").change(function() {
        $(".addBorder .srch-btn").css("border-radius", $(this).val() + "px");
    });
     $("#fontFamily_SB").change(function() {
        $(".addBorder .srch-btn").css("font-family", $(this).val());
    });
    $("#border_SB").change(function() {
        $(".addBorder .srch-btn").css("border", $(this).val());
    });
    $("#borderWidth_SB").change(function() {
        $(".addBorder .srch-btn").css("border-width", $(this).val() + "px");
    });
    $("#fontStyle_SB").change(function() {
        $(".addBorder .srch-btn").css("font-style", $(this).val());
    });
    $("#fontWeight_SB").change(function() {
        $(".addBorder .srch-btn").css("font-weight", $(this).val());
    });
    $("#textAlign_SB").change(function() {
        $(".addBorder .srch-btn").css("text-align", $(this).val());
    });
    $("#letterSpacing_SB").change(function() {
         $(".addBorder .srch-btn").css("letter-spacing", $(this).val() + "px");
    });


    //Search file upload
      document.getElementById('searchicon').addEventListener('change', searchUrl, true);
      function searchUrl(){
          var searchfile = document.getElementById("searchicon").files[0];
          var searchreader = new FileReader();
          searchreader.onloadend = function(){
            $('.srchBtn, .srch-btn').css('backgroundImage',"url("+ searchreader.result +")");        
          }

          if(searchfile){
              searchreader.readAsDataURL(searchfile);
          }else{
          }
      }
  //Search file upload end


    //Ads Start
    //Ads background Start
   $('#colorSelector_ADS_bga').ColorPicker({
      color: '#000000',
      onShow: function (colpkr) {
      $(colpkr).fadeIn(500);
      return false;
      },
      onHide: function (colpkr) {
      $(colpkr).fadeOut(500);
      return false;
      },
      onChange: function (hsb, hex, rgb) {
      $(".addBorder li a").css('backgroundColor', '#' + hex);
      }
   });

   $('#colorSelector_ADS_bgah').ColorPicker({
      color: '#000000',
      onShow: function (colpkr) {
      $(colpkr).fadeIn(500);
      return false;
      },
      onHide: function (colpkr) {
      $(colpkr).fadeOut(500);
      return false;
      },
      onChange: function (hsb, hex, rgb) {
      $(".addBorder li a:hover").css('backgroundColor', '#' + hex);
      }
   });

    $('#colorSelector_ADS_brdr').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder li a").css('borderColor', '#' + hex);
        }
    }); 
    $("#border_ADS").change(function() {
        $(".addBorder li a").css("border", $(this).val());
    });
    $("#borderWidth_ADS").change(function() {
        $(".addBorder li a").css("border-width", $(this).val() + "px");
    }); 
    $("#radius_ADS").change(function() {
        $(".addBorder li a").css("border-radius", $(this).val() + "px");
    });
    //Ads background End

    //Ads Title Start
    $('#colorSelector_ADS_Title').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .title").css('color', '#' + hex);
        }
    });

    $("#size_ADS_Title").change(function() {
        $(".addBorder .title").css("font-size", $(this).val() + "px");
    });
     $("#fontFamily_ADS_Title").change(function() {
        $(".addBorder .title").css("font-family", $(this).val());
    });
    $("#fontStyle_ADS_Title").change(function() {
        $(".addBorder .title").css("font-style", $(this).val());
    });
    $("#fontWeight_ADS_Title").change(function() {
        $(".addBorder .title").css("font-weight", $(this).val());
    });
    $("#letterSpacing_ADS_Title").change(function() {
         $(".addBorder .title").css("letter-spacing", $(this).val() + "px");
    });
    //Ads Title End

    //Ads Description Start
    $('#colorSelector_ADS_Desc').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .desc").css('color', '#' + hex);
        }
    });

    $("#size_ADS_Desc").change(function() {
        $(".addBorder .desc").css("font-size", $(this).val() + "px");
    });
     $("#fontFamily_ADS_Desc").change(function() {
        $(".addBorder .desc").css("font-family", $(this).val());
    });
    $("#fontStyle_ADS_Desc").change(function() {
        $(".addBorder .desc").css("font-style", $(this).val());
    });
    $("#fontWeight_ADS_Desc").change(function() {
        $(".addBorder .desc").css("font-weight", $(this).val());
    });
    $("#letterSpacing_ADS_Desc").change(function() {
         $(".addBorder .desc").css("letter-spacing", $(this).val() + "px");
    });
    //Ads Description End

    //Ads Url Start
    $('#colorSelector_ADS_Url').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .url").css('color', '#' + hex);
        }
    });

    $("#size_ADS_Url").change(function() {
        $(".addBorder .url").css("font-size", $(this).val() + "px");
    });
     $("#fontFamily_ADS_Url").change(function() {
        $(".addBorder .url").css("font-family", $(this).val());
    });
    $("#fontStyle_ADS_Url").change(function() {
        $(".addBorder .url").css("font-style", $(this).val());
    });
    $("#fontWeight_ADS_Url").change(function() {
        $(".addBorder .url").css("font-weight", $(this).val());
    });
    $("#letterSpacing_ADS_Url").change(function() {
         $(".addBorder .url").css("letter-spacing", $(this).val() + "px");
    });
    //Ads Url End

    //Ads Seperator Start
    $('#colorSelector_ADS_Sepr').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .sepr").css('color', '#' + hex);
        }
    });

    $("#size_ADS_Sepr").change(function() {
        $(".addBorder .sepr").css("font-size", $(this).val() + "px");
    });
    $("#fontWeight_ADS_Sepr").change(function() {
        $(".addBorder .sepr").css("font-weight", $(this).val());
    });
    //Ads Seperator End

    //Ads Number Start
    $('#colorSelector_ADS_Num').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .num").css('color', '#' + hex);
        }
    });

    $('#colorSelector_ADS_NumBg').ColorPicker({
      color: '#000000',
      onShow: function (colpkr) {
      $(colpkr).fadeIn(500);
      return false;
      },
      onHide: function (colpkr) {
      $(colpkr).fadeOut(500);
      return false;
      },
      onChange: function (hsb, hex, rgb) {
      $(".addBorder .num").css('backgroundColor', '#' + hex);
      }
   });

    $("#size_ADS_Num").change(function() {
        $(".addBorder .num").css("font-size", $(this).val() + "px");
    });
     $("#fontFamily_ADS_Num").change(function() {
        $(".addBorder .num").css("font-family", $(this).val());
    });
    $("#fontStyle_ADS_Num").change(function() {
        $(".addBorder .num").css("font-style", $(this).val());
    });
    $("#fontWeight_ADS_Num").change(function() {
        $(".addBorder .num").css("font-weight", $(this).val());
    });
    //Ads Number End



      //Ads Arrow Start
      document.getElementById('addsArrow').addEventListener('change', readURL, true);
      function readURL(){
          var file = document.getElementById("addsArrow").files[0];
          var reader = new FileReader();
          reader.onloadend = function(){
            //document.getElementById('arrowImg').style.backgroundImage = "url(" + reader.result + ")";

            $('a.list').css('backgroundImage',"url(" + reader.result + ")");        
          }

          if(file){
              reader.readAsDataURL(file);
          }else{
          }
      }

      //Ads Arrow End


    //Ads End

     // Keywords Start
     //Keywords background Start
   $('#colorSelector_KWDS_bg').ColorPicker({
      color: '#000000',
      onShow: function (colpkr) {
      $(colpkr).fadeIn(500);
      return false;
      },
      onHide: function (colpkr) {
      $(colpkr).fadeOut(500);
      return false;
      },
      onChange: function (hsb, hex, rgb) {
      $(".addBorder .KwdsBg").css('backgroundColor', '#' + hex);
      }
   });

    $('#colorSelector_KWDS_brdr').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .KwdsBg").css('borderColor', '#' + hex);
        }
    }); 
    $("#border_KWDS").change(function() {
        $(".addBorder .KwdsBg").css("border", $(this).val());
    });
    $("#borderWidth_KWDS").change(function() {
        $(".addBorder .KwdsBg").css("border-width", $(this).val() + "px");
    }); 
    $("#radius_KWDS").change(function() {
        $(".addBorder .KwdsBg").css("border-radius", $(this).val() + "px");
    });
    //Keywords background End



    //Keywords  Start
    $('#colorSelector_KWDS').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder li a").css('color', '#' + hex);
        }
    });

    $("#size_KWDS").change(function() {
        $(".addBorder li a").css("font-size", $(this).val() + "px");
    });
     $("#fontFamily_KWDS").change(function() {
        $(".addBorder li a").css("font-family", $(this).val());
    });
    $("#fontStyle_KWDS").change(function() {
        $(".addBorder li a").css("font-style", $(this).val());
    });
    $("#fontWeight_KWDS").change(function() {
        $(".addBorder li a").css("font-weight", $(this).val());
    });
    $("#letterSpacing_KWDS").change(function() {
         $(".addBorder li a").css("letter-spacing", $(this).val() + "px");
    });



    //keyword file upload
      document.getElementById('keywordArrow').addEventListener('change', kwdUrl, true);
      function kwdUrl(){
          var kwdfile = document.getElementById("keywordArrow").files[0];
          var kwdreader = new FileReader();
          kwdreader.onloadend = function(){
            $(' .kwdWrap li a, .kwdWrap2 li a ').css('backgroundImage',"url("+ kwdreader.result +")");        
          }

          if(kwdfile){
              kwdreader.readAsDataURL(kwdfile);
          }else{
          }
      }
  //keyword file upload end

    //Ads Keywords End




    // noResmsg  Start

   $('#colorSelector_nRes_bg').ColorPicker({
      color: '#000000',
      onShow: function (colpkr) {
      $(colpkr).fadeIn(500);
      return false;
      },
      onHide: function (colpkr) {
      $(colpkr).fadeOut(500);
      return false;
      },
      onChange: function (hsb, hex, rgb) {
      $(".addBorder .no-results").css('backgroundColor', '#' + hex);
      }
   });


    $('#colorSelector_nRes').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $(".addBorder .no-results").css('color', '#' + hex);
        }
    });

    $("#size_nRes").change(function() {
        $(".addBorder p").css("font-size", $(this).val() + "px");
    });
     $("#fontFamily_nRes").change(function() {
        $(".addBorder p").css("font-family", $(this).val());
    });
    $("#fontStyle_nRes").change(function() {
        $(".addBorder p").css("font-style", $(this).val());
    });
    $("#fontWeight_nRes").change(function() {
        $(".addBorder p").css("font-weight", $(this).val());
    });
    $("#letterSpacing_nRes").change(function() {
         $(".addBorder p").css("letter-spacing", $(this).val() + "px");
    });

    //noResmsg   end






});

            function addContent(divName, content) {
                  document.getElementById(divName).innerHTML = content;
             }
               
           


             
               // $( ".searchHolder1 input" ).focus(function() {
               //   alert( "Handler for .focus() called." );
               //   $(".searchStyle").css("display", "block");   
               // });

               // if ($(".addBorder").is(":focus")) {
               //  $(".searchStyle").css("display", "block");
               //  } else{
               //  $(".searchStyle").css("display", "none");
               //  }




               // $(function(){
               //    $("#tabs-container li").click(function(){                  
               //        if ($(".addBorder").is(":focus")) {
               //        $(".searchStyle").css("display", "block");
               //        } else {
               //        $(".searchStyle").css("display", "none");
               //        }
               //    });
               // });



               // if ($(".addBorder .searchHolder1 input").click()) {
               //   alert( "Handler for .focus() called." );
               //       $(this).addClass("greenOutline");
               //    $(".searchStyle").css("display", "block");
               //    } else{
               //    $(".searchStyle").css("display", "none");
               //    }






          // $(document).ready(function(){
          // if($('.addBorder').children('.KwdsBg , .searchHolder2 ').length > 0);
          //     {
          //         $('.kwdsStyle , .searchStyle').show();
          //     }

          // else();
          //     {

          //        $('.kwdsStyle, .searchStyle').hide();
          //     }    

          // });





//BODY SECTION//
var bgImage=$("#bgImage").contents();


  //change body background
    $('#bodyBgColor').change(function(event)
    {
         var bodyBgColor=$('#bodyBgColor').val();
         
         bgImage.find("bgImage").css({'background-color':'#'+bodyBgColor});
    });

    //Upload body bg image check
    $('#bodyBgImageChk').change(function(event){                
        event.preventDefault();
        var checkbox = $('#bodyBgImageChk'),
            isChecked = checkbox.is(':checked');
            //status = $('#status');
        if(isChecked) {
            checkbox.prop('checked',true);
           $('#bodybgimgwrap').css("display","block");
        } else {
            checkbox.prop('checked', false); 
            bgImage.find('body').css("background-image","none");
            $('#bodybgimgwrap').css("display","none");
        }
    });

    //Change body bg image
    function changeBG(input) 
    {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {                
                bgImage.find("body").css({'background-image':'url(' +  e.target.result + ')'});                
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#bodyBgImage").change(function(){
        changeBG(this);
    });

    //change body background repeat
    $('#bodyBgRepeat').change(function(event)
    {
        var bodyBgRepeat=$('#bodyBgRepeat').val();
        bgImage.find("body").css({'background-repeat':bodyBgRepeat});
    });

    //change body background position-x
    $('#bodyBgPositionx').keyup(function(event)
    {
        var bodyBgPositionx=$('#bodyBgPositionx').val();
        bgImage.find("body").css({'background-position-x':bodyBgPositionx+'px'});
    });

    //change body background position-y
    $('#bodyBgPositiony').keyup(function(event)
    {
        var bodyBgPositiony=$('#bodyBgPositiony').val();
        bgImage.find("body").css({'background-position-y':bodyBgPositiony+'px'});
    });

    //change body background size
    $('#bodyBgSize').keyup(function(event)
    {
        var bodyBgSize=$('#bodyBgSize').val();
        bgImage.find("body").css({'background-size':bodyBgSize});
    });

    //change body background attachment
    $('#bodyBgattachment').keyup(function(event)
    {
        var bodyBgattachment=$('#bodyBgattachment').val();
        bgImage.find("body").css({'background-attachment':bodyBgattachment});
    });



















$( document ).ready(function() {


   $('.search_box').click(function() {
      //alert("hi");
      // $('.search_box').addClass('greenOutline');
      //   if ($('li[value*=web] img').hasClass("hide")) {
      //       $('li[value*=web] img').removeClass('hide').addClass('show');
      //   }
      //   else if ($('li[value*=web] img').hasClass("show")) {
      //       $('li[value*=web] img').removeClass('show').addClass('hide');
      //   }

    });

   // $(".search_box").click(function(){
   //    $(this).addClass("greenOutline");
   //    if ($(".search_box").is(":focus")) {
   //    $(".searchStyle").css("display", "block");
   //    } else{
   //    $(".searchStyle").css("display", "none");
   //    }
   // });
    //ads titkle

});