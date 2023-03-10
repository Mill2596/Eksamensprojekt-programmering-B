let stars;
let sun;
let planets = []
let planets_pic = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn1", "Uranus", "Neptune"]
let pictures = ["sun_icon", "mercury_icon", "venus_icon", "earth_icon", "mars_icon", "jupiter_icon", "saturn_icon", "uranus_icon", "neptune_icon"]


function preload() {
  for (let i = 0; i < planets_pic.length; i++ ){
    pictures[i] = loadImage("Pictures/" + planets_pic[i] + ".png")
  }
  stars = loadImage("Pictures/Stars.jpg")
}

function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  sun = new Sun(windowWidth/2, windowHeight/2) 
  planets = [
    new Planet(windowWidth/2, windowHeight/2, 1.95176, 1, 1, 0.0612 /*0.4*/),
    new Planet(windowWidth/2, windowHeight/2, 4.84144, 2, 20, 0.0149184 /*0.7*/),
    new Planet(windowWidth/2, windowHeight/2, 5.0968, 3, 40, 0.0161136 /*1*/),
    new Planet(windowWidth/2, windowHeight/2, 2.7116, 4, 60, 0.072432 /*1.5*/),
    new Planet(windowWidth/2, windowHeight/2, 55.9288, 5, 120, 0.086688 /*5.2*/),
    new Planet(windowWidth/2, windowHeight/2, 109.435392, 6, 180, 0.0519696 /*9.5*/),
    new Planet(windowWidth/2, windowHeight/2, 20.2896, 7, 200, 0.0307872 /*19.8*/),
    new Planet(windowWidth/2, windowHeight/2, 19.6976, 8, 220, 0.0339264/*30.1*/),
  ]
}

function draw() {
  image(stars,0,0,1368,761)
  for(let planet of planets){
    planet.show();
    planet.move();
  }
  sun.show();
}


