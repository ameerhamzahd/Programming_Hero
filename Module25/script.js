// document.getElementsByTagName()
const allLi = document.getElementsByTagName('li');
console.log(allLi);

for(const li of allLi) {
    console.log(li);
}


// document.getElementById()
const secondSection = document.getElementById('second-section');
console.log(secondSection);
// css-style integrating using js
secondSection.style.textAlign = 'center';


// document.getElementsByClassName()
const allSectionTitles = document.getElementsByClassName('section-title');
console.log(allSectionTitles);


// document.querySelector()
const onlyLi = document.querySelector('#second-section li');
console.log(onlyLi);


// document.querySelectorAll()
const someLi = document.querySelectorAll('#second-section li');
console.log(someLi);
for(const li of someLi) {
    console.log(li);
}

for(const li of someLi) {
    console.log(li.innerText);
}


// appendchild() -> just a content
const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'list item-5';
secondList.appendChild(li);


// appendchild() -> overall section HTML
const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>section title-4</h1>
    <ul>
        <li>list item-1</li>
        <li>list item-2</li>
        <li>list item-3</li>
        <li>list item-4</li>
    </ul>
`
main.appendChild(section);