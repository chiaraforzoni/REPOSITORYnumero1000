/*testo introduttivo:
Dresda
The Fourteenth of February, 1945
In the ending of World War II, Allied bombers from the Britain and U.S.A. conducted a major bombing raids on the  German city of Dresden. 
On the night of February 13 1945, more than 1,200 heavy bombers dropped nearly 4,000 tons of high-explosive and incendiary bombs on the city.
Around 25,000 people were killed in the bombings and the firestorm that raged afterward and all the city was destroyed. 
Significant questions about the legitimacy of the targets destroyed have led to years of debate about whether the attack should be labeled a war crime.
But can we image the quantity of those bombs and victims?
Press the start button to experience
*/

var pointillismAreaHeight = window.innerHeight/2.81, //a schermo interno è il punto dove tocca l'orizzonte
    points = [],
    xPosCorrectionScale = 1,
    pointSizeRange = [5, 10];

//
//var pointillismAreaHeight = 540, //a schermo interno è il punto dove tocca l'orizzonte
//    points = [],
//    xPosCorrectionScale = 1,
//    pointSizeRange = [5, 10];

var t;
var moon;
var bombs = [],
    //frameRate = (300), //non funziona, per velocizzare per fare le scie omogenee
    bombSpeed = 4,
    xPosCorrectionScale = 1;
var s = second();
var clicks = 0;



//var skylineHeight = windowHeight/2-40;
//var newSHeight = windowWidth*1530/2048;
//per cercare di non scrivere ogni volta la formula sulle stringhe di comando dello skyline ma se la applico non funziona//windowWidth*1530/2048

function preload() {
dresda = loadImage("assets/citta1ex.png");
dresda2 = loadImage("assets/citta2.png");
dresda3 = loadImage("assets/citta3.png");
dresda4 = loadImage("assets/citta4.png");
dresda5 = loadImage("assets/citta5.png");
dresda6 = loadImage("assets/citta6.png");
dresda7 = loadImage("assets/citta7.png");
moon = loadImage("assets/moon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 initWidth = windowWidth;
    
    
    }


function draw() {

    
imageMode(CENTER);

    //image(dresda, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    
    if(bombs.length < 10) {
        //backgroundImage(dresda)
        image(dresda, windowWidth/2, windowHeight/2, windowWidth, windowWidth/2);

    }
  if( bombs.length > 10 ) {
        //backgroundImage(dresda)
        image(dresda2, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048)
        
    }
    if(bombs.length > 200) {
        //backgroundImage(dresda)
        image(dresda3, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    if(bombs.length > 300) {
        //backgroundImage(dresda)
        image(dresda4, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    if(bombs.length > 400) {
        //backgroundImage(dresda)
        image(dresda5, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
     if(bombs.length > 500) {
        //backgroundImage(dresda)
        image(dresda6, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }   
    if(bombs.length > 600) {
        //backgroundImage(dresda)
        image(dresda7, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    
    //bombs
    //iterate on the array
    
    
  //IL TUO CODICE PER LE BOMBE
    
//  for(var i=0; i< bombs.length; i++) {
//    // Increase the single bomb y position
//    bombs[i].y+=5;
//    
//    // Create a new ellipse using the x and y properties of the bomb object
//    ellipse(bombs[i].x, bombs[i].y, 4,10);
//    
//  if (bombs[i].y > height- pointillismAreaHeight) { 
//    fill(255,0,0)
//    noStroke();
//    ellipse(bombs[i].x, windowHeight, bombs[i].size);
//    //bombs.splice(i,7);
//    
//   } else {
//        fill(bombs[i].color),
//        noStroke();
//        
//      }
//  }
    
 //IL MIO CODICE PER LE BOMBE
    
    for (var i = 0; i < bombs.length; i++) {
        if (bombs[i].y > height - pointillismAreaHeight) {
            var bomb = bombs[i];
            ellipse(bombs[i].x, bombs[i].y,50,50);
            bombs[i].y+=20;
            
            if (!points[i]) {
                points[i] = {
                    x: random(0, width),
                    y: random(height - pointillismAreaHeight, height),
                    size: random(pointSizeRange[0], pointSizeRange[1]),
                    color: "255",
                }
            }

            fill(bomb.color); //esplosioni
            noStroke();
            ellipse(bomb.x * xPosCorrectionScale, height - pointillismAreaHeight, bomb.size);
        } else {
            //scie
            fill(bombs[i].color);
            noStroke();
            ellipse(bombs[i].x * xPosCorrectionScale, bombs[i].y,10);
            bombs[i].y += bombSpeed;
        }
    }
    
//    var newColor = lerpColor(randomColor(), color(255, 255, 255), 0.5);
//                // tone to red
//                bomb.color = lerpColor(newColor, color(255, 0, 0), random(0.5, 1));
//                // random size
//                bomb.size = random(explodedBombsSizeRange[0], explodedBombsSizeRange[1]);
//            }
    
if (!points[i]) {
                points[i] = {
                    x: random(0, width),
                    y: random(height - pointillismAreaHeight, height),
                    size: random(pointSizeRange[1], pointSizeRange[2]),
                    color: "255",
                }
            }
var s = second();
var s = second() + 3
image(moon,  width/6 + s, height/3 - s, 70, 70);


  noStroke();
  fill(255);
  textSize(20);
  text("Victims",1340 , 80);
  textSize(18);
 
  
    
  noStroke();
  fill(255);
  textSize(20);
  text("Time",1335,50);
  textSize(18);
  text(s,1310,50);

//schermata finale dopo 650 bombe (da eliminare)
//if (bombs.length > 650) {
//        noStroke();
//        fill(0, 0, 0);
//        rect(0, 0, windowWidth, windowHeight);
//        textSize(32);
//        fill(250);
//        textAlign(CENTER);
//        text("Remember dresda", windowWidth / 2, windowHeight / 2);
//    }

  //text(frameCount, width/2, height/2);
    if (frameCount > 1500){ //cambiare il 100
        fill(5);
        noStroke();
        rect(0, 0, windowWidth, windowHeight);
        textSize(62);
    fill(255);
    textAlign(CENTER);
    text("REMEMBER DRESDA", width/2, height/2);
    t(0 ,1);
    }  
    drawPointillism();
}

function mousePressed() {
  //add 1 to variable clicks
  clicks ++;
}


function mouseReleased() {
  var newx = random()*width;
  var newSize = random(3,8);
  var newColor;
    var myRandom = random(0,1);
    if (myRandom <= 0.5) {
        newColor = color('#E52B50'); //colore scie
    } else {
        newColor = color('#A51800');
    }
    var obj = {x: newx, y: 0, size: newSize, color: newColor};
    bombs.push(obj);

    if (bombs.length > maxBombsCount) {
        bombs.shift();
    }

}

function drawPointillism() {
    // draw rect
    noStroke();
    fill(100);
    rect(0, height - pointillismAreaHeight, width, pointillismAreaHeight);

    // draw point
    for (var i in points) {
        var point = points[i];
        fill(10);
        noStroke();
        ellipse(point.x * xPosCorrectionScale, point.y, point.size);
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  xPosCorrectionScale = windowWidth / initWidth;
  }



    