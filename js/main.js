(() =>{
  console.log('ECO!');
//select element here
  let eco = document.querySelector("#eco");
  let planet = document.querySelector("#planet");
  let electrocar = document.querySelector("#electrocar");
  let gas = document.querySelector("#gas");
  let bicycle = document.querySelector("#bicycle");
  let lines = document.querySelector("#lines");
  let humans = document.querySelector("#humans");
  let plants = document.querySelector("#plants");
  let greenhouse = document.querySelector("#greenhouse");
  let bag = document.querySelector("#bag");


function logID(){
  console.log("Icon",this.id);
  this.classList.add("selected");
}
eco.addEventListener("click", logID);
planet.addEventListener("click", logID);
electrocar.addEventListener("click", logID);
gas.addEventListener("click", logID);
bicycle.addEventListener("click", logID);
lines.addEventListener("click", logID);
humans.addEventListener("click", logID);
plants.addEventListener("click", logID);
greenhouse.addEventListener("click", logID);
bag.addEventListener("click", logID);
})();
