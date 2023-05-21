const modals = () => {
  const bindModal = ({
    triggers: triggerSelector,
    modal: modalSelector,
    close: closeSelector,
    closeClick: closeClickOverlay = true,
  }) => {
    const triggers: NodeListOf<HTMLElement> =
      document.querySelectorAll(triggerSelector);

    const modal: HTMLElement = document.querySelector(modalSelector);
    const close: HTMLElement = document.querySelector(closeSelector);
    const windows: NodeListOf<HTMLElement> =
      document.querySelectorAll("[data-modal]");

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";

        document.body.classList.add("modal-open");
      });
    });

    const closeModal = (): void => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    };

    const closeWindows = (): void => {
      windows.forEach((window) => {
        window.style.display = "none";
      });
    };

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        closeWindows();
        closeModal();
      }
    });
    close.addEventListener("click", () => {
      closeModal();
      closeWindows();
    });

    document.addEventListener("keypress", (e) => {
      if (e.code.toLowerCase() === "escape") {
        closeModal();
      }
    });
  };

  bindModal({
    triggers: ".popup_engineer_btn",
    modal: ".popup_engineer",
    close: ".popup_engineer .popup_close",
  });
};
