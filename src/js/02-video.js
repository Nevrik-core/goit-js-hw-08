    import throttle from 'lodash.throttle';
    import Player from '@vimeo/player';
    
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function(data) {
       
        localStorage.setItem("videoplayer-current-time", data.seconds);
    });

  player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0);

player.on('timeupdate', throttle(onPlay,1000));