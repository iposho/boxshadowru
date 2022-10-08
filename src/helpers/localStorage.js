const isLocalStorageAvailable = () => {
  const test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export const setStateToLocalStorage = (state) => {
  if (isLocalStorageAvailable()) {
    console.log('complete');
    localStorage.setItem('boxshadowru', JSON.stringify(state));
  }
};

export const getStateFromLocalStorage = (state) => {
  const localState = localStorage.getItem('boxshadowru');

  if (localState) {
    return JSON.parse(localState);
  }
  return state;
};
