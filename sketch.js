
let angle = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)  //畫方形以中心點為座標點
  noFill()  //方形不填入顏色
  angleMode(DEGREES)  //設定角度的單位0~360
  //frameRate(10)  //設定每秒進入draw()函數的次數
}

function draw() {
  background(0);  //背景顏色為黑色

  translate(width/2,height/2)  //把原點由視窗的左上角一道視窗的中心點
  stroke(255)  //線條的顏色
  //=============產生一個方形======================
  //rotate(angle) //把物件旋轉10度，以圓點作為旋轉的基準點
  //rect(0,0,600,600,100)  //畫一個方形，在視窗的中間，寬與高都為600
  //angle = sin(frameCount) * 100  //讓方形的旋轉角度為-100~100度的範圍內
  //=============產生十個方形，每個方形大小不一=================
  for(let i=0;i<10;i = i+1){
    //let r = random(50,255)  //抽一個亂數值，介於50(包含)與255(不包含)間的數字
    //let g = random(50,255)  //抽一個亂數值，介於50(包含)與255(不包含)間的數字
    //let b = random(50,255)  //抽一個亂數值，介於50(包含)與255(不包含)間的數字
    let r = map(sin(frameCount),-1,1,50,255)
    let g = map(sin(frameCount/2),-1,1,50,255)
    let b = map(sin(frameCount/4),-1,1,50,255)
    stroke(r,g,b)
    rotate(angle) //把物件旋轉10度，以圓點作為旋轉的基準點
    rect(0,0,600-i*3-mouseY/2,600-i*3-mouseY/2,100)  //畫一個方形，在視窗的中間，寬與高都為600
    angle = sin(frameCount) * (mouseX/20)  //讓方形的旋轉角度為-100~100度的範圍內
  }
}