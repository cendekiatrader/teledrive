const header = document.querySelector(".site-header");
const detailElements = document.querySelectorAll("details");

const updateHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

detailElements.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;

    detailElements.forEach((otherDetail) => {
      if (otherDetail !== detail) {
        otherDetail.open = false;
      }
    });
  });
});

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();
