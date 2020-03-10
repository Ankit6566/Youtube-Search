var url="https://www.googleapis.com/youtube/v3/search?key=AIzaSyBlF18tOPAMKBDIgLMRECjH7le_YJ_En4M&type=video&part=snippet&maxResults=15&q="
var searchBox=document.querySelector('#Search-box')
var searchBtn=document.querySelector('#searchBtn')

searchBtn.addEventListener('click',event=>{
    var keyword=searchBox.value
    fetch(url+keyword)
    .then(response=>{
        return response.json()
    }).then(result=>{
        console.log(result);
        var array= result.items;
        console.log(array.length+1)
        showDetails(array);
    })
})
let showDetails=function(array){
          for(let i=0;i<array.length;i++){
                let element=document.createElement("p");
                element.innerHTML="this video is published at"+array[i].snippet.publishedAt;
                document.body.appendChild(element);
          }



}