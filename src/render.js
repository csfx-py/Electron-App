const dishList = document.getElementById("dishList");
const searchBar = document.getElementById("searchBar");
let data = [];


searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filterRes = data.filter((datum) => {
    return datum.dish.toLowerCase().includes(searchString);
  });
  displayData(filterRes);
});

const loadData = async () => {
  try {
    data = require("./data/data");
    displayData(data);
  } catch (err) {
    console.error(err);
  }
};

const displayData = (data) => {
  let i = 0
  const htmlString = data
    .map((datum) => {
      return `
    <li class="dishElement" id=${i++} onclick="addToList(this.id)">
      ${datum.dish}
    </li>
    `;
    })
    .join("");
  dishList.innerHTML = htmlString;
};

// async function addElement() {
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("list").appendChild(li);
//   }
//   document.getElementById("inItem").value = "";

// var span = document.createElement("SPAN");
// var txt = document.createTextNode("\u00D7");
// span.className = "close";
// span.appendChild(txt);
// li.appendChild(span);

// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }
// }

loadData();

const addToList = (eleId) => {
  const clickedItem = document.getElementById(eleId).innerText;
  let li = document.createElement("li");
  let t = document.createTextNode(clickedItem);
  li.appendChild(t);
  document.getElementById("billList").appendChild(li);
}

const refreshPage = () => {
  window.location.reload();
} 