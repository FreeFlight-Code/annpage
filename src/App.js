import React, { Component } from 'react';
import './App.scss';
import annette from '../src/images/annette_hat.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'>
          <div className='social'>social media icons</div>
          <div className='nav'>navigation bar or welcome banner</div>
        </header>
        <div className='mainImg'>
          <div id='mainImgContainer'></div>
          <div className='text'>
            <h1>TRANSFORM YOUR LIFE</h1>
            <h4>CLOSE THE GAP BETWEEN WHERE YOU ARE TODAY - AND WHERE YOU WANT TO BE</h4>
            <button>Take our free Life Assessment</button>
          </div>
        </div>
        <div className='callMe'>
          Sign Up for a Complimentary Results Coaching Session Today!
          <button id='callButton'>Schedule Your Call</button>
        </div>
        <div className='direction'>
          <div className='cardContainer one'>
          <div className='cardImage'></div>
            <h4>DO YOU WANT TO IMPROVE YOUR BUSINESS</h4>
            <h6>Get the insight, strategies, and tools you need to get the edge over your competition and drive your business to the next level.</h6>
            <button className='clear'>LEARN MORE</button>
          </div>
          <div className='cardContainer two'>
            <div className='cardImage'></div>
            <h4>{'Do you want to Improve your personal life?'.toUpperCase()}</h4>
            <h6>Are you successful and truly happy, or are there parts of you that are unfulfilled? The extraordinary life you want is within your grasp, but you need clarity and focus to achieve it..</h6>
            <button className='clear'>LEARN MORE</button>
          </div>
        </div>
        <div className='aboutMe'>
          <img align='right' alt='annette' src={annette}></img>
          <div>
            <h4>About Annette</h4>
            <h5>World authority on leadership psychology</h5>
            <p>Annette is an entrepreneur, best-selling author, philanthropist and the nation’s #1 Life and Business Strategist. A recognized authority on the psychology of leadership, negotiations and organizational turnaround, she has served as an advisor to leaders around the world for more than 40 years.</p>
            <p className='clickable'>Read more...</p>
          </div>
        </div>
        {/* <div className='testimonials'>
          Testimonials
        </div> */}
      </div>
    );
  }
}

export default App;
