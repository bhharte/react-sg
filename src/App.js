import './App.css';
import Game from './components/game/Game';
import bunImg from './assets/images/bunny.png';
import racImg from './assets/images/raccoon.png';
import squImg from './assets/images/squirrel.png';
import hounImg from './assets/images/hound.png';


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: racImg,
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squImg,
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunImg,
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: hounImg
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
