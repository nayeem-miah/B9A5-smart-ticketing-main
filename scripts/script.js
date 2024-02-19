let count = 40;
const allSit = document.getElementsByClassName("sit");
for (const sit of allSit) {
  sit.addEventListener("click", function () {
    count = count - 1;
    if(count>=0){

        document.getElementById("sit-count").innerText = count;
    }
    else{
        alert('this buses sit fillap');
    }
    // console.log(count)
  });
}

let done = 0;
const sitDone = document.getElementsByClassName("sit");
for (const sit of sitDone) {
  sit.addEventListener("click", function (element) {
    done = done + 1;
     
    // const selectSit=document.getElementById()

    // const clickSit=document.getElementById('click-sit').innerText=sitName;

     setText("sit-done", done);
  });
}

function setText(id, value) {
  document.getElementById(id).innerText = value;
}




let sum=0;
const allBtn=document.getElementsByClassName('sit');
for (const btn of allBtn){
    btn.addEventListener('click',function handler(event){
        sum+=1;
        const sets=event.target.innerText;
        const types='economy';
        const price=550;
        showClassSeat('newSide',sets,types,price);
        
        if(sum <=4){
            
            event.target.classList.add('bg-green-400');
            
            calTotal('total-cost',price);

            grandTotal('grand-total',price);
            availableSit('sit-available');
            event.target.setAttribute("disabled",true);
            
        }
        else{
            if(sum === 5){
                alert('you sit is not allow');
            }
        }
        
        
    })
}




function start(){
    HideElementById('home');
    showElementById('sender');
    
}