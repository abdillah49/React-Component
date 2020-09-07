import React from 'react';
import Images from '../images/Images';
import { Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import meetUpImages from '../../assets/images/org-1.jpg';

const Card = ({ event, location, eventDate, member, organizer }) => {
    return (
        <Row>
            <Col sm={3} className="event-img">
                <div>
                    <Images src={meetUpImages} alt="Card MeetUp1" className="avatar" />
                </div>
            </Col>
            <Col sm={9}>
                <div className="title">{event}</div>
                <div className="event-detail">
                    <Row className="item">
                        <label>Location</label>
                        <div className="item-val">{location}</div>
                    </Row>
                    <Row className="item">
                        <label>Date</label>
                        <div className="item-val">{eventDate}</div>
                    </Row>
                    <Row className="item">
                        <label>Members</label>
                        <div className="item-val">{member}</div>
                    </Row>
                    <Row className="item">
                        <label>Organizers</label>
                        <div className="item-val">{organizer}</div>
                    </Row>
                </div>
                <Button href="#" size="sm" variant="info">Join Us</Button>
            </Col>
        </Row>
    );
}

Card.propType  = {
    event : PropTypes.string.isRequired,
    location : PropTypes.string.isRequired,
    eventDate : PropTypes.string.isRequired,
    member : PropTypes.string.isRequired,
    organizer : PropTypes.string.isRequired
}

Card.defaultProps = {
    event : "Event Here..",
    location : "Location Here..",
    eventDate : "Date",
    member : "0",
    organizer : "Organizer Name"
}

export default Card;