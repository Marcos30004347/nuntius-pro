/* eslint-disable no-undef */
import { Routes } from "../constants/routes";

describe("Signup", () => {
  describe("Quando o usuario acessa a pagina de signup", () => {
    it("Renderiza o formulario de signup", () => {
      cy.visit(Routes.SIGN_UP);

      cy.get("h1").should("contain.text", "NUNTIUS");

      cy.get("#name")
        .invoke("attr", "placeholder")
        .should("contain", "Digite seu nome");

      cy.get("#username")
        .invoke("attr", "placeholder")
        .should("contain", "Digite seu username");

      cy.get("#email")
        .invoke("attr", "placeholder")
        .should("contain", "Digite seu email");

      cy.get("#password")
        .invoke("attr", "placeholder")
        .should("contain", "Digite a sua senha");

      cy.get("#confirmPassword")
        .invoke("attr", "placeholder")
        .should("contain", "Confirme a sua senha");

      cy.get("#about")
        .invoke("attr", "placeholder")
        .should("contain", "Conte um pouco sobre você");

      cy.get("button").should("contain.text", "Entrar").should("be.disabled");
    });
  });

  describe("Quando o usuario preenche o formulario de SignUp", () => {
    describe("E os dados sao invalidos (email fora de formato ou senha nao preenchida)", () => {
      it("Exibe helper text sobre dado invalido e mantem botao de entrar desabilitado", () => {
        cy.visit(Routes.SIGN_UP);

        cy.get("#email").type("email.com").blur();

        cy.contains("Por favor, digite um endereço de email válido.");
        cy.get("button").should("contain.text", "Entrar").should("be.disabled");
      });
    });

    describe("E os dados sao validos", () => {
      it("Email e senha refletem o que foi digitado e o botao de entrar fica habilitado", () => {
        cy.visit(Routes.SIGN_UP);

        cy.get("#email").type("email@email.com");
        cy.get("#password").type("senhaforte123");

        cy.get("#email").invoke("val").should("contain", "email@email.com");
        cy.get("#password").invoke("val").should("contain", "senhaforte123");
      });
    });
  });

  describe("Quando o usuario clica no link para login", () => {
    it("Renderiza o formulario de login", () => {
      cy.visit(Routes.SIGN_UP);

      cy.get("span").click();

      cy.url().should("include", Routes.LOGIN);
    });
  });
});
