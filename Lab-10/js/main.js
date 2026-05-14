// Student: Ali Saleh Alghamdi | ID: 2138215

// Confirm before delete using data-confirm attribute
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-confirm]").forEach((el) => {
        el.addEventListener("click", (e) => {
            const msg = el.dataset.confirm || "Are you sure?";
            if (!confirm(msg)) e.preventDefault();
        });
    });
});
