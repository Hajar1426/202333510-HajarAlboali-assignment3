# Hajar Alboali — Advanced Personal Portfolio

## SWE 363 — Assignment 3: Advanced Functionality

## Project Description

This project is an advanced, responsive personal portfolio website developed for SWE 363 Assignment 3.

It builds upon Assignments 1 and 2 by introducing external API integration, advanced JavaScript logic, persistent state management, and performance optimization.

The website introduces me as a Software Engineering student, showcases my university projects, and dynamically displays my public GitHub repositories.

## Features

### 1. About Me

A personal introduction describing my academic background and interests.

### 2. Projects

The portfolio presents two university projects:

- **Database Management System:** A relational database developed using SQL and integrated with Java.
- **Interactive Star Game:** A Java game where players match a ball with the corresponding color of a multicolored star.

Each project includes an image, title, and description.

### 3. Project Search and Sorting

Visitors can search for projects using keywords and sort the results by:

- Default Order
- Name (A–Z)
- Name (Z–A)

Search and sorting work together. If no projects match the search, a helpful message is displayed.

### 4. GitHub API Integration

The website retrieves public repositories from my GitHub account using the GitHub REST API.

Each repository card displays its name, description, and a link to GitHub.

The application also provides loading, empty-state, and error messages.

### 5. Light/Dark Mode

Visitors can switch between light and dark themes.

The selected preference is saved using JavaScript `localStorage`, so the theme remains active after refreshing or reopening the website in the same browser.

### 6. Contact Form

The contact form includes Name, Email, and Message fields.

HTML validation checks required fields and email format. JavaScript displays a confirmation message after a valid submission.

**Note:** This is a front-end demonstration. No messages are sent or stored because the website does not use a backend.

### 7. Responsive Design and Animations

The website supports desktop, tablet, and mobile layouts using CSS Flexbox, Grid, and media queries.

Project cards include smooth hover effects, and the website supports reduced-motion preferences.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub REST API
- Web Storage API (`localStorage`)
- Git and GitHub
- IntelliJ IDEA
- Google Chrome Lighthouse

## Project Structure

```text
202333510-HajarAlboali-assignment3/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── README.md
└── .gitignore
```

## How to Run Locally

No additional packages or frameworks are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/Hajar1426/202333510-HajarAlboali-assignment3.git
   ```

2. Open the downloaded folder in IntelliJ IDEA or another code editor.

3. Open `index.html` using a local development server, such as IntelliJ's built-in web server.

4. View the website in Safari, Google Chrome, or another modern browser.

**Note:** The GitHub repository section requires an internet connection to retrieve API data.

## How to Test the Features

### GitHub API

1. Open the portfolio and scroll to My GitHub Repositories.
2. Confirm that public repositories appear.
3. Click a repository link to verify it opens correctly.
4. Disable the network temporarily to test the API error message.

### Project Search and Sorting

1. Search for `SQL` to display the database project.
2. Search for `Star` to display the Java game.
3. Search for `Python` to display the no-results message.
4. Select Name (Z–A) to reverse the alphabetical order.
5. Clear the search and select Default Order to restore the original layout.

### Light/Dark Mode

1. Click Dark Mode to change the website appearance.
2. Refresh the page and verify the dark theme remains active.
3. Click Light Mode to restore the original appearance.

### Contact Form

1. Submit the form with empty fields to check validation.
2. Enter an invalid email to test email format validation.
3. Submit valid information and verify the confirmation message appears.

## Performance Optimization

The website uses lightweight HTML, CSS, and JavaScript without additional frameworks.

Project images use lazy loading, and their file sizes were checked to avoid unnecessarily large resources.

A meta description was added to improve search engine optimization.

### Lighthouse Results

The website was tested locally using Google Chrome Lighthouse.

| Category | Mobile | Desktop |
|---|---:|---:|
| Performance | 100 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

Results may vary depending on the testing environment and network conditions.

## Browser Compatibility

The website was tested in:

- Safari
- Google Chrome

Responsive behavior was also tested at different screen widths representing desktop, tablet, and mobile devices.

## AI Integration

ChatGPT (GPT-6) was used to assist with code suggestions, explanations, debugging, performance improvements, and documentation.

AI-assisted changes were reviewed and tested before being incorporated into the project.

Detailed AI documentation is available in the [AI Usage Report](docs/ai-usage-report.md).

## Technical Documentation

Implementation details are available in the [Technical Documentation](docs/technical-documentation.md).

## Author

**Hajar Alboali**

Software Engineering Student

SWE 363 — Assignment 3