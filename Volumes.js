// Use the value below whenever you need the value //of Pi
const PI = 3.14159 ;

// //Sphere volume formula = (4/3)(pi)((radius)^3)
const sphereVolume = function (radius) {
  
    volume = (4/3)*PI*(radius*radius*radius);
    return volume;

}

 console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

 /*******/
// Cone volume formula = (1/3)(PI)(radius^2)(h)
const coneVolume = function (radius, height) {
  volume = (1/3)*PI*(radius*radius)*height;
  return volume;
}


console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

 /*******/
//Prism volume formula = (length)(width)(height)
const prismVolume = function (height, width, depth) {
  volume = height*width*depth;
  return volume;
}
console.log(prismVolume(3, 4, 5) === 60);