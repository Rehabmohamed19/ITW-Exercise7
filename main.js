let data = [{
    title : "Card title",
    cardDesc  : "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title : "Card title",
    cardDesc  : "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title : "Card title",
    cardDesc  : "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title : "Card title",
    cardDesc  : "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },


];

const container=document.createElement("div")
container.className="container"

const row3=document.createElement("div");
row3.className="row gy-3";

for (let i = 0; i < data.length; i++) {
  
  const row2=document.createElement("div")
  row2.className="row-container"
    
const cardBody=document.createElement("div")
cardBody.className="card-body col-md-4 d-flex bg-primary text-white align-items-center gap-5 mx-3 p-3 rounded"

const textWrapper=document.createElement("div")
textWrapper.className="text-wrapper col-md-5"

const cardTitle=document.createElement("h5")
cardTitle.className="card-title"

const cardText=document.createElement("p")
cardText.className="card-text"

const btnWrapper=document.createElement("div")
btnWrapper.className="btn-wrapper col-md-5"

const btn=document.createElement("button")
btn.className="btn btn-danger"
btn.innerText="Delete"

document.body.append(container)
container.append(row3);
row3.append(row2);
row2.append(cardBody)
cardBody.append(textWrapper)
textWrapper.append(cardTitle)
textWrapper.append(cardText)
cardBody.append(btnWrapper)
btnWrapper.append(btn)

cardTitle.innerText=`${data[i].title}`;
cardText.innerText=`${data[i].cardDesc}`;
    
}


const btns = document.querySelectorAll('.btn');
const parentRow = document.querySelectorAll('.row-container');
const removedCard = document.querySelectorAll('.card-body');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        parentRow[i].removeChild(removedCard[i]);
        console.log("hi")
    });
    
    
}



function changeToBlue() {
  let orange=document.querySelectorAll(".bg-warning.card-body")
  for (let i = 0; i < orange.length; i++) {
    orange[i].classList.remove("bg-warning")
    orange[i].classList.add("bg-primary")  
  }
  
}
function changeToOrange() {
  let blue=document.querySelectorAll(".bg-primary.card-body")
    for (let a = 0; a < blue.length; a++) {
      blue[a].classList.remove("bg-primary")
      blue[a].classList.add("bg-warning")  
    }
  
    }





















