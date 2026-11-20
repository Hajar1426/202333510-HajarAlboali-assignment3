
// Handle contact form submission
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Display a confirmation message
    formFeedback.textContent =
        "Form submitted successfully! This is a demo, so no message was sent.";

    formFeedback.className = "success-message";

    // Clear the form fields
    contactForm.reset();
});


// Filter projects based on what the visitor types
const searchInput = document.getElementById("project-search");
const projectCards = document.querySelectorAll(".project-card");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();
    let matches = 0;

    projectCards.forEach(function (card) {
        const projectText = card.textContent.toLowerCase();
        const isMatch = projectText.includes(searchText);

        card.hidden = !isMatch;

        if (isMatch) {
            matches++;
        }
    });

    noResults.hidden = matches > 0;
});


/* Fetch and display public GitHub repositories */

const githubUsername = "Hajar1426";
const githubRepos = document.getElementById("github-repos");
const githubStatus = document.getElementById("github-status");

async function loadGitHubRepositories() {
    try {
        // Request public repositories from GitHub
        const response = await fetch(
            `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
        );

        // Check whether the API request succeeded
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }

        // Convert the API response into JavaScript data
        const repositories = await response.json();

        // Clear the loading message
        githubStatus.textContent = "";

        // Handle an empty repository list
        if (repositories.length === 0) {
            githubStatus.textContent = "No public repositories found.";
            return;
        }

        // Display each repository as a card
        repositories.forEach(function (repo) {
            const card = document.createElement("article");
            card.className = "project-card";

            const title = document.createElement("h3");
            title.textContent = repo.name;

            const description = document.createElement("p");
            description.textContent =
                repo.description || "No description available.";

            const link = document.createElement("a");
            link.href = repo.html_url;
            link.textContent = "View on GitHub";
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(link);

            githubRepos.appendChild(card);
        });

    } catch (error) {
        // Display a friendly error message
        githubStatus.textContent =
            "Unable to load GitHub repositories. Please try again later.";

        console.error("GitHub API error:", error);
    }
}

// Load repositories when the page opens
loadGitHubRepositories();
