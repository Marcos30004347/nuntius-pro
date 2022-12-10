/* eslint-disable no-undef */
import { Routes } from "../constants/routes";

describe("Room", () => {
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

    cy.visit(Routes.HOME);

    cy.get("#criar").type(`${new Date().toISOString()}`);
    cy.get("button").contains("Criar").click();
  });

  describe("Quando o usuario acessa a pagina de room", () => {
    it("Renderiza o componente de chat", () => {
      cy.wait(1000);
      cy.get("h2").should("contain.text", "NUNTIUS");
      cy.get("#msg-input")
        .invoke("attr", "placeholder")
        .should("contain", "Digite uma mensagem");
    });
  });

  describe("Quando o usuario manda uma mensagem", () => {
    it("Manda uma mensagem", () => {
      cy.wait(1000);

      cy.get("#msg-input").type("Ola mundo!");

      cy.get("#send-msg").click();

      cy.get("div")
        .should("have.class", "rce-mbox-text right")
        .contains("Ola mundo!");
    });
  });
});
