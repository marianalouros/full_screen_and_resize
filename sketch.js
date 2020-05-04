let pointSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pointSize = windowWidth / 600.0; 

/*

Com a variavel pointSize, garantimos a proporção dos objetos que criamos em relação ao tamanho da janela

Ou seja, neste caso, se o tamanho da janela for 600px, o circulo vai medir 150. Mas se a janela for 1200px, o circulo vai medir 300 (1200/600=2, 150*2=300)

*/
}

function draw() {
  background(176, 248, 255);
  translate(windowWidth/2, windowHeight/2); //o que quer que eu desenhe é sempre a partir do centro do ecrã
  fill (255);
  noStroke();
  ellipse (0, 0, 150 * pointSize, 150 * pointSize); //0,0 - distância a partir do centro
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pointSize = windowWidth / 600.0;
}