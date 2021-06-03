
myFunction = () => {
    const birthDate = document.getElementById("b-day").value

    const birthDay = parseInt(birthDate.substring(8, 10))
    const birthYear = parseInt(birthDate.substring(0, 4))
    const birthMonth = parseInt(birthDate.substring(5, 7))

    const date = new Date

    let bday = false

    if(parseInt(date.getMonth())+1 == birthMonth && parseInt(date.getDate()) == birthDay){
        bday = true
    }

    let age = parseInt(date.getFullYear()) - birthYear;

    if(parseInt(date.getMonth())+1 <= birthMonth && parseInt(date.getDate()) < birthDay){
        age--;
    }

    let Bday = bday ? "Happy Birthday!!! " : ""

    document.getElementById('output').innerHTML = Bday + "You are " + age + " years old."

    if(bday)  {  
        document.getElementById("cake-svg").style.visibility="visible";
    }

}
