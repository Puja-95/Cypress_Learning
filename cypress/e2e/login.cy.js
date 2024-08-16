import LoginPage from '../pageObjects/loginPage';
import DashboardPage from '../pageObjects/dashboardPage';
import config from '../fixtures/config.json'

describe('Login Tests', () => {
    beforeEach(() => {
        cy.fixture('config').then((config) => {
            cy.visit(config.baseUrl);
        })
    });
    it('should login successfully with valid credentials', () => {
        LoginPage.login(config.emailId, config.password);
    });

    it('should verify dashboard page for rates and paymonthly selection', ()=>{
    LoginPage.login(config.emailId, config.password);
    DashboardPage.dashboard();
    })
});
