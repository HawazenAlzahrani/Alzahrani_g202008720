function addTask(){

    const h2Elements = document.createElement('h2')
    var inputVal = document.getElementById("myInput").value;
    h2Elements.innerHTML = inputVal;
    
    const thirdDiv = document.querySelector('.container')

    thirdDiv.appendChild(h2Elements)

}