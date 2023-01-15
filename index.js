let clicked = 0;
const Cities = ['London', 'New York', 'Las Vegas', 'Los Angeles']
let msgCont = document.getElementById('nodata-container')
function btnClickedCounter() { 
  if (clicked < 4) {
    detailsOfCityWheather(Cities[clicked])
    let arrOfCities = document.getElementsByClassName('each-city-names')
    arrOfCities[clicked].classList.add('sidebar-table-border')
    clicked++;
  }
}


function detailsOfCityWheather(arg) {
  let ref = document.getElementById('input-data-for-side')
  let city = ref.value;
  if(!city){
    city = arg
  }
  if (city === 'London' || city === 'New York' || city === 'Las Vegas' || city === 'Los Angeles') {
    msgCont.innerHTML = ''
    fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let Tbody = document.getElementById("TBody");
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = city;
        let td2 = document.createElement("td");
        td2.innerHTML = data.description;
        let td3 = document.createElement("td");
        td3.innerHTML = data.temp_in_celsius;
        let td4 = document.createElement("td");
        td4.innerHTML = data.humidity_in_percent;
        let td5 = document.createElement("td");
        td5.innerHTML = data.date_and_time;
        let td6 = document.createElement("td");
        let btn12 = document.createElement("button");
        btn12.innerText = "Delete";
        td6.appendChild(btn12);
        btn12.classList.add("jb");
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        Tbody.appendChild(tr);
        btn12.addEventListener("click", () => {
          deleteRow(tr);
        });
      });
    ref = undefined;
    }
else {
 msgCont.innerHTML = 'Invalid Search'
}
}
function deleteRow(e) {
  e.remove();
}
