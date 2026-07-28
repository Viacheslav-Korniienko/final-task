# Task description
"Negative & Edge Case" Flow

Focus: Error handling, form validation, and wait strategies.

Launch URL: [https://www.saucedemo.com/](https://www.saucedemo.com/)

    UC-1 Form Validation (Negative Testing):

- Attempt to login with empty Username and Password. Verify error: "Username is required".

- Attempt to login with Username only. Verify error: "Password is required".

- Login with standard_user, go to Checkout, and attempt to continue without filling the postal code. Verify error message.

    UC-2 Handling Latency (Wait Strategies):

- Login using performance_glitch_user (This user has a built-in delay).

- Ensure your framework handles the page load delay gracefully without hard-coded pause() or sleep()commands.

- Reset the App State via the Burger Menu.

- Logout.

Technical Requirements:

Tool: WebDriverIO.

Browsers: Firefox, Chrome (Run in Parallel).

Pattern: Page Object Model (POM).

Locators: CSS Selectors.

Assertions: Use specific framework assertions (e.g., expect(elem).toBeExisting()).

Documentation: Add a README.md explaining how to run the tests and generate the report.

## Running the Tests

Run all tests in Chrome and Firefox in parallel: npm run wdio

### Test Report

The project uses the WebdriverIO spec reporter.

The results are displayed automatically in the terminal after running: npm run wdio

A successful execution displays the passed test scenarios for both Chrome and Firefox.