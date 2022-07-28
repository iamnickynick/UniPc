var cursor = document.getElementById("cursor");

document.onmousemove = function(e){
  cursor.style.left =(e.pageX - 50)+ "px";
  cursor.style.top = (e.pageY - 50)+ "px";
  cursor.style.display ="block";
 }
 // product details
 var productImg=document.getElementById("productImg");
 var smallImg=document.getElementsByClassName("smallImg");

      smallImg[0].onclick = function()
      {       productImg.src = smallImg[0].src;
      }
      smallImg[1].onclick = function()
      {       productImg.src = smallImg[1].src;
      }
      smallImg[2].onclick = function()
      {       productImg.src = smallImg[2].src;
      }
      smallImg[3].onclick = function()
      {       productImg.src = smallImg[3].src;
      }
