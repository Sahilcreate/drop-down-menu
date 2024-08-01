
function addDropDown (btnId, dropDownId) {
  const dropDownBtn = document.getElementById(btnId);
  dropDownBtn.classList.add("drop-down-btn-not-clicked");
  dropDownBtn.addEventListener(
    'click', () => {
      handleDropDownBtnClick(btnId, dropDownId);
    }
  )
};

function handleDropDownBtnClick (btnId, dropDownId) {
  const dropDown = document.getElementById(dropDownId);
  const dropDownBtnClassList = document.getElementById(btnId).classList;
  if (dropDownBtnClassList.contains("drop-down-btn-not-clicked")) {
    dropDown.style.display = "block";
    document.getElementById(btnId).classList.replace("drop-down-btn-not-clicked", "drop-down-btn-clicked");
  } else {
    dropDown.style.display = "none";
    document.getElementById(btnId).classList.replace("drop-down-btn-clicked", "drop-down-btn-not-clicked");
  }
}

addDropDown("menu-btn", "menu-drop-down-container");

export { addDropDown };