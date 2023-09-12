import { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React main context
const store = createContext();

// Setting custom name for the context which is visible on react dev tools
store.displayName = "StoreContext";

// Material Dashboard 2 React reducer
function reducer(state, action) {
  switch (action.type) {
    case "SET_TESTWANGJING": {
      return { ...state, testWangjing: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Material Dashboard 2 React context provider
function StoreControllerProvider({ children }) {
  const initialState = {
    testWangjing: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);
  // console.log('controller', controller)
  // console.log('dispatch', dispatch)

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
  // console.log('value', value)

  return <store.Provider value={value}>{children}</store.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useStoreController() {
  const context = useContext(store);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the MaterialUIControllerProvider
StoreControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions

const setTestWangjing = (dispatch, value) =>
  dispatch({ type: "SET_TESTWANGJING", value });

export { useStoreController, StoreControllerProvider, setTestWangjing };
