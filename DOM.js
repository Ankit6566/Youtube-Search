var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBlF18tOPAMKBDIgLMRECjH7le_YJ_En4M&type=video&part=snippet&maxResults=15&q="
var searchBox = document.querySelector('#Search-box')
var searchBtn = document.querySelector('#searchBtn')
var nextBtn = document.querySelector("#next-btn");
var previousBtn = document.querySelector("#previous-btn");
let page = document.querySelector("#page-content");
let counter = 0;
let array;
let limit = 4;
let start=0;
searchBtn.addEventListener('click', event => {
    var keyword = searchBox.value;
    page.innerHTML = "";
    fetch(url + keyword)
        .then(response => {
            return response.json()
        }).then(result => {
            counter=0;
            start=0;
            console.log(result);
            array = result.items;
            showDetails(array);
        })
})

//let end;
//let temp;
let showDetails = function (array) {
    if(start+counter>=15)
    return;
    
    
    page.innerHTML = "";
    start += counter;
    counter=0;
    for (let i = start; i < start+limit&&i<15; i++) {
        counter++;
        //temp--;
        let card1 = document.createElement("div")
        card1.classList.add("card");
        //let card2=document.createElement("div");
        console.log(card1);
        let img = document.createElement("img");
        img.setAttribute("src", array[i].snippet.thumbnails.high.url);
        img.setAttribute("width", "100%");
        img.setAttribute("height", "260");
        img.setAttribute("alt", "thumbnails");
        card1.appendChild(img);
        let container = document.createElement("div");
        container.classList.add("container");
        let h1 = document.createElement("h1");
        let h4 = document.createElement("h4");
        h1.innerHTML = array[i].snippet.title;
        h4.innerHTML = array[i].snippet.publishedAt;
        container.appendChild(h1);
        container.appendChild(h4);
        let p = document.createElement("p");
        p.innerHTML = array[i].snippet.description;
        container.appendChild(p);
        card1.appendChild(container);
        let pagecontent = document.querySelector("#page-content");
        pagecontent.appendChild(card1);
    }
}

nextBtn.addEventListener('click', event => {
    showDetails(array);
})
previousBtn.addEventListener('click', event => {
    if(start<=0) return
    page.innerHTML = "";
     start -= limit;
     counter=0;
    // if(start==0)    return
    // page.innerHTML = "";
    for (let i = start; i < start+limit; i++) {
        counter++;
        let card1 = document.createElement("div")
        card1.classList.add("card");
        //let card2=document.createElement("div");
        console.log(card1);
        let img = document.createElement("img");
        img.setAttribute("src", array[i].snippet.thumbnails.high.url);
        img.setAttribute("width", "100%");
        img.setAttribute("height", "260");
        img.setAttribute("alt", "Loading");
        card1.appendChild(img);
        let container = document.createElement("div");
        container.classList.add("container");
        let h1 = document.createElement("h1");
        let h4 = document.createElement("h4");
        h1.innerHTML = array[i].snippet.title;
        h4.innerHTML = array[i].snippet.publishedAt;
        container.appendChild(h1);
        container.appendChild(h4);
        let p = document.createElement("p");
        p.innerHTML = array[i].snippet.description;
        container.appendChild(p);
        card1.appendChild(container);
        let pagecontent = document.querySelector("#page-content");
        pagecontent.appendChild(card1);



    }

})