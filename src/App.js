import React, { Component } from 'react';
import './App.scss';
import annette from '../src/images/annette_hat.jpg';
import facebook from '../src/images/facebook.png';
import instagram from '../src/images/instagram.png';
import twitter from '../src/images/twitter.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'>
          <div className='social'>
            <span className='left'>
                <span>1-800-234-5678</span>
                <img src={facebook} className='icon facebook'></img>
                <img src={instagram} className='icon instagram'></img>
                <img src={twitter} className='icon twitter'></img>
            </span>
            <span className='right'>LOGIN</span>
          </div>
          <div className='nav'>ANNETTE SHAW</div>
        </header>
        <div className='mainImg'>
          <div id='mainImgContainer'></div>
          <div className='text'>
            <h1>TRANSFORM YOUR LIFE</h1>
            <h5>CLOSE THE GAP BETWEEN WHERE YOU ARE TODAY - AND WHERE YOU WANT TO BE</h5>
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
            <h4>HAVE YOU BEEN THROUGH TRAUMA?</h4>
            <h6>Have you known trauma and abuse?  Are you still standing but need help getting past blockages that are preventing you from being your authentic self?</h6>
            <button className='clear'>LEARN MORE</button>
          </div>
          <div className='cardContainer two'>
            <div className='cardImage'></div>
            <h4>ARE YOU ATTRACTING THE WRONG MAN?</h4>
            <h6>Where is your God man?  Do you want to foster a man's desire to care and protect you?  Are you trying to save a relationship that feels like it is lost?</h6>
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
        <div className='subscribe'>
          <div>Subscribe to Annette's Newsletter</div>
          <div>Get the latest news and stories delivered to your inbox.</div>
          <button>SIGN UP NOW</button>
        </div>
        <footer>{'All Rights Reserved 2019 Annette Shaw' + String.fromCharCode(169)}</footer>
      </div>
    );
  }
}

export default App;
