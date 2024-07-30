describe('Todos', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3004/todos',
    },
      {
      body: [
        {
          text: 'first todo',
          isCompleted: true,
          id: 1,
        },
        {
          text: 'second todo',
          isCompleted: false,
          id: 2,
        },
        {
          text: 'third todo',
          isCompleted: false,
          id: 3,
        }]
      });
    cy.visit('/');
  });

  it('Visits the initial project page', () => {
    cy.contains('todos')
  });

  it('renders 3 todos', () => {
    cy.get('[data-cy="todo"]').should('have.length', 3);
    cy.get('[data-cy="todoLabel"]').eq(0).should('contain.text', 'first todo');
    cy.get('[data-cy="todoLabel"]').eq(1).should('contain.text', 'second todo');
    cy.get('[data-cy="todoLabel"]').eq(2).should('contain.text', 'third todo');
    cy.get('[data-cy="todoCheckbox"]').eq(0).should('be.checked');
  });
})
