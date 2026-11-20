# AI Usage Report — Assignment 3

## 1. Introduction

This report documents my use of artificial intelligence during SWE 363 Assignment 3 — Advanced Functionality.

The assignment builds upon my previous portfolio website by adding GitHub API integration, combined project filtering and sorting, persistent theme management, and performance improvements.

ChatGPT was used to assist with code generation, explanations, debugging, testing guidance, and documentation.

## 2. AI Tools Used and Use Cases

**AI Tool:** ChatGPT  
**Model:** GPT-6

I used ChatGPT for the following tasks:

- Understanding the Assignment 3 requirements and organizing the development process.
- Creating and connecting the Assignment 3 GitHub repository.
- Implementing the GitHub REST API using JavaScript `fetch()` and `async/await`.
- Adding loading, empty-state, and error messages for API requests.
- Combining project searching and sorting using JavaScript.
- Implementing persistent light/dark mode using `localStorage`.
- Adding responsive dark-mode styling.
- Improving performance using lazy-loaded images.
- Adding an SEO meta description.
- Understanding and interpreting Google Chrome Lighthouse results.
- Fixing the appearance of the SQL project image in dark mode.
- Preparing technical documentation and README content.

## 3. Benefits and Challenges

### Benefits

ChatGPT helped me divide a long assignment into smaller, manageable steps and understand the implementation of advanced JavaScript features.

The GitHub API integration was especially useful because it introduced me to asynchronous programming and retrieving data from an external service.

I also learned how to combine project filtering and sorting so that multiple user inputs affect the displayed content.

ChatGPT helped me implement state management using `localStorage`, allowing the website to remember the visitor's selected theme.

### Challenges

One challenge was connecting and pushing my Assignment 3 project to GitHub. I needed to troubleshoot the Git setup and verify that the correct repository was connected.

Another challenge was the appearance of the SQL project image in dark mode because its background did not blend with the darker project card.

I also needed to test the suggested code carefully to make sure the new features did not break functionality from previous assignments.

These challenges demonstrated the importance of reviewing and testing AI-generated suggestions.

## 4. Learning Outcomes

During Assignment 3, I learned how to:

- Fetch data from an external REST API.
- Use `async/await` for asynchronous JavaScript operations.
- Handle API responses and errors using `try...catch`.
- Dynamically create HTML elements using JavaScript.
- Combine filtering and sorting using array methods.
- Use conditional logic to control application behavior.
- Save and retrieve user preferences using `localStorage`.
- Implement light/dark mode using CSS classes.
- Optimize image loading using `loading="lazy"`.
- Improve SEO using a meta description.
- Evaluate website quality using Google Chrome Lighthouse.

## 5. Responsible AI Use and Modifications

I reviewed AI-generated suggestions before incorporating them into my portfolio and tested the features after implementation.

For the GitHub API, I verified that my public repositories appeared correctly and that the repository links worked.

For project filtering and sorting, I tested different search keywords, alphabetical sorting options, and combinations of both features.

I tested the light/dark mode toggle and verified that the selected preference remained active after refreshing the website.

I also identified and fixed a visual issue involving the SQL image in dark mode.

For performance optimization, I checked the image file sizes, added lazy loading, and used Lighthouse to evaluate the website.

AI was used as a development assistant, while I reviewed, integrated, tested, and adjusted the suggestions.

## 6. AI Usage Log

The following entries document the AI assistance used during Assignment 3. C01 represents the complete conversation evidence, while A01–A07 represent the original AI-generated artifacts.

| ID | Tool (Model) | Date | Purpose | Files Affected | What I Changed and How I Verified It |
|---|---|---|---|---|---|
| C01 | ChatGPT (GPT-6) | 2026-11-20 | Step-by-step guidance for Assignment 3, including setup, implementation, debugging, testing, and documentation | Multiple files | Followed the development steps and tested the completed features in Safari and Chrome. |
| A01 | ChatGPT (GPT-6) | 2026-11-20 | Generate GitHub API integration | index.html, js/script.js, css/styles.css | Integrated the code and verified that four public repositories appeared. |
| A02 | ChatGPT (GPT-6) | 2026-11-20 | Generate combined project filtering and sorting | index.html, js/script.js, css/styles.css | Tested searching, sorting, combined operations, and empty results. |
| A03 | ChatGPT (GPT-6) | 2026-11-20 | Generate persistent light/dark mode | index.html, js/script.js, css/styles.css | Tested theme switching and persistence after refreshing. |
| A04 | ChatGPT (GPT-6) | 2026-11-20 | Suggest performance and SEO improvements | index.html | Added lazy loading and a meta description, then verified Lighthouse results. |
| A05 | ChatGPT (GPT-6) | 2026-11-20 | Generate technical documentation | docs/technical-documentation.md | Reviewed and committed the documentation. |
| A06 | ChatGPT (GPT-6) | 2026-11-20 | Generate Assignment 3 README | README.md | Reviewed and committed the README. |
| A07 | ChatGPT (GPT-6) | 2026-11-20 | Generate AI usage report | docs/ai-usage-report.md | Reviewed the report and matched the entries to the prepared evidence artifacts. |

## 7. AI Usage Declaration

**Student Name:** Hajar Alboali  
**Student ID:** 202333510  
**Date:** 2026-11-20

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

## 8. AI Evidence

The AI evidence is organized for separate submission through Blackboard as:

`202333510-HajarAlboali-assignment3-ai-evidence.zip`

The evidence includes:

- `conversations/` — note that i couldn't include the whole conversation because it is old, thought it is unedited AI conversations.
- `artifacts/` — original AI-generated code suggestions and documentation drafts before modifications.

The evidence ZIP and conversation logs will not be committed to the public GitHub repository.