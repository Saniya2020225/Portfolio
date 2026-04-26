const text = "Web Developer";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();

//Smooth Scrol for navbar//
document.querySelectorAll("nav ul li").forEach(item => {
    item.addEventListener("click",() => {
        const section = 
        item.innerText.toLowerCase();
        document.getElementById(section).scroll 
        IntoView({
            behavior:"smooth"
        });
    });
});

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    });
}

//Hire me button click//
document.querySelector("button").addEventListener("click",() => {
    alert("Thanks for visiting my portfolio!");
});