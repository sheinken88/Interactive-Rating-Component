const previewContainer = document.querySelector(".preview");
const thankYouContainer = document.querySelector(".thank-you");
const submitBtn = document.querySelector(".submit-preview");
const selectionResult = document.querySelector(".selection-result");
const ratingBtn = document.querySelectorAll(".numbers");
const rateAgain = document.querySelector(".submit-rate-again");

submitBtn.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden");
  previewContainer.classList.add("hidden");
  //   selectionResult.innerHTML = `You selected ${ratingBtn} out of 5`;
});

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectionResult.innerHTML = `You have selected ${btn.innerHTML} out of 5`;
  });
});

rateAgain.addEventListener("click", () => {
  thankYouContainer.classList.add("hidden");
  previewContainer.classList.remove("hidden");
});
