const modal = document.getElementById("project-modal");
const titleEl = document.getElementById("modal-title");
const descEl = document.getElementById("modal-description");

function openProjectModal(project) {
  titleEl.textContent = project.title;
  descEl.textContent = project.detail;
  modal.classList.add("show");
}

document.querySelector(".modal-close").onclick = () => {
  modal.classList.remove("show");
};

modal.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("show");
};
