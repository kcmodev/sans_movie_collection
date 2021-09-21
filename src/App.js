import logo from './logo.svg';
import './App.css';
import AddMovie from "./components/AddMovie";
import DisplayStoredMovies from "./components/StoredMovies";

function App() {
  return (

    <div className="App">
        <AddMovie />
        <DisplayStoredMovies />
    </div>
  );
}

export default App;
