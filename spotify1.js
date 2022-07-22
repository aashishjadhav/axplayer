console.log("welcome to spotify");

//initializes the variables
let songIndex=0;
let audioElement=new Audio('mydocs/2.mpeg');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gift');
//let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Blinding lights",filePath: "mydocs/1.mpeg",coverPath: "mydocs/cover1.jpg"},
    {songName: "Bahana",filePath: "mydocs/2.mpeg",coverPath: "mydocs/cover2.jpeg"},
]

/*/songItem.forEach((element)=>{
  console.log(element,i);
  element.getElementsByTagName("img")[0].src=songs[if].filePath;
})*/

//audioElement.play();


//Handlle play/ pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTimeM<=0)
      {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

      }

      else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity=0;
      }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})