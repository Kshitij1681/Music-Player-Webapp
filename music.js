const music=document.querySelector("audio");
const img= document.querySelector("#music_post");
const play=document.getElementById("play");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const next=document.getElementById("next");
const prev=document.getElementById("prev");

let progress=document.getElementById("progress");
let total_duration=document.getElementById("duration");
let current_time=document.getElementById("current_time");
let progress_div=document.getElementById("progress_div");

const songs =[{
    name:"hymn for the weekend",
    title:"hymn for the weekend",
    artist:"coldplay",
},
{
    name:"are you lonely",
    title:"are you lonely",
    artist:"steve aoki, alan walker, ISAK",
},
{
    name:"immortals",
    title:"immortals",
    artist:"fall out boy",
},
{
    name:"Mirandote",
    title:"Mirandote",
    artist:"rvfv",
},
{
    name:"Royalty",
    title:"royalty",
    artist:"neoni, egzod, maestro chives",
}]


let isplaying=false;

// for play function
const playMusic = ()=> {
    isplaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
    
};

//for pause function
const pauseMusic = ()=> {
    isplaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
   
};

play.addEventListener("click", ()=>{
   if (isplaying)
    pauseMusic();
    
   else 
     playMusic();
      
});

//changing the music
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="Music file/"+songs.name+".mp3";
    img.src="Music Images/"+songs.name+".jpg";
};

songIndex=0;

const nextSong=()=>{
    songIndex=(songIndex+1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong=()=>{
    songIndex=(songIndex-1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

//progress js work

music.addEventListener('timeupdate',(event)=>{
     

    
    const {currentTime,duration}=event.srcElement;
   let progress_time= (currentTime/duration) * 100;
    progress.style.width=`${progress_time}%`;

    
    //music duration update
    let min_duration=Math.floor(duration/60);
    let sec_duration=Math.floor(duration%60);
if(duration) {
    if (min_duration/10<1) {

      if(sec_duration/10<1) 
      total_duration.textContent=`0${min_duration}:0${sec_duration}`; 
   
      else
      total_duration.textContent=`0${min_duration}:${sec_duration}`; 
   }

   if(min_duration/10>1 && sec_duration/10>1) 
   total_duration.textContent=`${min_duration}:${sec_duration}`; 
}

//current duration update

let min_currentTime=Math.floor(currentTime/60);
let sec_currentTime=Math.floor(currentTime%60);

if(currentTime) {
if (min_currentTime/10<1) {

  if(sec_currentTime/10<1) 
  current_time.textContent=`0${min_currentTime}:0${sec_currentTime}`; 
  
  else
  current_time.textContent=`0${min_currentTime}:${sec_currentTime}`; 
}

if(min_currentTime/10>1 && sec_currentTime/10>1) 
current_time.textContent=`${min_currentTime}:${sec_currentTime}`; 
}


});

//if music ends, call nextSong function
music.addEventListener('ended',nextSong);

//progress onclick functionality
progress_div.addEventListener("click", (event)=>{
    
    const {duration}=music
    let move_progress= (event.offsetX / event.srcElement.clientWidth) * duration ;
    music.currentTime=move_progress;

});

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
