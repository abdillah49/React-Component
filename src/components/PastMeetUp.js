import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PastMeetUp = ({ data }) => {
    return (
        <div id="meetupPast">
            <div className="inner">
                <div className="title">Past Meetups</div>
                <div className="content">
                    <Row>
                        { data.map((list) => (
                            <Col sm={4} className="item-past" key={list.id}>
                                <div className="inner">
                                    <h3>{list.date}</h3>
                                    <div className="judul">{list.title}</div>
                                    <div className="went">{list.went} <span>went</span></div>
                                    <Button href="#" size="sm" variant="info">View</Button>
                                </div>
                            </Col>
                        )) }
                    </Row>
                </div>
            </div>
        </div>
    );
}

PastMeetUp.propType  = {
    date : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    went : PropTypes.string
}

PastMeetUp.defaultProps = {
    date : "Date",
    title : "Title Here..",
    went : "0"
}

export default PastMeetUp;