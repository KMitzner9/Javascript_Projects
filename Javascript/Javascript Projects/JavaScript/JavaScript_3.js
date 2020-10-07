
//create a function that uses HTML data attributes
function displayType(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert(animal.innerHTML + " is a " + animalType + "!");
}