const storageKey = 'nuntius';

const initialStorage = {
  user: {
    name: null,
    email: null
  }
};

const getAll = () => {
  return window.localStorage.getItem(storageKey);
};

const getItem = (key) => {
  const appStorage = getAll();
  const storageJSON = JSON.parse(appStorage);
  return storageJSON ? storageJSON[key] : null;
};

const saveItem = (key, item) => {
  const appStorage = JSON.parse(window.localStorage.getItem(storageKey));
  const newItem = { [key]: item };
  const newState = { ...appStorage, ...newItem };
  return window.localStorage.setItem(storageKey, JSON.stringify(newState));
};

const init = () => {
  if (getAll()) return;

  window.localStorage.setItem(storageKey, JSON.stringify(initialStorage));
};

const clear = () => {
  return window.localStorage.removeItem(storageKey);
};

export const storageService = {
  getAll,
  getItem,
  saveItem,
  init,
  clear
};
