var sun = document.getElementsByClassName('sun')[0];
var path = new TimelineMax({repeat: -1});
  
path.to(sun, 38.8, 
{bezier:{type:'quadratic', 
values:[
{x:0, y:0},{x:650, y:0},{x:650, y:650},  
{x:650, y:750},{x:0, y:750},  
{x:-650, y:750},{x:-650, y:650},  
{x:-650, y:0},{x:0, y:0}]}
, ease:Linear.easeNone});

