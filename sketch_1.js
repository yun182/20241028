
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
  //translate(width/2,height/2)  //把原點由視窗的左上角一道視窗的中心點
  for(let y=0;y<height;y = y+120){
     for(let x=0;x<width;x = x+120){
       push()  //重新設定格式(包含圓點位置，線條顏色)，要設定原點的位置在(x,y)上
         translate(x,y)  //把原點放在(x,y)上
         stroke(255)  //線條的顏色
         for(let i=0;i<10;i = i+1){
            let r = map(sin(frameCount),-1,1,50,255)
            let g = map(cos(frameCount/2),-1,1,50,255)
            let b = map(sin(frameCount/4),-1,1,50,255)
            stroke(r,g,b)
            rotate(angle) //把物件旋轉10度，以圓點作為旋轉的基準點
            rect(0,0,100-i*3,100-i*3,20)  //畫一個方形，在視窗的中間，寬與高都為600
            angle = sin(frameCount) * 20  //讓方形的旋轉角度為-100~100度的範圍內
          }
       pop() 
     }
    }
 }