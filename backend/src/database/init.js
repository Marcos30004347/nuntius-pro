/* istanbul ignore file */
import { createClient } from "@supabase/supabase-js";

var database = undefined;

function initDB(jwt = "") {
  if (
    !process.env.PUBLIC_SUPABASE_URL ||
    !process.env.PUBLIC_SUPABASE_ANON_KEY
  ) {
    throw new Error(
      "Database ENV variables are not set. Make sure you have a .env file with PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  if (jwt) {
    return createClient(
      process.env.PUBLIC_SUPABASE_URL,
      process.env.PUBLIC_SUPABASE_ANON_KEY,
      {
        global: {
          headers: {
            Authorization: jwt,
          },
        },
      }
    );
  }

  return createClient(
    process.env.PUBLIC_SUPABASE_URL,
    process.env.PUBLIC_SUPABASE_ANON_KEY
  );
}

const getDBClient = (jwt = "") => {
  if (database == undefined) {
    database = initDB(jwt);
  }
  return database;
}

const setDBClient = (newDatabase) => {
  database = newDatabase;
}

export { getDBClient, setDBClient };