let i = 0;
function detailsOfCityWheather() {
  if (i < 4) {
    let Cities = document.getElementsByClassName("each-city-names");
    let city = `${Cities[i].innerHTML}`;
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
        Cities[i - 1].classList.add("sidebar-table-border");
        let nodata = document.getElementById("nodata-container");
        nodata.classList.add("nodata-feild");
      });
  } else {
    return;
  }
  i++;
}
function deleteRow(e){
  e.remove();
}

function getData(){
  const input1 = document.getElementById("input-data-for-side");
     const searchedText = input1.value
    fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${searchedText}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let tbody = document.getElementById("TBody");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = searchedText;
        let td2 = document.createElement("td");
        td2.innerHTML = data.description;
        let td3 = document.createElement("td");
        td3.innerHTML = data.temp_in_celsius;
        let td4 = document.createElement("td");
        td4.innerHTML = data.humidity_in_percent;
        let td5 = document.createElement("td");
        td5.innerHTML = data.date_and_time;
        let td6 = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerText = "Delete";
        td6.appendChild(btn);
        btn.classList.add("jb");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tbody.appendChild(tr);
        btn.addEventListener("click", () => {
          deleteRow(tr);
        });
       } )
       
}
