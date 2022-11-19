const scriptURL = "https://script.google.com/macros/s/AKfycbxm9c-0uqR24CO7uCiLjffjU32HZ3rMswLLQZNTg1A97lJVfMBHNaLPZxpbMLX_pT0KLQ/exec";
const form = document.forms["FujitimmeC-for"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const btnDAlert = document.querySelector(".my-alert");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      btnDAlert.classList.toggle("d-none");

      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
