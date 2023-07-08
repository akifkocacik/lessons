import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Route from './components/shared/Route';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
