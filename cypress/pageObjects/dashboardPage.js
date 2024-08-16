class dashboardPage{
//selectors
getTitle(){
    return cy.get('._leftContainer_qvjlh_41 > .MuiTypography-root');
}


//actions
verifyTitle(){
    this.getTitle().should('be.visible');
}

dashboard(){
    this.verifyTitle();
}


}
export default new dashboardPage
