

function showClassSeat(elementId, section, seatType, price){
    const element = document.getElementById(elementId);
    const div = document.createElement('div');

    div.classList.add('grid');
    div.classList.add('grid-cols-3');
    const p= document.createElement('p');
    p.innerText=section;

    const p2=document.createElement('p');
    p2.innerText=seatType;
    const p3=document.createElement('p');
    p3.innerText=price;
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    element.appendChild(div);
}

function calTotal(elementId,price){
    const element=document.getElementById(elementId);
    let cost =parseInt(element.innerText)+parseInt(price);
    document.getElementById(elementId).innerText = parseInt(cost);
}
function grandTotal(elementId,price){
    const element=document.getElementById(elementId);
    let total =parseInt(element.innerText)+parseInt(price);
    document.getElementById(elementId).innerText = parseInt(total);
}







// hide and show part
function HideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');


}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}