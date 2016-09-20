var mainContent = document.getElementById("mainContent");
var addMusicBtn = document.getElementById("addMusic");
var listMusicBtn = document.getElementById("list-view");
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("What a Fool Believes > by the Doobie Brothers");
songs.push("Retro > by Childish Gambino");

var userSong = document.getElementById("user-song");
var userArtist = document.getElementById("user-artist");
var userAlbum = document.getElementById("user-album");
addMusicBtn.addEventListener("click", function(event){
	console.log(userSong.value);
	console.log(userArtist.value);
	console.log(userAlbum.value);
	var userInput = `${userSong.value} by ${userArtist.value} on ${userAlbum.value}`;
	songs.push(userInput);
	console.log(songs);
});

userAlbum.addEventListener("keypress", function(event){
	if (event.keyCode == 13){
		console.log(userSong.value);
		console.log(userArtist.value);
		console.log(userAlbum.value);
		var userInput = `${userSong.value} by ${userArtist.value} on ${userAlbum.value}`;
		songs.push(userInput);
		console.log(songs);
	}
});

function listMusic(){
	mainContent.innerHTML = "";
	var newSongs = songs.toString();
	console.log(newSongs);
	newSongs = newSongs.replace(/[>]/gi, "-");
	newSongs = newSongs.replace(/[*!(@]/gi, "");
	songSplit = newSongs.split(",");
	for (var song in songSplit) {
		mainContent.innerHTML += "<ul><li>" + songSplit[song] + "</li></ul>";
	}
};
listMusicBtn.addEventListener("click", function(event){
	listMusic();
});

listMusic();