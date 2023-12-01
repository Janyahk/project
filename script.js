let progress=document.getElementById("progress");
var song=document.getElementById("song");
var icon=document.getElementById("play");
// Set the maximum value and initial value of the progress bar
song.onloadedmetadata=function(){
progress.max=song.duration;
progress.value=song.currentTime;
}
// Define click event for the play/pause button
icon.onclick=function(){
     // Check if the song is paused
    
    if(song.paused){
        // If paused,play the song and change the icon to pause
        song.play();
        icon.src="photo/pausee.png";
    }
    else{
         // If playing,pause the song and change the icon to play
        song.pause();
        icon.src="photo/play.png";
    }

}
// Check if the song is playing and update the progress bar continuously
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}
// Define change event for the progress bar
progress.onchange=function(){
     // Play the song, set the current time to the progress value, and change the icon to pause
   song.play();
   song.currentTime=progress.value; 
   icon.src="photo/pausee.png";
}