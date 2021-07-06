
//Part One ===========================================================

//1. Strike function
function strikeStyle() {
    
    const liElement = document.querySelector('li');
    liElement.style.textDecoration = 'line-through'; 

}

//2. Function Call
strikeStyle();

//3. Images function
function imageArea(id, url) { 
    
    const image = document.getElementById(id);
    image.src = url; 

}

//4. Images Function Call
imageArea("image-1", 'https://upload.wikimedia.org/wikipedia/commons/0/07/FoosDublin210819-2_%2848620472807%29_%28cropped%29.jpg');
imageArea("image-2", 'https://upload.wikimedia.org/wikipedia/en/f/fc/Gorillaz_Song_Machine_Promo_Art.jpg');
imageArea("image-3", 'https://upload.wikimedia.org/wikipedia/commons/b/b5/SOADJONESBEACH.jpg');

//5. Argument li removal
function removeFirst() { 
    const firstLi = document.querySelector('#arguments li');
    firstLi.remove(); 
}

//6. Call removal//Doesn't work when called only twice
removeFirst();
removeFirst();

//7. Font size function
function fontSize(size, id) { 

    const newId = document.getElementById(id); 
    newId.style.fontSize = size; 

}

//8. Call font size
fontSize('60px', "heading");

//Part 2 ===============================================================

//1. Create element //Not working :(

function elementAppend(domElement) {
    const argumentsUl = document.querySelector("#arguments");
    argumentsUl.appendChild(domElement);
}

//2. Image
const imgArd = document.createElement('IMG');
imgArd.src = 'https://upload.wikimedia.org/wikipedia/en/b/b3/Ardbeg_sign.jpg';

//Call create element function 
elementAppend(imgArd);

//3. Image resize function
function resize(imageElement) {

    imageElement.style.height = '30px';

}

//4. Image query and resize function call
const image1 = document.getElementById('image-1');
resize(image1);

//5. Function to add invisible class
function invisible(elem) {

    elem.classList.add("invisible");

}

//6. Element quary and invisible function call
const heading = document.getElementById('heading');
invisible(heading);

//Part 3 =============================================================

//1. New <li> function
function newListitem(string) {

    const newLi = document.createElement('li');
    newLi.innerText = string;
    return newLi

}

//2. New li call
const testLi = newListitem('this is a new list item');
elementAppend(testLi);

//3. New heading
function  createHeader(size, string) {

    const tagName = 'h' + size;
    const newHeader = document.createElement(tagName);
    newHeader.innerText = string;
    return newHeader;

}

//4. New Header call
const testHeader = createHeader('3','This is a new Header');
elementAppend(testHeader);

