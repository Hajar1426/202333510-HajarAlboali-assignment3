
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


/* Search and sort portfolio projects */

const searchInput = document.getElementById("project-search");
const sortSelect = document.getElementById("project-sort");
const projectsContainer = document.querySelector("#projects .projects-container");
const projectCards = Array.from(projectsContainer.querySelectorAll(".project-card"));
const noResults = document.getElementById("no-results");

// Save the original order of the project cards
const originalOrder = [...projectCards];

function updateProjects() {
    const searchText = searchInput.value.toLowerCase().trim();
    const sortOrder = sortSelect.value;

    // Step 1: Filter projects using the search text
    const matchingProjects = projectCards.filter(function (card) {
        return card.textContent.toLowerCase().includes(searchText);
    });

    // Step 2: Sort the matching projects
    if (sortOrder === "az") {
        matchingProjects.sort(function (a, b) {
            return a.querySelector("h3").textContent.localeCompare(
                b.querySelector("h3").textContent
            );
        });
    } else if (sortOrder === "za") {
        matchingProjects.sort(function (a, b) {
            return b.querySelector("h3").textContent.localeCompare(
                a.querySelector("h3").textContent
            );
        });
    } else {
        matchingProjects.sort(function (a, b) {
            return originalOrder.indexOf(a) - originalOrder.indexOf(b);
        });
    }

    // Step 3: Hide projects that do not match
    projectCards.forEach(function (card) {
        card.hidden = true;
    });

    // Step 4: Display matching projects in the selected order
    matchingProjects.forEach(function (card) {
        card.hidden = false;
        projectsContainer.appendChild(card);
    });

    // Step 5: Show feedback if no projects match
    noResults.hidden = matchingProjects.length > 0;
}

// Update whenever the visitor searches or changes sorting
searchInput.addEventListener("input", updateProjects);
sortSelect.addEventListener("change", updateProjects);



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


/* ---------- Light/Dark Theme Management ---------- */

const themeToggle = document.getElementById("theme-toggle");

// Get the previously saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

// Apply the saved theme when the page loads
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Light Mode";
    themeToggle.setAttribute("aria-pressed", "true");
}

// Switch themes when the button is clicked
themeToggle.addEventListener("click", function () {

    // Toggle the dark-mode class
    const isDarkMode = document.body.classList.toggle("dark-mode");

    // Update the button and save the preference
    if (isDarkMode) {
        themeToggle.textContent = "Light Mode";
        themeToggle.setAttribute("aria-pressed", "true");
        localStorage.setItem("portfolio-theme", "dark");
    } else {
        themeToggle.textContent = "Dark Mode";
        themeToggle.setAttribute("aria-pressed", "false");
        localStorage.setItem("portfolio-theme", "light");
    }
});

