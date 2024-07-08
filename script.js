let btn = document.querySelector("#btn");



let  image  = "visible" ;


btn.addEventListener("click" , () => {
     if(image === "visible"){
      image = "hide";
       document.querySelector("div").style.display="none";
     }else{
      
        image = "visible";
        document.querySelector("div").style.display="block";
     }
    console.log(image);
});

function change() 
 {

    var button = document.getElementById("button-1");

    if (button.value == "click the button to hide the image") {
        
        button.value = "click the button to unhide the image";
        button.innerHTML = "click the button to unhide the image";
    }
    else {
        button.value = "click the button to hide the image";
        button.innerHTML = "click the button to hide the image";
    }

}