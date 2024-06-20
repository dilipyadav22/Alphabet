function speak(btn){
    var audio = document.getElementById("audio");
    var speaker = document.getElementById("active");
    var res = document.getElementById("result");

    if(btn == 'a') 
        {
            audio.src ="sound/a.mp3";
            res.style.display = "block";
            res.innerHTML ="Apple"

        }

    else if(btn == 'b')
        {
            audio.src = "sound/b.mp3";
            res.style.display = "block";
            res.innerHTML = "Ball";
        }

    else if(btn == 'c') 
        {
            audio.src = "sound/c.mp3";
            res.style.display = "block";
            res.innerHTML = "Cat"
        }

    else{
        alert("not found");
    }

    audio.play();

    speaker.style.opacity = '1';
    setTimeout(function(){
        speaker.style.opacity = '0.5'
        res.innerHTML = " ";
    },1000)

}

