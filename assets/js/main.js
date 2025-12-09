// Simple live search filter for cards
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-box");
    const cards = Array.from(document.querySelectorAll(".card"));

    if (!searchInput || cards.length === 0) return;

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {
            const titleText = card.querySelector(".card-title")?.innerText.toLowerCase() || "";
            const keywords = (card.dataset.keywords || "").toLowerCase();

            const matches =
                query === "" ||
                titleText.includes(query) ||
                keywords.includes(query);

            card.style.display = matches ? "" : "none";
        });
    });
});

