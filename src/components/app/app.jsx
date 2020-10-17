import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "@components/welcome-screen/welcome-screen";
import AuthScreen from "@components/auth-screen/auth-screen";
import GameOverScreen from "@components/game-over-screen/game-over-screen";
import WinScreen from "@components/win-screen/win-screen";
import GameScreen from "@components/game-screen/game-screen";

import artistQuestionProp from "@components/artist-question-screen/artist-question.prop";
import genreQuestionProp from "@components/genre-question-screen/genre-question.prop";

const App = (props) => {

  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/result">
          <WinScreen />
        </Route>
        <Route exact path="/lose">
          <GameOverScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistQuestionProp, genreQuestionProp]).isRequired
  ),
};

export default App;
