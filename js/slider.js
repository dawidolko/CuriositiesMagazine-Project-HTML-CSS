document.querySelectorAll("label[data-slide]").forEach((label) => {
  label.addEventListener("click", () => {
    window.location.href = `#${label.dataset.slide}`;
  });
});
