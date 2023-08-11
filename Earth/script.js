const $climate = document.getElementById("climate")
const $consumption = document.getElementById("consumption")
const $resources = document.getElementById("resources")
const $people = document.getElementById("people")
$climate.onclick = () =>{
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    document.body.style.backgroundSize = "100% 100%"
    $climate.style.backgroundColor ="#2F80ED"
    $consumption.style.backgroundColor="transperent"
    $resources .style.backgroundColor="transperent"
    $people.style.backgroundColor="transperent"
    document.getElementById("save").innerHTML = "Do your bit! Save trees, use renewable energy soureces and prefer to travel green"
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}
$consumption.onclick = () =>{
    document.body.style.background = "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)"
    document.body.style.backgroundSize = "100% 100%"
    $climate.style.backgroundColor ="transperent"
    $consumption.style.backgroundColor="#2F80ED"
    $resources .style.backgroundColor="transperent"
    $people.style.backgroundColor="transperent"
    document.getElementById("save").innerHTML = "Do your bit! Save food, use renewable energy soureces and prefer to travel green"
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}

$resources.onclick = () =>{
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    document.body.style.backgroundSize = "100% 100%"
    $climate.style.backgroundColor ="transperent"
    $consumption.style.backgroundColor="transperent"
    $resources .style.backgroundColor="#2F80ED"
    $people.style.backgroundColor="transperent"
    document.getElementById("save").innerHTML = "Do your bit! Save resources, use renewable energy soureces and prefer to travel green"
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}
$people.onclick = () =>{
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    document.body.style.backgroundSize = "100% 100%"
    $climate.style.backgroundColor ="transperent"
    $consumption.style.backgroundColor="transperent"
    $resources .style.backgroundColor="transperent"
    $people.style.backgroundColor="#2F80ED"
    document.getElementById("save").innerHTML = "Do your bit! Save people, use renewable energy soureces and prefer to travel green"
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

}