export const getItem = (key, defaultValue = []) => {
  try {
    const storedItems = localStorage.getItem(key);
    return storedItems ? JSON.parse(storedItems) : defaultValue;
  } catch (error) {
    console.log(error);
  }
};

export const setItem = (key, items) => {
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch (error) {
    console.log(error);
  }
};
