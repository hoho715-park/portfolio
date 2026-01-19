const modal = document.querySelector(".modal");
const modalContent = modal.querySelector(".modal-content");

function openModal(project) {
  modal.classList.add("active");
  modalContent.innerHTML = `
    <h2>${project.title}</h2>
    <p style="margin-top:15px">${project.detail}</p>
    <button class="modal-close" onclick="closeModal()">닫기</button>
  `;
}

function closeModal() {
  modal.classList.remove("active");
}
