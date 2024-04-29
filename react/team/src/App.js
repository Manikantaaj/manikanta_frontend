
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './components/Team';
import ContentTeam from './components/ContentTeam';
import CardImage from './components/CardImage';

function App() {
  return (
    <div className="App">
     <Team/>
     <ContentTeam/>
     <CardImage/>
    </div>
  );
}

export default App;
