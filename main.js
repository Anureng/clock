setInterval(function (){
  d=new Date()
  htime=d.getHours();
  hminute=d.getMinutes();
  hsecond=d.getSeconds();
  hrotate=30*htime + htime/2;
  mrotate=6*hminute;
  srotate=6*hsecond;
  
  
  hours.style.transform=`rotate(${hrotate}deg)`;
  minutes.style.transform=`rotate(${mrotate}deg)`;
  second.style.transform=`rotate(${srotate}deg)`;
  
  
},1000)
