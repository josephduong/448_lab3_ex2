document.addEventListener("DOMContentLoaded", () =>{
  let images = ["vase.jpg", "daisy.jpg", "grove.jpg", "poster.jpg", "prarie.jpg"];
  let photo = 0;

  document.querySelector("#next").addEventListener("click", (e)=>{
    if (photo < images.length - 1){
      photo = photo+1;
    }
    else {
      photo = 0;
    }
    document.getElementById("myImgId").src = images[photo];
  })
  document.querySelector("#prev").addEventListener("click", (e)=>{
    if (photo > 0){
      photo = photo -1;
    }
    else {
      photo = images.length - 1;
    }
    document.getElementById("myImgId").src = images[photo];
  })
})
