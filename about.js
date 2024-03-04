

function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var introPosition = introText.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;
    
    var screenPosition = window.innerHeight / 1.2;
  
    if(introPosition < screenPosition) {
      introText.classList.add('side-text-appear');
    }
    if(imagePosition < screenPosition) {
      sideImage.classList.add('sideImage-appear');
    }
  }
  
  window.addEventListener('scroll', scrollAppear);
  
  // For switching between navigation menus in mobile mode
  var i = 2;
  function switchTAB() {
      var x = document.getElementById("list-switch");
      if(i%2 == 0) {
          document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
          document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
      }else {
          document.getElementById("list-switch").style= "display: none;";
          document.getElementById("search-switch").style= "display: none;";
      }
      i++;
  }
  
  // For LOGIN
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  var a = document.getElementById("log");
  var b = document.getElementById("reg");
  var w = document.getElementById("other");
  
  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
  }
  
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
  }
    
  // CheckBox Function
  function goFurther(){
    if (document.getElementById("chkAgree").checked == true) {
      document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
    }
    else{
      document.getElementById('btnSubmit').style = 'background: lightgray;';
    }
  }
  
  function google() {
        window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
  }
  
  // QUIZ Page
  function quizt(frame) {
    document.getElementById('f1').style='display: none;';
    document.getElementById('f2').style='display: none;';
    document.getElementById('f3').style='display: none;';
    document.getElementById('f4').style='display: none;';
    document.getElementById('f5').style='display: none;';
    document.getElementById('f6').style='display: none;';
    document.getElementById('f7').style='display: none;';
    document.getElementById('f8').style='display: none;';
    document.getElementById('f9').style='display: none;';
    document.getElementById('f10').style='display: none;';
    document.getElementById('f11').style='display: none;';
    if(frame == 1) document.getElementById('f1').style = 'display: block';
    else if(frame == 2) document.getElementById('f2').style = 'display: block';
    else if(frame == 3) document.getElementById('f3').style = 'display: block';
    else if(frame == 4) document.getElementById('f4').style = 'display: block';
    else if(frame == 5) document.getElementById('f5').style = 'display: block';
    else if(frame == 6) document.getElementById('f6').style = 'display: block';
    else if(frame == 7) document.getElementById('f7').style = 'display: block';
    else if(frame == 8) document.getElementById('f8').style = 'display: block';
    else if(frame == 9) document.getElementById('f9').style = 'display: block';
    else if(frame == 10) document.getElementById('f10').style = 'display: block';
    else if(frame == 11) document.getElementById('f11').style = 'display: block'; 
    else alert('error');
  }
  
  function startquiz() {
    document.getElementById('title').style = 'display: none;'; 
  
    document.getElementById('panel').style = 'display: inline-flex;'; 
    document.getElementById('left').style = 'display: block;'; 
    document.getElementById('right').style = 'display: block;'; 
  }
  function searchdisplay() {
    document.getElementById('searchpanel').style.display="block";
  }
  
  function display(n) {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s3 = document.getElementById('s3');
    var s4 = document.getElementById('s4');
  
    img1.style = 'display: none;';
    img2.style = 'display: none;';
    img3.style = 'display: none;';
    img4.style = 'display: none;';
    s1.style = 'background: #DF2771; color: #FFF;';
    s2.style = 'background: #DF2771; color: #FFF;';
    s3.style = 'background: #DF2771; color: #FFF;';
    s4.style = 'background: #DF2771; color: #FFF;';
  
    if(n==1) {
      img1.style = 'display: block;';
      s1.style = 'background: #E5E8EF; color: #DF2771;';
    }
    if(n==2) {
      img2.style = 'display: block;';
      s2.style = 'background: #E5E8EF; color: #DF2771;';
    }
    if(n==3) {
      img3.style = 'display: block;';
      s3.style = 'background: #E5E8EF; color: #DF2771;';
    }
    if(n==4) {
      img4.style = 'display: block;';
      s4.style = 'background: #E5E8EF; color: #DF2771;';
    } 
  }
  
  
  function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    if(side==0) {
      menu.style = 'transform: translateX(0vh); position:fixed;';
    }
    else {
      menu.style = 'transform: translateX(-100%);';
    }
    side++;
  }

  
