let images = [
    "https://anmg-production.anmg.xyz/zalebs_ed37yMugxpguq4AnTk2KYQ24", 
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Lira_%28South_African_singer%29.jpg",
    "https://cdns-images.dzcdn.net/images/artist/da7fe3eed39f0fc0d5c49f9ad1661b00/500x500.jpg",
]

let num = 0  // index
const slider = document.getElementById("slider") // Getting imgage element

// NEXT IMAGE
function next(){
    num++ // Incrementing the index
    if(num >= images.length){
        num = 0
    }
    slider.src = images[num]  // Changing the src of an image
}

// PREV IMAGE
function prev(){
    num-- // decrement the index
    if(num < 0){
        num = images.length - 1
    }
    slider.src = images[num]
}

// setInterval(next, 1000)



