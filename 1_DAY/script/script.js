// let signTask = function (x) {
//   if (x.target.tagName === "LI") {
//     x.target.classList.toggle("strike");
//   }
// };

// let list = document.querySelector("ul");
// list.addEventListener("click", signTask());

let ul = document.querySelector("ul");
ul.addEventListener("click", function (x) {
  if (x.target.tagName === "LI") {
    x.target.classList.toggle("strike");
    x.target.classList.toggle("border-secondary");
    x.target.classList.toggle("border-success");
  }
});

ul.addEventListener("click", function (x) {
  if (x.target.tagName === "I") {
    x.target.parentNode.parentNode.remove();
  }
});

let addTask = function () {
  let taskCont = document.getElementById("form");

  if (taskCont.value != "") {
    let taskElem = document.createElement("li");
    taskElem.innerHTML = `<p class="col-8 col-lg-11 overflow-x-scroll">${taskCont.value}</p><div class="col-2 col-lg-1"><i class="btn btn-danger bi bi-trash3-fill i-red border border-2 p-1 border-danger rounded-2 "></i></div>`;
    taskElem.classList.add(
      "row",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "border",
      "border-2",
      "border-secondary",
      "rounded-2",
      "p-2",
      "mb-2"
    );
    ul.append(taskElem);
    taskCont.value = "";
  } else {
    alert("Devi inserire un task");
  }
};

let button = document.getElementById("buttonTask");
button.addEventListener("click", addTask);
