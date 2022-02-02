const metaData = {
    id: 1,
    songName: "I Spend Too Much Time",
    artistName: "Ben Kessler",
    price: 0.3,
    createTime: "22:00:58",
    artistAddress: "0xascibaouhqe9qev7qe",
    currentOwnerAddress: "0xascibaouhqe9qev7qe",
    onSale: true,

    Hashes: {
        imgHash: "data:image/jpeg;base64,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",
        songHash: undefined,
        descHash: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typ",
        lyricsHash: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typ",
    },

    Sales: {
        previousOwners: ["0xascibaouhqe9qev7qe","0xascibaouhqe8qevsqe"],
        previousPrices: [0.005, 0.9],
        previousSaleTimes: ["10:25:55", "05:45:45"],
    },

    Links: {
        spotify: "www.spotify.com",
        appleMusic: "www.applemusic.com",
        amazonMusic: "www.amazon.com",
        youtubeMusic: "www.youtube.com",
    },

    Characteristics: {
        genre: "Slow & Relaxing",
        instruments: ["Drums", "Piano","Violin", "Flute"],
        typeOfLyrics: "Rhyme",
        songType: "Literal",
        frequency: "Bass heavy",
        instrumentType: "Digital",
        sampleBased: false,
    }
};

export default metaData;

/*
    const musicContainer = document.getElementById('music-container');
    const playBtn = document.getElementById('play');

    const audio = document.getElementById('audio');
    const progress = document.getElementById('progress');
    const progressContainer = document.getElementById('progress-container');
    const currTime = document.querySelector('#currTime');
    const durTime = document.querySelector('#durTime');

    // Play song
    function playSong() {
        musicContainer.classList.add('play');
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');

        audio.play();
    }

    // Pause song
    function pauseSong() {
        musicContainer.classList.remove('play');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        playBtn.querySelector('i.fas').classList.remove('fa-pause');

        audio.pause();
    }

    // Update progress bar
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }

    // Set progress bar
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;

        audio.currentTime = (clickX / width) * duration;
    }

    //get duration & currentTime for Time of song
    function DurTime (e) {
        const {duration,currentTime} = e.srcElement;
        var sec;
        var sec_d;

        // define minutes currentTime
        let min = (currentTime==null)? 0:
        Math.floor(currentTime/60);
        min = min <10 ? '0'+min:min;

        // define seconds currentTime
        function get_sec (x) {
            if(Math.floor(x) >= 60){
                
                for (var i = 1; i<=60; i++){
                    if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
                        sec = Math.floor(x) - (60*i);
                        sec = sec <10 ? '0'+sec:sec;
                    }
                }
            }else{
                sec = Math.floor(x);
                sec = sec <10 ? '0'+sec:sec;
            }
        } 

        get_sec (currentTime,sec);

        // change currentTime DOM
        currTime.innerHTML = min +':'+ sec;

        // define minutes duration
        let min_d = (isNaN(duration) === true)? '0':
            Math.floor(duration/60);
        min_d = min_d <10 ? '0'+min_d:min_d;


        function get_sec_d (x) {
            if(Math.floor(x) >= 60){
                
                for (var i = 1; i<=60; i++){
                    if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
                        sec_d = Math.floor(x) - (60*i);
                        sec_d = sec_d <10 ? '0'+sec_d:sec_d;
                    }
                }
            }else{
                sec_d = (isNaN(duration) === true)? '0':
                Math.floor(x);
                sec_d = sec_d <10 ? '0'+sec_d:sec_d;
            }
        } 

        // define seconds duration
        
        get_sec_d (duration);

        // change duration DOM
        durTime.innerHTML = min_d +':'+ sec_d;
    };

    // Event listeners
    playBtn.addEventListener('click', () => {
        const isPlaying = musicContainer.classList.contains('play');

        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    // Time/song update
    audio.addEventListener('timeupdate', updateProgress);

    // Click on progress bar
    progressContainer.addEventListener('click', setProgress);

    // Time of song
    audio.addEventListener('timeupdate',DurTime);
*/