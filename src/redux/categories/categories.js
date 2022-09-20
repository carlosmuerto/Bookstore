const initState = { status: 'please Check' };

// Actions
const CHECKSTATUS = 'bookstore/categories/CHECKSTATUS';

const checkStatusAction = () => ({ status: 'Under construction' });

// Reducer
const reducer = (prevState = initState, action = {}) => {
  switch (action.type) {
    case CHECKSTATUS: return checkStatusAction();
    default: return prevState;
  }
};

// Action Creators

const checkStatus = () => ({ type: CHECKSTATUS });

export default reducer;
export { checkStatus };
