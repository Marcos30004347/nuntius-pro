const mockSupabaseSuccess = {
  auth: {
    signUp: async function(_emailAndPassword, _userMetaData) {
      return { user: {}, session: {access_token: 123}, error: undefined };
    },

    signIn: async function(_emailAndPassword, _userMetaData) {
      return { data: {user: {}, access_token: 123}, error: undefined };
    },

    api: {
      getUser: async function(_token) {
        return {error: undefined, user: {
          email: "email@email.com",
          user_metadata: {
            username: "username",
            image_url: "image_url"
          }
        }}
      },

      updateUser: async function(_token, _data) {
        return {error: undefined, user: {
          id: "id"
        }};
      }
    }
  },

  storage: {
    from: function(_storageName) {
      return this.storageDatabase;
    },

    storageDatabase: {
      remove: async function (_listOfDomains) {
        return { };
      },

      upload: async function (_filename, _imagedata, _metadata) {
        return { error: undefined, data: {} };
      },

      getPublicUrl: function (_filename) {
        return { publicURL: "publicURL" };
      }
    }
  },
};

const mockSupabaseError = {
  auth: {
    signUp: async function(_emailAndPassword, _userMetaData) {
      return { user: {}, session: {}, error: "Error" };
    },

    signIn: async function(_emailAndPassword, _userMetaData) {
      return { data: {}, error: "Error" };
    },

    api: {
      getUser: async function(_token) {
        return {error: "Error", user: {} }
      },

      updateUser: async function(_token, _data) {
        return {error: "Error", user: undefined};
      }
    }
  },

  storage: {
    from: function(_storageName) {
      return this.storageDatabase;
    },

    storageDatabase: {
      remove: async function (_listOfDomains) {
        return { error: "Error" };
      },

      upload: async function (_filename, _imagedata, _metadata) {
        return { error: "Error", data: {} };
      },
    }
  },
};

export { mockSupabaseSuccess, mockSupabaseError };