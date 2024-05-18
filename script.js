console.log("Welcome to Spotify");


let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName:"Pyaar Ho" , filePath:"songs/1.mp3", coverPath:'cover/1.jpg'},
    {songName:"Awaaj Do Humko" , filePath:"songs/2.mp3", coverPath:'cover/2.jpg'},
    {songName:"Baahon Me Chale Aao" , filePath:"songs/3.mp3", coverPath:'cover/3.jpg'},
    {songName:"Chunari Chunari" , filePath:"songs/4.mp3", coverPath:'cover/4.jpg'},
    {songName:"Raatan Lambiyaan" , filePath:"songs/5.mp3", coverPath:'cover/5.jpg'},
    {songName:"Radhaa" , filePath:"songs/6.mp3", coverPath:'cover/6.jpg'},
    {songName:"Tera yaar Hoon Main" , filePath:"songs/7.mp3", coverPath:'cover/7.jpg'},
    {songName:"Tum Kya Mile" , filePath:"songs/8.mp3", coverPath:'cover/8.jpg'},
    {songName:"Tere Hawaale" , filePath:"songs/9.mp3", coverPath:'cover/9.jpg'},
    {songName:"Zindagi Bata De" , filePath:"songs/10.mp3", coverPath:'cover/10.jpg'},
    

]

songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


})
//audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity=1;
    }
    else{
        audioElement.pause();
      masterPlay.classList.add('fa-play-circle');
      masterPlay.classList.remove('fa-pause-circle');
      gif.style.opacity=0;

    }
})

    audioElement.addEventListener('timeupdate', ()=>{
    
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})