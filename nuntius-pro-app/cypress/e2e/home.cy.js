/* eslint-disable no-undef */
import { Routes } from "../constants/routes";

describe("Home", () => {
  beforeEach(() => {
    const data = {
      user: {
        username: "teste",
        email: "teste@teste.com",
      },
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjcxMjgxNzI2LCJzdWIiOiI0YTM0ZTVlMi1kYmMxLTRjYzctOTUxNS1iMWRkMzdjNGExM2QiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsidXNlcm5hbWUiOiJ0ZXN0ZSJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNjcwNjc3NzI2fV0sInNlc3Npb25faWQiOiIzYmY0NGQzMC1kZmY2LTQ3NmYtOTgxNS00ZTc4MDg0ZmNiNzgifQ.n9mNC033V-fxAwwsx9siyEwCm65En3NjeRSjUdELUjw",
    };

    window.localStorage.setItem("nuntius", JSON.stringify(data));
  });

  describe("Quando o usuario acessa a pagina de home", () => {
    it("Renderiza o formulario da home", () => {
      cy.visit(Routes.HOME);

      cy.get("h1").should("contain.text", "NUNTIUS");

      cy.get("#entrar")
        .invoke("attr", "placeholder")
        .should("contain", "Nome da sala");

      cy.get("#criar")
        .invoke("attr", "placeholder")
        .should("contain", "Nome da sala");

      cy.get("button")
        .should("contain.text", "Entrar")
        .should("contain.text", "Criar");
    });
  });

  describe("Quando o usuario tenta entrar em uma sala", () => {
    describe("E a sala ainda não existe", () => {
      it("Exibe componente de erro e não entra na sala", () => {
        cy.visit(Routes.HOME);

        cy.get("#entrar").type(`${new Date().toISOString()}`);
        cy.get("button").contains("Entrar").click();

        cy.get("#1").should(
          "contain.text",
          "Não foi possível encontrar a sala."
        );
      });
    });
  });

  describe("Quando o usuario tenta criar uma sala", () => {
    describe("E a sala ainda não existe", () => {
      it("A sala é criada e o usuário entra na sala", () => {
        cy.visit(Routes.HOME);

        cy.get("#criar").type(`${new Date().toISOString()}`);
        cy.get("button").contains("Criar").click();

        cy.get("#1").should("contain.text", "Sala criada com sucesso!");

        cy.url().should("include", Routes.ROOM);

        cy.get("button").contains("Sair da sala").click();
      });
    });
  });

  // describe("Quando o usuario preenche o formulario de login", () => {
  //   describe("E os dados sao invalidos (email fora de formato ou senha nao preenchida)", () => {
  //     it("Exibe helper text sobre dado invalido e mantem botao de entrar desabilitado", () => {
  //       cy.visit(Routes.LOGIN);

  //       cy.get("#email").type("email.com").blur();

  //       cy.contains("Por favor, digite um endereço de email válido.");
  //       cy.get("button").should("contain.text", "Entrar").should("be.disabled");
  //     });
  //   });

  //   describe("E os dados sao validos", () => {
  //     it("Email e senha refletem o que foi digitado e o botao de entrar fica habilitado", () => {
  //       cy.visit(Routes.LOGIN);

  //       cy.get("#email").type("email@email.com");
  //       cy.get("#password").type("senhaforte123");

  //       cy.get("#email").invoke("val").should("contain", "email@email.com");
  //       cy.get("#password").invoke("val").should("contain", "senhaforte123");
  //     });
  //   });
  // });

  // describe("Quando o usuario clica no link para cadastro", () => {
  //   it("Renderiza o formulario de sign up", () => {
  //     cy.visit(Routes.LOGIN);

  //     cy.get("#signUp").click();

  //     cy.url().should("include", Routes.SIGN_UP);
  //   });
  // });

  // describe("Quando o usuario clica no link para recuprecao de senha", () => {
  //   it("Renderiza o formulario de recuperar senha", () => {
  //     cy.visit(Routes.LOGIN);

  //     cy.get("#forgotPassword").click();

  //     cy.url().should("include", Routes.FORGOT_PASSWORD);
  //   });
  // });
});
