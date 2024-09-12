import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Unknown action");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`http://localhost:3000/questions`);
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        console.log("Fetch error", error.message);
        dispatch({ type: "dataFailed" });
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/5</p>
        <p>Question</p>
      </Main>
    </div>
  );
};

export default App;
