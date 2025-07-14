document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const thisItem = button.closest('.faq-item');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== thisItem) item.classList.remove('active');
      });

      // Toggle this one
      thisItem.classList.toggle('active');
    });
  });
});
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.icon');

    // Collapse all answers
    document.querySelectorAll('.faq-answer').forEach((a) => {
      if (a !== answer) a.classList.remove('open');
    });
    document.querySelectorAll('.faq-question .icon').forEach((i) => {
      if (i !== icon) i.classList.remove('rotate');
    });

    // Toggle current answer
    answer.classList.toggle('open');
    icon.classList.toggle('rotate');
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const openPrivacyBtn = document.getElementById("open-privacy-policy");
    const openTermsBtn = document.getElementById("open-terms-of-service");
    const closePrivacyBtn = document.getElementById("close-privacy-policy");
    const closeTermsBtn = document.getElementById("close-terms-of-service");
    const privacyModal = document.getElementById("privacy-policy-modal");
    const termsModal = document.getElementById("terms-of-service-modal");

    function openModal(modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.classList.add("overflow-hidden"); // Prevent scroll on body
    }

    function closeModal(modal) {
        modal.classList.remove("flex");
        modal.classList.add("hidden");

        // Check if both modals are closed before unlocking scroll
        const otherModal = modal === privacyModal ? termsModal : privacyModal;
        if (otherModal.classList.contains("hidden")) {
            document.body.classList.remove("overflow-hidden"); // Restore scroll
        }
    }

    if (openPrivacyBtn && privacyModal) {
        openPrivacyBtn.addEventListener("click", () => openModal(privacyModal));
    }

    if (openTermsBtn && termsModal) {
        openTermsBtn.addEventListener("click", () => openModal(termsModal));
    }

    if (closePrivacyBtn && privacyModal) {
        closePrivacyBtn.addEventListener("click", () => closeModal(privacyModal));
    }

    if (closeTermsBtn && termsModal) {
        closeTermsBtn.addEventListener("click", () => closeModal(termsModal));
    }

    [privacyModal, termsModal].forEach(modal => {
        if (modal) {
            modal.addEventListener("click", (e) => {
                if (e.target === modal) closeModal(modal);
            });
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal(privacyModal);
            closeModal(termsModal);
        }
    });
});
