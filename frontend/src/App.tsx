import './App.css';
import HeadingSection from './components/HeadingSection';
import TeamList from './components/TeamList';
import teamsData from './CollegeBasketballTeams.json';

function App() {
  // Load teams from JSON and pass data into presentational components.
  return (
    <main className="app-shell">
      <HeadingSection teamCount={teamsData.teams.length} />
      <TeamList teams={teamsData.teams} />
    </main>
  );
}

export default App;
