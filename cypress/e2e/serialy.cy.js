describe('serialy', () => {
  beforeEach(() => {
    cy.visit('https://ww.kukaj.me/')
  })
  it('Filtrovanie', () => {
    cy.get('.nav > :nth-child(2) > a').click()
    cy.get('.years > .dropdown > .btn').click()
    cy.get('#bs-select-2-2').click()
    cy.get('.genre > .dropdown > .btn').click()
    cy.get('.dab > .dropdown > .btn').click()
  })
  it('Vyhladavanie', () => {
    cy.get('#search-inp').type('Game of Thrones{enter}')
    cy.get(':nth-child(2) > label').click()
    cy.get(':nth-child(2) > a > .item > .shado-cc-w').click()
    cy.get('#search-inp').type('Peaky Blinders{enter}')
    cy.get('.shado-cc-w').click()
  })
  it('Registracia', () => {
    cy.get('.reg > .ajax').click()
    cy.get('#frm-regForm-user_name').type('Kristian')
    cy.get('#frm-regForm-user_pw').type('kiko123')
    cy.get('#frm-regForm-user_mail').type('kiko@ukf.sk')
    cy.get('label > span').click()
    cy.get('.l6 > .lb').click()
    cy.get(':nth-child(2) > .errnalert').contains('Použité')
    
  })
  it('Porovnavanie', () => {
    cy.get('[data-slide-to="0"]').click()
    cy.get('.active > .carousel-caption > .vcenter > .name').contains('Šógun')
    cy.get('[data-slide-to="1"]').click()
    cy.get('.active > .carousel-caption > .vcenter > .name').contains("Star Trek: Discovery")
    cy.get('[data-slide-to="2"]').click()
    cy.get('.active > .carousel-caption > .vcenter > .name').contains("Duna: Časť druhá")
    cy.get('[data-slide-to="3"]').click()
    cy.get('.active > .carousel-caption > .vcenter > .name').contains("TWD: The Ones Who Live")
  })


})