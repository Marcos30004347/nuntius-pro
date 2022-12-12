import { signupHandler, signinHandler } from "../src/controllers/auth";
import { setDBClient } from "../src/database/init";
import { mockSupabaseSuccess, mockSupabaseError } from  "./mock/supabase.mock"

describe('Testing authentication routes', () => {

  test('signup test success', async () => {
    setDBClient(mockSupabaseSuccess);
    const req = {
      body: {
        email: "existent_user@mail.com",
        username: "existent_user",
        password: "password"
      }
    };

    const resp = {
      jsonResponse: {},
      json: function(response) { this.jsonResponse = response; return this; },
      statusCode: 0,
      status: function(receivedStatus) { this.statusCode = receivedStatus; return this; }
    };

    const signupResult = await signupHandler(req, resp);
    expect(signupResult.jsonResponse.access_token).toBe(123);
  });


  test('signin test success', async () => {
    setDBClient(mockSupabaseSuccess);
    const req = {
      body: {
        email: "existent_user@mail.com",
        password: "password"
      }
    };

    const resp = {
      jsonResponse: {},
      json: function(response) { this.jsonResponse = response; return this; },
      statusCode: 0,
      status: function(receivedStatus) { this.statusCode = receivedStatus; return this; }
    };

    const signupResult = await signinHandler(req, resp);
    expect(signupResult.jsonResponse.access_token).toBe(123);
  });

  test('signup test error', async () => {
    setDBClient(mockSupabaseError);
    const req = {
      body: {
        email: "existent_user@mail.com",
        username: "existent_user",
        password: "password"
      }
    };

    const resp = {
      jsonResponse: {},
      json: function(response) { this.jsonResponse = response; return this; },
      statusCode: 0,
      status: function(receivedStatus) { this.statusCode = receivedStatus; return this; }
    };

    const signupResult = await signupHandler(req, resp);
    expect(signupResult.statusCode).toBe(400);
  });

  test('signin test error', async () => {
    setDBClient(mockSupabaseError);
    const req = {
      body: {
        email: "existent_user@mail.com",
        password: "password"
      }
    };

    const resp = {
      jsonResponse: {},
      json: function(response) { this.jsonResponse = response; return this; },
      statusCode: 0,
      status: function(receivedStatus) { this.statusCode = receivedStatus; return this; }
    };

    const signupResult = await signinHandler(req, resp);
    expect(signupResult.statusCode).toBe(400);
  });

})
