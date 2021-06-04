myFunction = () => {
    const birthDate = document.getElementById("bday").value

    if(birthDate == NaN){
        return;
    } else {
        const birthDay = parseInt(birthDate.substring(8, 10))
        const birthYear = parseInt(birthDate.substring(0, 4))
        const birthMonth = parseInt(birthDate.substring(5, 7))
    
        const date = new Date
    
        let b_day = false
    
        if(parseInt(date.getMonth())+1 == birthMonth && parseInt(date.getDate()) == birthDay){
            b_day = true
        }
    
        let age = parseInt(date.getFullYear()) - birthYear;
    
        if(parseInt(date.getMonth())+1 <= birthMonth && parseInt(date.getDate()) < birthDay){
            age--;
        }
    
        let Bday = b_day ? "Happy Birthday!!! " : ""
    
        document.getElementById('output').innerHTML = Bday + "You are " + age + " years old!"
    
        if(b_day)  {  
            document.getElementById("cake-svg").style.visibility="visible"
            var duration = 15 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
              return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function() {
              var timeLeft = animationEnd - Date.now();

              if (timeLeft <= 0) {
                return clearInterval(interval);
              }

              var particleCount = 50 * (timeLeft / duration);
              // since particles fall down, start a bit higher than random
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
        }

        document.getElementById("prompt").style.visibility = "hidden"
        document.getElementById("bday").style.visibility = "hidden"
        document.getElementById("myBtn").style.visibility="hidden"
        document.getElementById("reset").style.visibility="visible"

    }

}

myResetFunction = () => {
    document.getElementById("prompt").style.visibility = "visible"
    document.getElementById("bday").style.visibility = "visible"
    document.getElementById("myBtn").style.visibility="visible"
    document.getElementById("cake-svg").style.visibility = "hidden"
    document.getElementById("output").innerHTML = ""
    document.getElementById("reset").style.visibility="hidden"
}

