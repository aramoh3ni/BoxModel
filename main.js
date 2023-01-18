const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnChangeSizeModel = document.querySelector(".resize-model");
const btnClosemodel = document.querySelector(".close-model");
const btnOpenmodel = document.querySelector(".open-model");

const openModel = () => {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
  btnOpenmodel.classList.add("hidden");
};

const closeModel = () => {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
  btnOpenmodel.classList.remove("hidden");
};

btnOpenmodel.addEventListener("click", () => openModel());
btnClosemodel.addEventListener("click", () => closeModel());
overlay.addEventListener("click", () => closeModel());
btnChangeSizeModel.addEventListener("click", () => {
  if (model.classList.contains("sm-model")) {
    model.classList.remove("sm-model");
    model.classList.add("md-model");
  } else {
    model.classList.add("sm-model");
    model.classList.remove("md-model");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escap" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
