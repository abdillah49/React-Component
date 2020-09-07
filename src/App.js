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
  const PastMeetUpData = [
    {
      id: 0,
      date: '27 November 2017',
      title: '#39 JakartaJS April Meetup with Kumparan',
      went: '139',
    },
    {
      id: 1,
      date: '27 November 2017',
      title: '#38 JakartaJS April Meetup with Blibli',
      went: 113,
    },
    {
      id: 2,
      date: '27 November 2017',
      title: '#37 JakartaJS April Meetup with Hacktiv8',
      went: 110,
    }
  ]

  return (
    <div className="App">
      <header>
            <div id="meetupNow">
                <div className="inner">
                  <Card event="Hacktiv8 Meetup" location="Jakarta, Indonesia" eventDate="31 Agustus 2020" member="1,078" organizer="Muhammad Abdillah" />      
                </div>
            </div>
        </header>
        <section>
          <NextMeetUp/>
          <About/>
          <Member/>
          <PastMeetUp data={PastMeetUpData}/>
        </section>
        <Footer/>
    </div>
  );
}

export default App;
