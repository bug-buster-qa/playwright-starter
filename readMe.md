/* Command to Install PlayWright */
npm init playwright@latest

/* To Run the tests */
npx playwright test

/* To Run the tests */
npx playwright test --project=chromium

/* To Run the tests in headed mode */
npx playwright test --project=chromium --headed

/* To Run the particular tests */
npx playwright test -g "has title" --project=chromium


/* To Run all the tests in a ts/js file */
npx playwright test example.spec.ts --project=chromium

/* To Run the tests in ui mode */
npx playwright test --ui 