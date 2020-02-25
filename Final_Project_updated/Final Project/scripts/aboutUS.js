const navHamburger = document.querySelector('#navHamburger');
    navHamburger.addEventListener('click', (e) => {
        navHamburger.parentElement.classList.toggle('active');
    });
var my_canvas=document.getElementById("my_canvas");
var gctx = my_canvas.getContext("2d");

var data = [['Q1',110],['Q2',130],['Q3',150],['Q4',170],['Q5',190]];

var bar_width = 50;
var y_gap = 30;
var bar_gap = 75;
var x = 5;

y = my_canvas.height-y_gap;

my_canvas.width = data.length * (bar_gap) + x ;

gctx.moveTo(x-5,y);
gctx.lineTo(my_canvas.width,y);
gctx.stroke();

gctx.shadowColor = '#3D3D3D';
gctx.shadowOffsetX=3;
gctx.shadowOffsetY=3;
gctx.shadowBlur = 3;


for (i=0;i<data.length;i++){
    gctx.shadowColor = '#ffffff';
    gctx.font = '18px serif';
    gctx.textAlign ='left';
    gctx.textBaseline ='top';
    gctx.fillStyle = '#008cf5';
    gctx.fillText(data[i][0], x, y+5);

    gctx.beginPath();
    gctx.lineWidth = 2;
    y1=y-data[i][1];
    x1 = x;    
    gctx.font = '12px serif';
    gctx.fillStyle = '#3D3D3D';
    gctx.fillText(data[i][1], x1, y1-20);

    gctx.fillStyle = '#8D07F6';
    gctx.shadowColor = '#3D3D3D';
    gctx.fillRect(x1,y1,bar_width,data[i][1]);

    x = x + bar_gap;
}