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
          remove(tr);
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
function remove(e){
  e.remove();
}

function compareSidebarData() {
  let input1 = document.getElementById("input-data-for-side").value;
  let tr = document.getElementsByTagName("tr");
  if (input1 === "London") {
    tr[1].classList.add("bg");
  } else if (input1 === "New York") {
    tr[2].classList.add("bg");
  } else if (input1 === "Los Angeles") {
    tr[3].classList.add("bg");
  } else if (input1 === "Las Vegas") {
    tr[4].classList.add("bg");
  } else {
    return;
  }
}
