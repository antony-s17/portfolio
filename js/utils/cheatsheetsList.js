import cheatsheets from "../data/cheatsheets.js";

const getCheatsheets = () => {
  const cheatSheetsContainer = document.getElementById('cheatsheets-container');
  if (!cheatSheetsContainer) {
    return;
  }
  const cheaSheetList = cheatsheets.map((cheatSheet) => `
    <a href=".${cheatSheet.link}" class="cheatsheet-card">
      <div class="cheatsheet-icon-wrapper">
        <img src="${cheatSheet.icon}" alt="${cheatSheet.name}" class="cheatsheet-icon">
      </div>
      <h3>${cheatSheet.name}</h3>
    </a>
  `).join('');

  cheatSheetsContainer.innerHTML = cheaSheetList;
}

export default getCheatsheets;