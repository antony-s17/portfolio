import resources from "../data/resources.js";
const resourcesSection = document.querySelector('.resources-section')
const getResources = () => {
  if (!resourcesSection) {
    return;
  }
  const tabsHTML = `
    <div class="resources-tabs">
      ${resources.map((category, index) => `
        <button class="tab-btn ${index === 0 ? 'active' : ''}" data-category="${index}">
          ${category.category}
        </button>
      `).join('')}
    </div>
  `
  const tabsContentHTML = `
    <div class="tabs-content">
      ${resources.map((category, index) => `
        <div class="tab-panel ${index === 0 ? 'active' : ''}" data-panel="${index}">
          <div class="resources-grid">
            ${category.items.map(item => `
              <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="resource-card">
                <h3>${item.title}</h3>
                <p>${item.note}</p>
              </a>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `
  resourcesSection.insertAdjacentHTML('beforeend', tabsHTML)
  resourcesSection.insertAdjacentHTML('beforeend', tabsContentHTML)
  const tabButtons = document.querySelectorAll('.tab-btn')
  const tabPanels = document.querySelectorAll('.tab-panel')
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const categoryIndex = button.dataset.category
      tabButtons.forEach(btn => btn.classList.remove('active'))
      tabPanels.forEach(panel => panel.classList.remove('active'))
      button.classList.add('active')
      document.querySelector(`[data-panel="${categoryIndex}"]`).classList.add('active')
    })
  })
}

export { resourcesSection, getResources };