function doUpload(element) {
  let input = document.querySelector("#inputFile");
  let title = document.querySelector(".divUpload h2");
  input.addEventListener("change", () => {
    if (input.files.length == 1) {
      title.textContent = input.files[0].name;
      element.classList.add("divUpload--selected");
      let iconClose = document.querySelector(".divUpload .iconClose");
      iconClose.classList.remove("hide")
    }
  });
  input.click();
}

function closeUpload(icon){
    icon.parentNode.classList.remove("divUpload--selected");
    let title = document.querySelector(".divUpload h2");
    title.textContent = "Select your file";
    icon.classList.add("hide");
}