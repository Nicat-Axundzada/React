import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
function App() {
  const SECS_PER_QUESTION = 30;
  const initialState = {
    questions: [],
    // 'loading', 'error', 'ready', 'active', 'finished'
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    secondsRemaining: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: "ready" };
      case "dataFailed":
        return { ...state, status: "error" };
      case "start":
        return {
          ...state,
          status: "active",
          secondsRemaining: state.questions.length * SECS_PER_QUESTION,
        };
      case "newAnswer":
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === state.questions[state.index].correctOption
              ? (state.points = state.questions[state.index].points)
              : state.points,
        };
      case "nextQuestion":
        return { ...state, index: state.index + 1, answer: null };
      case "finish":
        return { ...state, status: "finished" };
      case "restart":
        return { ...initialState, questions: state.questions, status: "ready" };
      case "tick":
        return {
          ...state,
          secondsRemaining: state.secondsRemaining - 1,
          status: state.secondsRemaining === 0 ? "finished" : state.status,
        };
      default:
        throw new Error("Unknown action");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const maxPoint = state.questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && (
          <StartScreen
            numQuestions={state.questions.length}
            onClick={() => {
              dispatch({ type: "start" });
            }}
          />
        )}
        {state.status === "active" && (
          <>
            <Progress
              index={state.index}
              numQuestions={state.questions.length}
              points={state.points}
              max={maxPoint}
              answer={state.answer}
            />
            <Question
              question={state.questions[state.index]}
              dispatch={dispatch}
              answer={state.answer}
            />
            <Footer>
              <Timer
                dispatch={dispatch}
                secondsRemaining={state.secondsRemaining}
              />
              <NextButton />
            </Footer>
          </>
        )}
        {state.status === "finished" && (
          <FinishScreen
            points={state.points}
            max={maxPoint}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
