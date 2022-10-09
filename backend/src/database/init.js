import { createClient } from "@supabase/supabase-js";

function initDB(jwt) {
  if (!process.env.PUBLIC_SUPABASE_URL || !process.env.PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(
      "Database ENV variables are not set. Make sure you have a .env file with PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY",
    );
  }

  if (jwt) {
    return createClient(process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY, {
      global: {
        headers: {
          Authorization: jwt,
        },
      },
    });
  }

  return createClient(process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY);
}

export function getDBClient(jwt) {
  return initDB(jwt);
}
