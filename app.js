function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return ( 
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)/2
    );
}

window.addEventListener("load", function (e) {
    
    var sections = document.getElementsByTagName('section');
    var videos = document.getElementsByTagName('video');

    for (var i = 0; i < videos.length; i++) {
        videos[i].addEventListener("playing", (e) => {
            e.currentTarget.isPlaying = true;
        });
        videos[i].addEventListener("pause", (e) => {
            e.currentTarget.isPlaying = false;
        });
    }

    for (var i = 0; i < sections.length; i++) {
        if (!isElementInViewport(sections[i])) {
            videos[i].style.opacity = 0;
        } else {
            videos[i].style.opacity = 1;
            if(!videos[i].isPlaying){
                videos[i].play();
            }
        }
    }

    window.addEventListener("scroll", function (e) {
        for (var i = 0; i < sections.length; i++) {
            

            if (!isElementInViewport(sections[i])) {
                videos[i].style.opacity = 0;
            } else {
                videos[i].style.opacity = 1;
                if(!videos[i].isPlaying){
                    videos[i].play();
                }
            }
        }
    });
});