const button = document.getElementById('addparagraph');
const contentDiv = document.getElementById('content')

button.addEventListener('click', function(){
    contentDiv.appendChild("<P>This is a new paragraph</P>")
})