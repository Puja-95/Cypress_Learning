import LoginPage from '../pageObjects/loginPage';
import DashboardPage from '../pageObjects/dashboardPage';

describe('Login Tests', () => {
    beforeEach(() => {
        cy.fixture('config').then((config) => {
            cy.visit(config.baseUrl);
        })
    });
    it('should login successfully with valid credentials', () => {
        LoginPage.login('admin-lyca@yopmail.com', 'wlKfwsX7fY');
    });

    it('should verify dashboard page for rates and paymonthly selection', ()=>{
    LoginPage.login('admin-lyca@yopmail.com', 'wlKfwsX7fY');
    DashboardPage.dashboard();
    })
});
