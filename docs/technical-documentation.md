# Technical Documentation — Assignment 3

## 1. Project Overview

This project is an advanced personal portfolio website developed for SWE 363 Assignment 3.

It builds upon Assignments 1 and 2 by introducing external API integration, advanced JavaScript logic, state management, and performance optimization.

The website introduces me as a Software Engineering student, showcases my university projects, and dynamically displays my public GitHub repositories.

## 2. Technologies Used

- **HTML5:** Website structure and content.
- **CSS3:** Styling, responsive layouts, dark mode, and animations.
- **JavaScript:** Dynamic content, filtering, sorting, API integration, and state management.
- **GitHub REST API:** Fetching public repository information.
- **localStorage:** Saving the visitor's selected theme.
- **Git and GitHub:** Version control and repository management.
- **IntelliJ IDEA:** Development environment.
- **Google Chrome Lighthouse:** Performance and quality testing.

## 3. Project Structure

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

## 4. Website Sections

### About Me

Introduces me as a Software Engineering student and provides information about my interests.

### Projects

Displays two university projects:

1. **Database Management System:** A relational database developed using SQL and integrated with Java.
2. **Interactive Star Game:** A Java game where players match the ball with the corresponding color of a multicolored star.

Each project includes an image, title, and description.

### GitHub Repositories

Dynamically displays public repositories fetched from my GitHub account.

### Contact

Provides my contact information and a form containing Name, Email, and Message fields.

## 5. External API Integration

The website integrates the GitHub REST API to retrieve public repository information.

**API endpoint:**

`https://api.github.com/users/Hajar1426/repos?sort=updated&per_page=6`

The API integration uses:

- `fetch()` to request data.
- `async/await` to handle asynchronous operations.
- `response.ok` to verify successful responses.
- `response.json()` to convert the response into JavaScript objects.
- DOM manipulation to dynamically create repository cards.

Each repository card displays its name, description when available, and a link to the GitHub repository.

### API Error Handling

The website provides feedback for different API states:

- **Loading:** Displays a message while repositories are being fetched.
- **Success:** Displays the repository cards.
- **Empty response:** Displays a message when no public repositories are available.
- **Failure:** Displays a friendly error message when the API request fails.

This ensures visitors receive feedback instead of seeing an unexplained empty section.

## 6. Complex Logic — Project Filtering and Sorting

The Projects section supports both searching and sorting.

Visitors can filter projects by keywords and choose between:

- Default Order
- Name (A–Z)
- Name (Z–A)

The JavaScript logic follows these steps:

1. Read the search input and selected sorting option.
2. Filter project cards based on matching text.
3. Apply the selected sorting rule.
4. Hide nonmatching projects.
5. Reorder and display matching project cards.
6. Display a message when no projects match the search.

The implementation uses JavaScript array methods such as `filter()` and `sort()`, conditional statements, and `localeCompare()`.

This demonstrates complex logic by combining multiple user inputs and operations.

## 7. State Management — Light/Dark Mode

The website includes a theme toggle that allows visitors to switch between light and dark appearances.

JavaScript uses `classList.toggle()` to add or remove the `dark-mode` class from the page.

The selected preference is saved using `localStorage.setItem()`.

When the website is reopened or refreshed, `localStorage.getItem()` retrieves the previously selected theme and applies it automatically.

The button text and `aria-pressed` attribute are updated to reflect the current theme.

This demonstrates persistent state management across page reloads within the same browser and website origin.

## 8. Contact Form and User Feedback

The contact form contains three required fields:

- Name
- Email
- Message

HTML validation checks that required fields are completed and the email follows a valid format.

JavaScript prevents the default form submission using `event.preventDefault()`.

After valid submission, the website displays an inline confirmation and clears the form fields.

The form is a front-end demonstration. No messages are sent or stored because there is no backend.

## 9. Animations and Responsive Design

The website uses CSS Flexbox, Grid, and media queries to adapt to desktop, tablet, and mobile screens.

Project cards include smooth hover transitions and shadows.

The website also supports reduced-motion preferences using the `prefers-reduced-motion` media query.

Project images use `object-fit: contain` to remain fully visible across screen sizes.

## 10. Performance Optimization

Several techniques were used to improve website performance:

- Added `loading="lazy"` to project images to defer offscreen image loading.
- Checked image file sizes to avoid unnecessarily large resources.
- Used lightweight HTML, CSS, and JavaScript without additional frameworks.
- Kept CSS and JavaScript organized in separate files.
- Added a meta description to improve SEO.

The two project images were checked and had approximate file sizes of:

- SQL image: 16.6 KB
- Java image: 47.4 KB

### Lighthouse Testing Results

Google Chrome Lighthouse was used to evaluate the website locally.

| Category | Mobile | Desktop |
|---|---:|---:|
| Performance | 100 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

The initial SEO score was 91 because the page was missing a meta description. After adding the meta description and rerunning Lighthouse, the SEO score improved to 100.

These results reflect the local Lighthouse tests and may vary depending on the environment and network conditions.

## 11. Functional Testing

The website was tested using Safari and Google Chrome.

The following features were verified:

- GitHub repositories load dynamically.
- Repository links open correctly.
- API failures display a friendly message.
- Project searching works.
- Project sorting works in both directions.
- Searching and sorting work together.
- Empty search results display feedback.
- Light and dark themes switch correctly.
- The selected theme remains active after refreshing.
- Contact form validation and confirmation work.
- Responsive layouts display correctly on different screen sizes.

All tested features worked as expected.

## 12. Code Quality

The project separates HTML, CSS, and JavaScript into logical files.

The JavaScript code uses meaningful variable names, functions, event listeners, and comments.

API data is displayed using DOM methods and `textContent` rather than inserting external text directly as HTML.

The application handles user interactions and API errors while maintaining a simple and readable code structure.

## 13. Version Control

Git and GitHub were used throughout development.

Assignment 2 was used as the foundation for Assignment 3.

Separate commits were created for major changes, including:

- Initializing Assignment 3.
- Integrating the GitHub API.
- Adding combined project filtering and sorting.
- Implementing persistent theme preferences.
- Optimizing performance and improving SEO.
- Updating documentation.

AI-assisted code commits include an `Assisted-by: ChatGPT (GPT-6)` attribution.