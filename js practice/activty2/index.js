const button = document.getElementById("changeText");
const header = document.getElementById("header");

button.addEventListener('click', function(){
    header.innerHTML = "DOM is applied here!";
    header.style.backgroundColor = "green"
})
