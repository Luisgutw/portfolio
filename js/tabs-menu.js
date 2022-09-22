function setupTabs1() {
  document.querySelectorAll(".tabs__button1").forEach((button) => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(
        '.tabs__content1[data-tab="' + tabNumber + '"]'
      );

      sideBar.querySelectorAll(".tabs__button1").forEach((button) => {
        button.classList.remove("tabs__button1--active");
      });

      tabsContainer.querySelectorAll(".tabs__content1").forEach((tab) => {
        tab.classList.remove("tabs__content1--active");
      });

      button.classList.add("tabs__button1--active");
      tabToActivate.classList.add("tabs__content1--active");
    });
  });
}

function setupTabs2() {
  document.querySelectorAll(".tabs__button2").forEach((button) => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(
        '.tabs__content2[data-tab="' + tabNumber + '"]'
      );

      sideBar.querySelectorAll(".tabs__button2").forEach((button) => {
        button.classList.remove("tabs__button2--active");
      });

      tabsContainer.querySelectorAll(".tabs__content2").forEach((tab) => {
        tab.classList.remove("tabs__content2--active");
      });

      button.classList.add("tabs__button2--active");
      tabToActivate.classList.add("tabs__content2--active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs1();
  setupTabs2();
});
