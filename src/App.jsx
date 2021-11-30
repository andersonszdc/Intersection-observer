import './App.css';
import Animation from './Animation';
import Animation2 from './Animation2';

function App() {
  return (
    <div className="boxes">
      <Animation animation="fade-right">
        <div id="boxOne" className="box">1</div>
      </Animation>
      <div className="box">2</div>
      <div className="box">3</div>
      <Animation2>
        {(inView) => (
          <div id="boxFour" className={`box ${inView ? 'fade-right' : ''}`}>2</div>
        )}
      </Animation2>
      <div className="box">5</div>
    </div>
  );
}

export default App;
