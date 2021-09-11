var button = document.querySelector(".button");
var popupCloseButton = document.querySelector(".popupCloseButton");
button.addEventListener("click",function(){
    document.getElementsByClassName('popup')[0].classList.add("popup-active");
    document.getElementsByClassName("popupOverlay")[0].style.display = "block";
});

popupCloseButton.addEventListener("click", function(){
  document.getElementsByClassName('popup')[0].classList.remove("popup-active");
  document.getElementsByClassName("popupOverlay")[0].style.display = "none";
});



