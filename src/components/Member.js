import React from 'react';
import Avatar from './avatar/Avatar2';
import { Row, Col } from 'react-bootstrap';

const Member = () => {
    return (
        <div id="members">
            <div className="inner">
                <div className="title">Members</div>
                <div className="content">
                    <Row>
                        <Col sm={3} className="member-img">
                            <div><Avatar/></div>
                        </Col>
                        <Col sm={9}>
                            <h3>Organizers</h3>
                            <div className="member-detail">
                                <Row className="item">
                                    <label>Adhy Wiranata</label>
                                    <div className="item-val">4 Others</div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Member;