/* eslint-disable no-undef */
import { Routes } from "../constants/routes";

describe("Login", () => {
  describe("Quando o usuario acessa a pagina de login", () => {
    it("Renderiza o formulario de login", () => {
      cy.visit(Routes.LOGIN);

      cy.get("h1").should("contain.text", "NUNTIUS");
      cy.get("#email")
        .invoke("attr", "placeholder")
        .should("contain", "Digite seu email");
      cy.get("#password")
        .invoke("attr", "placeholder")
        .should("contain", "Digite a sua senha");
      cy.get("button").should("contain.text", "Entrar").should("be.disabled");
      cy.get("#signUp").eq(0).should("contain.text", "Cadastrar");
      cy.get("#forgotPassword").eq(0).should("contain.text", "Esqueci a Senha");
    });
  });

  describe("Quando o usuario preenche o formulario de login", () => {
    describe("E os dados sao invalidos (email fora de formato ou senha nao preenchida)", () => {
      it("Exibe helper text sobre dado invalido e mantem botao de entrar desabilitado", () => {
        cy.visit(Routes.LOGIN);

        cy.get("#email").type("email.com").blur();

        cy.contains("Por favor, digite um endereço de email válido.");
        cy.get("button").should("contain.text", "Entrar").should("be.disabled");
      });
    });

    describe("E os dados sao validos", () => {
      it("Email e senha refletem o que foi digitado e o botao de entrar fica habilitado", () => {
        cy.visit(Routes.LOGIN);

        cy.get("#email").type("email@email.com");
        cy.get("#password").type("senhaforte123");

        cy.get("#email").invoke("val").should("contain", "email@email.com");
        cy.get("#password").invoke("val").should("contain", "senhaforte123");
      });
    });
  });

  describe("Quando o usuario clica no link para cadastro", () => {
    it("Renderiza o formulario de sign up", () => {
      cy.visit(Routes.LOGIN);

      cy.get("#signUp").click();

      cy.url().should("include", Routes.SIGN_UP);
    });
  });

  describe("Quando o usuario clica no link para recuprecao de senha", () => {
    it("Renderiza o formulario de recuperar senha", () => {
      cy.visit(Routes.LOGIN);

      cy.get("#forgotPassword").click();

      cy.url().should("include", Routes.FORGOT_PASSWORD);
    });
  });
});
