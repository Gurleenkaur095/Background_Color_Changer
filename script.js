const button = document.querySelectorAll(".box")
const body = document.querySelector("body")

// for each is a method which takes callback function as an argument and can also aplied to arrays
button.forEach(function(box){
    box.addEventListener("click",function(color){
        if(color.target.id === "box1"){
            // you have specfify the body whose color you want to change and style becz of css then property backgroundColor
            body.style.backgroundColor="rgb(235, 103, 103)"
        }
        if(color.target.id === "box2"){
            body.style.backgroundColor="rgba(124, 177, 124, 0.856)"
        }
        if(color.target.id === "box3"){
            body.style.backgroundColor="rgb(101, 101, 193)"
        }
        if(color.target.id === "box4"){
            body.style.backgroundColor="rgb(235, 235, 106)"
        }
        if(color.target.id === "box5"){
            body.style.backgroundColor="rgb(209, 82, 209)"
        }
    })
})