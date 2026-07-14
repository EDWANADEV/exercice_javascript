const btn = document.getElementById("btn");
const aler = document.getElementById("alert");
const change = document.getElementById("change");
const visible = document.getElementById("title");
const add = document.getElementById("btn_f");

btn.addEventListener("click", () => {
  const text = document.querySelector(".text");
  const textContent = text.value.trim();
  if (textContent !== "") {
    let elt = document.createElement("div");
    elt.innerHTML += `<p class="elt"> ${textContent} </p>`;
    const remove = elt.querySelector(".elt");
    remove.addEventListener("click", () => {
      elt.remove();
    });
    document.querySelector(".container").appendChild(elt);
    text.value = "";
  }
});
aler.addEventListener("click", () => {
  alert("hi!");
});

change.addEventListener("keypress", () => {
  change.style.background = "purple";
});
add.addEventListener("click", () => {
  visible.style.visibility = "visible";
  add.classList.add("active");
});
