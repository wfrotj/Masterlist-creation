const body = document.querySelector("body");
const name = document.getElementById("name");

const age = document.getElementById("age");

const gender = document.getElementById("gender");
const submitNewEnrollee = document.getElementById("submit");

function Enrollee(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
/*
//adding bookCount
function createCartItem(item, quantity) {
  const increaseQuantity = () => {
    quantity++;
    console.log(`Increased quantity of ${item} to ${quantity}`);
  };
}*/
function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  return str.join(" ");
}

function addNewEnrollee(event) {
  event.preventDefault();

  if (name.value === "" || age.value === "" || gender.value === "") return;

  const nameInput = titleCase(name.value);
  const genderInput = titleCase(gender.value);

  const student = new Enrollee(nameInput, age.value, genderInput);

  clearInputs();
  appendNewEnrollee(student);
}

function appendNewEnrollee(enrollee) {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  section.classList.add("main");

  const div = document.createElement("div");
  div.classList.add("pupil");

  const h2 = document.createElement("h2");
  h2.textContent = enrollee.name;

  const age = document.createElement("p");
  age.classList.add("age");
  age.textContent = enrollee.age;

  const gender = document.createElement("p");
  gender.classList.add("gender");
  gender.textContent = enrollee.gender;

  div.appendChild(h2);
  div.appendChild(age);
  div.appendChild(gender);

  section.appendChild(div);

  body.appendChild(div);
}

function clearInputs() {
  name.value = "";
  age.value = "";
  gender.value = "";
}

submitNewEnrollee.addEventListener("click", addNewEnrollee);
