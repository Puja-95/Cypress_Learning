class LoginPage {
    // Selectors

    getCountryPage(){
        return cy.get('._header_1vbr9_10 > img');
    }

    selectCountry(){
        return cy.get(':nth-child(1) > ._country_row_left_box_k6q7j_54 > .MuiBox-root > .MuiTypography-root');
    }
    getUsernameInput() {
        return cy.get('._textFieldContainer_1_1utqj_6 > .MuiGrid-root');
    }
    getLoginButton() {
        return cy.get(':nth-child(3) > .MuiButtonBase-root');
    }

    getPasswordInput() {
        return cy.get('.MuiInputBase-root');
    }

    getConfirmAndContinue(){
        return cy.get('.MuiButton-text');
    }

    getEyeIcon(){
        return cy.get('._eyeIcon_twnrd_300 > img');
    }

    getLanguage(){
        return cy.get('.MuiContainer-root > :nth-child(2)')
    }

    getRate(){
        return cy.get(':nth-child(1) > .MuiPaper-root');
    }

    getPaymonthly(){
        return cy.get(':nth-child(1) > .MuiPaper-root');
    }

    // Actions

    checkLogo(){
        this.getCountryPage().should('be.visible')
    }

    selectCountryRates(){
        this.selectCountry().click();
    }
    enterEmail(username) {
        this.getUsernameInput().type(username);
    }
    clickLoginButton() {
        this.getLoginButton().click();
    }


    enterPassword(password) {
        this.getPasswordInput().type(password);
    }

   
    clickConfirmAndContinue(){
        this.getConfirmAndContinue().click();
    }

    clickOnEyeIcon(){
        this.getEyeIcon().click();
    }

    clickOnLanguageSelection(){
        this.getLanguage().click();
    }

    clickRatesSelection(){
        this.getRate().click();
    }

    clickPaymonthly(){
        this.getPaymonthly().click();
    }

    // Method to perform login
    login(username, password) {
        this.selectCountryRates();
        this.enterEmail(username);
        this.clickLoginButton();
      this.clickOnEyeIcon();
      this.enterPassword(password);
      this.clickConfirmAndContinue();
      this.clickOnLanguageSelection();
      this.clickRatesSelection();
       this.clickPaymonthly();
    }
}

export default new LoginPage(); // Export an instance of the class
