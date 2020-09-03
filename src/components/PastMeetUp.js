import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const PastMeetUp = () => {
    return (
        <div id="meetupPast">
            <div className="inner">
                <div className="title">Past Meetups</div>
                <div className="content">
                    <Row>
                        <Col sm={4} className="item-past">
                            <div className="inner">
                                <h3>27 November 2020</h3>
                                <div className="judul">#39 JakartaJS April Meetup with Kumparan</div>
                                <div className="went">139 <span>went</span></div>
                                <Button href="#" size="sm" variant="info">View</Button>
                            </div>
                        </Col>
                        <Col sm={4} className="item-past">
                            <div className="inner">
                                <h3>19 Oktober 2020</h3>
                                <div className="judul">#38 JakartaJS April Meetup with BliBli</div>
                                <div className="went">113 <span>went</span></div>
                                <Button href="#" size="sm" variant="info">View</Button>
                            </div>
                        </Col>
                        <Col sm={4} className="item-past">
                            <div className="inner">
                                <h3>15 September 2020</h3>
                                <div className="judul">#37 JakartaJS April Meetup with Hacktiv8</div>
                                <div className="went">110 <span>went</span></div>
                                <Button href="#" size="sm" variant="info">View</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default PastMeetUp;