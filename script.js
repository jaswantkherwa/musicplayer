


let pop_song_Left = document.getElementById('pop_song_left')
let pop_song_right = document.getElementById('pop_song_right')
let pop_song = document.getElementsByClassName('pop_song')[0]


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 100;
})
pop_song_Left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})