$(document).ready(function(){
  // $('#goRight').on('click', function(){
  //   $('#slideBox').animate({
  //     'marginLeft' : '0'
  //   });
  //   $('.topLayer').animate({
  //     'marginLeft' : '100%'
  //   });
  // });
  $('#goLeft').on('click', function(){
    if (window.innerWidth > 769){
      $('#slideBox').animate({
        'marginLeft' : '50%'
      });
    }
    else {
      $('#slideBox').animate({
        'marginLeft' : '20%'
      });
    }
    $('.topLayer').animate({
      'marginLeft': '0'
    });
  });
});

/* ====================== *
 *  Initiate Canvas       *
 * ====================== */
paper.install(window);
paper.setup(document.getElementById("canvas"));

// Paper JS Variables
var canvasWidth, 
    canvasHeight,
    canvasMiddleX,
    canvasMiddleY;

var shapeGroup = new Group();

var positionArray = [];

function getCanvasBounds() {
  // Get current canvas size
  canvasWidth = view.size.width;
  canvasHeight = view.size.height;
  canvasMiddleX = canvasWidth / 2;
  canvasMiddleY = canvasHeight / 2;
  // Set path position
  var position1 = {
    x: (canvasMiddleX / 2) + 100,
    y: 100, 
  };

  var position2 = {
    x: 200,
    y: canvasMiddleY, 
  };

  var position3 = {
    x: (canvasMiddleX - 50) + (canvasMiddleX / 2),
    y: 150, 
  };

  var position4 = {
    x: 0,
    y: canvasMiddleY + 100, 
  };

  var position5 = {
    x: canvasWidth - 130,
    y: canvasHeight - 75, 
  };

  var position6 = {
    x: canvasMiddleX + 80,
    y: canvasHeight - 50, 
  };
  
  var position7 = {
    x: canvasWidth + 60,
    y: canvasMiddleY - 50, 
  };
  
  var position8 = {
    x: canvasMiddleX + 100,
    y: canvasMiddleY + 100, 
  };

  positionArray = [position3, position2, position5, position4, position1, position6, position7, position8];
  };


/* ====================== *
 * Create Shapes          *
 * ====================== */
function initializeShapes() {
  // Get Canvas Bounds
  getCanvasBounds();

  var shapePathData = [
    'M231,352l445-156L600,0L452,54L331,3L0,48L231,352', 
    'M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z', 
    'M0,65l16,138l96,107l270-2L470,0L337,4L0,65z',
    'M333,0L0,94l64,219L29,437l570-151l-196-42L333,0',
    'M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z',
    'M389,352l92-113l195-43l0,0l0,0L445,48l-80,1L122.7,0L0,275.2L162,297L389,352',
    'M 50 100 L 300 150 L 550 50 L 750 300 L 500 250 L 300 450 L 50 100',
    'M 700 350 L 500 350 L 700 500 L 400 400 L 200 450 L 250 350 L 100 300 L 150 50 L 350 100 L 250 150 L 450 150 L 400 50 L 550 150 L 350 250 L 650 150 L 650 50 L 700 150 L 600 250 L 750 250 L 650 300 L 700 350 '
  ];

  for (var i = 0; i <= shapePathData.length; i++) {
    // Create shape
    var headerShape = new Path({
      strokeColor: 'rgba(255, 255, 255, 0.5)',
      strokeWidth: 2,
      parent: shapeGroup,
    });
    // Set path data
    headerShape.pathData = shapePathData[i];
    headerShape.scale(2);
    // Set path position
    headerShape.position = positionArray[i];
  }
};

initializeShapes();

/* ====================== *
 * Animation              *
 * ====================== */
view.onFrame = function paperOnFrame(event) {
  if (event.count % 4 === 0) {
    // Slows down frame rate
    for (var i = 0; i < shapeGroup.children.length; i++) {
      if (i % 2 === 0) {
        shapeGroup.children[i].rotate(-0.1);
      } else {
        shapeGroup.children[i].rotate(0.1);
      }
    }
  }
};

view.onResize = function paperOnResize() {
  getCanvasBounds();

  for (var i = 0; i < shapeGroup.children.length; i++) {
    shapeGroup.children[i].position = positionArray[i];
  }

  if (canvasWidth < 700) {
    shapeGroup.children[3].opacity = 0;
    shapeGroup.children[2].opacity = 0;
    shapeGroup.children[5].opacity = 0;
  } else {
    shapeGroup.children[3].opacity = 1;
    shapeGroup.children[2].opacity = 1;
    shapeGroup.children[5].opacity = 1;
  }
};