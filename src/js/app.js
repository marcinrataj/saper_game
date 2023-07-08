const elements = document.querySelector("#elements")
const pointsElements = document.querySelector("#points")
const message = document.querySelector("#message")

let points = 0;

function selectElement(e){
  const td = e.target.closest('td');
  e.target.classList.add('show')

  if(td.dataset.points){
    points += Number(td.dataset.points);
    pointsElements.innerText = points;
  }

  if(td.dataset.isBomb){
    message.innerHTML = 'Koniec Gry'
  }

  if(points >= 150){
    message.innerHTML = 'Wygrałeś'
  }
}

elements.addEventListener("click", selectElement)

