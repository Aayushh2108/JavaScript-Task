document.addEventListener('DOMContentLoaded',() => {
    fetch('students.json')
    .then(response => response.json())
    .then(data => populateTable(data));
});

function populateTable(data){
const tableBody = document.getElementById('myTable').querySelector('tbody');

data.forEach(person =>{
    const row= document.createElement('tr');

    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    link.href ='#';
    link.textContent = person.name;
    link.onclick = () => showPopup(person);
    nameCell.appendChild(link);
    row.appendChild(nameCell);

    const classCell = document.createElement('td');
    classCell.textContent=person.class;
    row.appendChild(classCell);

    const rollNoCell = document.createElement('td');
    rollNoCell.textContent=person.rollNo;
    row.appendChild(rollNoCell);

    tableBody.appendChild(row);

    });
}

function showPopup(person){
    const popupContent = document.getElementById('popupContent');
    popupContent.innerHTML=`
    <b>Name:</b> ${person.name}<br>
    <b>Class:</b> ${person.class}<br>
    <b>Roll No:</b> ${person.rollNo}<br>
    <b>Address:</b> ${person.address}
    `;

    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.style.display='block';
    overlay.style.display = 'block';

}

function closePopup() {
    const popup = document.getElementById('popup');
    const overlay =document.getElementById('overlay');

    popup.style.display = 'none';
    overlay.style.display= 'none';

}