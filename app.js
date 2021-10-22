

const toggleColor = () =>{
    const targetNode = document.body;//Referencing the target node in a variable
    const hexBody = (Math.random() * 0xfffff * 1000000).toString(16); //Generating a random number ad converting it to hex
    document.getElementById("hexcode").innerHTML = ('#' + hexBody.slice(0,6));
    return targetNode.style.backgroundColor = ('#' + hexBody.slice(0,6)); //Attachin the hex to the created background-color property
    
}



console.log(toggleColor())


