console.log("this fuckin peice is made by Aditya Singh");

let closebtn = document.querySelector(".closeBtn");
let sidebar = document.querySelector(".sidebar");
let btnName = document.querySelectorAll('.btnName');
let menu_btn = document.querySelector(".menu");
console.log(btnName);

let socialBtn = document.querySelectorAll(".s-btn");
console.log(socialBtn);





function displayNone (arr, value){
    arr.forEach(element => {
        element.style.display = value;
    });
}







closebtn.addEventListener("click", function(){
    sidebar.style.width = "50px";
    menu_btn.style.display = "flex";
    closebtn.style.display = "none";
    document.querySelector("#codesmasher").style.display = "none";



    btnName.forEach(element => {
        element.style.opacity = "0";
        element.style.transition = "opacity";
        element.style.transitionDuration = "0.3s";

        
    });

    displayNone(socialBtn, "none");
})


menu_btn.addEventListener("click", function(){
    sidebar.style.width = "300px";
    closebtn.style.display = "block"
    document.querySelector("#codesmasher").style.display = "block";
    menu_btn.style.display = "none";
    

    btnName.forEach(element => {
        element.style.opacity = "1";
        element.style.transition = "opacity";
        element.style.transitionDuration = "1s";

    });

    displayNone(socialBtn, "block")
})


