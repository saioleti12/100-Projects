const allLabels = document.querySelectorAll('.form-control label')

allLabels.forEach((label) =>{
  label.innerHTML = label.innerHTML.split("")
  .map((word, index) => `<span style="transition-delay:${index * 20}ms">${word}</span>`).join("");
})