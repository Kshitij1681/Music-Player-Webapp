const music=document.querySelector("audio");
const img= document.querySelector("img");
const play=document.getElementById("play");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const next=document.getElementById("next");
const prev=document.getElementById("prev");

const songs =[{
    name:"hymn for the weekend",
    title:"hymn for the weekend",
    artist:"coldplay",
},
{
    name:"are you lonely",
    title:"are you lonely(feat. ISAK)",
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


isplaying=false;

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
    play.classList.replace("fa-pause","fa-play",);
    img.classList.remove("anime");
};

play.addEventListener("click", ()=>{
    isplaying ? pauseMusic() : playMusic();

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

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
