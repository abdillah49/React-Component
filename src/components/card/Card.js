import React from 'react';
import Avatar from '../avatar/Avatar';
import { Button, Row, Col } from 'react-bootstrap';

const Card = () => {
    return (
        <Row>
            <Col sm={3} className="event-img">
                <div><Avatar/></div>
            </Col>
            <Col sm={9}>
                <div className="title">Hacktiv8 Meetup</div>
                <div className="event-detail">
                    <Row className="item">
                        <label>Location</label>
                        <div className="item-val">Jakarta, Indonesia</div>
                    </Row>
                    <Row className="item">
                        <label>Date</label>
                        <div className="item-val">31 Agustus 2020</div>
                    </Row>
                    <Row className="item">
                        <label>Members</label>
                        <div className="item-val">1,078</div>
                    </Row>
                    <Row className="item">
                        <label>Organizers</label>
                        <div className="item-val">Adhy Wiranata</div>
                    </Row>
                </div>
                <Button href="#" size="sm" variant="info">Join Us</Button>
            </Col>
        </Row>
    );
}

export default Card;