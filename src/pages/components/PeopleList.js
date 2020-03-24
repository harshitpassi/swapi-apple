import React from 'react';
import {Col, Card, Row, Spinner} from 'react-bootstrap';
import {connect} from 'react-redux';
import PersonCard from './PersonCard';

const PeopleList = ({people}) => 
    <Col lg={12}>
    <Card>
    <Card.Header as="h3">People</Card.Header>
    <Card.Body>
        <Row>
        {people.loading && <Spinner animation="grow" variant="info" size="lg" style={{margin: "auto"}} />}
        {!people.loading && people.data.map((p, index)=> <Col md={{span:2, offset: index % 5===0 ? 1 : 0 }}>
            <PersonCard key={p.name} currentPerson={p} />
        </Col>
            )}
        </Row>
    </Card.Body>
    </Card>
    </Col>;

const mapStateToProps = ({people})=>({
    people,
});

export default connect(mapStateToProps)(PeopleList);