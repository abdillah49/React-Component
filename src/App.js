import React from 'react';

import Card from './components/card/Card';
import NextMeetUp from './components/NextMeetUp';
import About from './components/About';
import Member from './components/Member';
import PastMeetUp from './components/PastMeetUp';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <header>
            <div id="meetupNow">
                <div className="inner">
                  <Card/>      
                </div>
            </div>
        </header>
        <section>
          <NextMeetUp/>
          <About/>
          <Member/>
          <PastMeetUp/>
        </section>
        <Footer/>
    </div>
  );
}

export default App;
