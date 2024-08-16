import LoginPage from '../pageObjects/loginPage';
//import DashboardPage from '../pageObjects/dashboardPage';

describe('Login Tests', () => {
    it('should login successfully with valid credentials', () => {
        // Visit the login page
        cy.visit('https://dt-admin-dev.ldsvcplatform.com/en/login');

        // Use the page object methods to interact with the page
        LoginPage.login('admin-lyca@yopmail.com', 'wlKfwsX7fY');

        // Verify the login was successful
       // DashboardPage.verifyWelcomeMessage('Welcome, validUsername!');
    });
});
