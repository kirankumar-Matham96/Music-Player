// /**
//  * on clicking the latest release songs, respective song playing ribbon will appear at the bottom of the page.
//  */
// const latestSong1 = document
//   .querySelector("#latest-releases-song-1>img")
//   .addEventListener("click", () => {
//     document.querySelector("#music-playing-ribbon-1").style.display = "flex";
//     document.querySelector("#music-playing-ribbon-2").style.display = "none";
//     document.querySelector("#music-playing-ribbon-3").style.display = "none";
//     document.querySelector("#music-playing-ribbon-4").style.display = "none";
//   });

// const latestSong2 = document
//   .querySelector("#latest-releases-song-2>img")
//   .addEventListener("click", () => {
//     document.querySelector("#music-playing-ribbon-1").style.display = "none";
//     document.querySelector("#music-playing-ribbon-2").style.display = "flex";
//     document.querySelector("#music-playing-ribbon-3").style.display = "none";
//     document.querySelector("#music-playing-ribbon-4").style.display = "none";
//   });

// const latestSong3 = document
//   .querySelector("#latest-releases-song-3>img")
//   .addEventListener("click", () => {
//     document.querySelector("#music-playing-ribbon-1").style.display = "none";
//     document.querySelector("#music-playing-ribbon-2").style.display = "none";
//     document.querySelector("#music-playing-ribbon-3").style.display = "flex";
//     document.querySelector("#music-playing-ribbon-4").style.display = "none";
//   });

// const latestSong4 = document
//   .querySelector("#latest-releases-song-4>img")
//   .addEventListener("click", () => {
//     document.querySelector("#music-playing-ribbon-1").style.display = "none";
//     document.querySelector("#music-playing-ribbon-2").style.display = "none";
//     document.querySelector("#music-playing-ribbon-3").style.display = "none";
//     document.querySelector("#music-playing-ribbon-4").style.display = "flex";
//   });

// /**
//  * play or pause the song from the ribbon
//  */
// // getting the play and pause elements
// const play = document.querySelector(".play");
// const pause = document.querySelector(".pause");

// // adding the class to hide the play button initially
// play.classList.add("display-none");

// // to toggle the play and pause buttons
// pause.addEventListener("click", () => {
//   if (!pause.classList.contains("display-none")) {
//     pause.classList.add("display-none");
//     play.classList.remove("display-none");
//   } else {
//     pause.classList.remove("display-none");
//     play.classList.add("display-none");
//   }
// });

// play.addEventListener("click", () => {
//   if (!play.classList.contains("display-none")) {
//     play.classList.add("display-none");
//     pause.classList.remove("display-none");
//   } else {
//     pause.classList.add("display-none");
//     play.classList.remove("display-none");
//   }
// });
