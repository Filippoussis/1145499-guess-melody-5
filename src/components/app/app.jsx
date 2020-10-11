import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "@components/welcome-screen/welcome-screen";
import ArtistQuestionScreen from "@components/artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "@components/genre-question-screen/genre-question-screen";
import AuthScreen from "@components/auth-screen/auth-screen";
import GameOverScreen from "@components/game-over-screen/game-over-screen";
import WinScreen from "@components/win-screen/win-screen";
import GameScreen from "@components/game-screen/game-screen";


const App = (props) => {

  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

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
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
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
  questions: PropTypes.array.isRequired,
};

export default App;
