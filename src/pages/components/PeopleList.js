import React, {useState} from 'react';
import {Col, Card, Row, Spinner, Modal, Button, Pagination} from 'react-bootstrap';
import {connect} from 'react-redux';
import PersonCard from './PersonCard';
import { closeProfileModal } from '../../reducer/modals/actions'
import { getPeoplePage } from '../../reducer/people/actions';
import PersonProfile from './PersonProfile';
import PersonWorld from './PersonWorld';
import PersonMovies from './PersonMovies';
import PersonStarships from './PersonStarships';

const PeopleList = ({people, person, modals, closeModal, getNewPage}) => {
    const [page, setPage] = useState(1);
    const handlePaging = (pageNumber) => {
        setPage(pageNumber);
        getNewPage(pageNumber);
    };
    return <>
    <Col lg={12}>
    <Card>
    <Card.Header as="h3">People</Card.Header>
    <Card.Body>
        <Row>
        {people.loading && <Spinner animation="grow" variant="info" size="lg" style={{margin: "auto"}} />}
        {!people.loading && people.data.map((p, index)=> <Col key={p.name} md={{span:2, offset: index % 5===0 ? 1 : 0 }}>
            <PersonCard currentPerson={p} />
        </Col>
            )}
        </Row>
    </Card.Body>
    <Card.Footer className="text-center">
    <Pagination style={{width: '25%', margin: 'auto'}}>
        <Pagination.Item active={page===1} onClick={() => handlePaging(1)} >{1}</Pagination.Item>
        <Pagination.Item active={page===2} onClick={() => handlePaging(2)} >{2}</Pagination.Item>
        <Pagination.Item active={page===3} onClick={() => handlePaging(3)} >{3}</Pagination.Item>
        <Pagination.Item active={page===4} onClick={() => handlePaging(4)} >{4}</Pagination.Item>
        <Pagination.Item active={page===5} onClick={() => handlePaging(5)} >{5}</Pagination.Item>
        <Pagination.Item active={page===6} onClick={() => handlePaging(6)} >{6}</Pagination.Item>
        <Pagination.Item active={page===7} onClick={() => handlePaging(7)} >{7}</Pagination.Item>
        <Pagination.Item active={page===8} onClick={() => handlePaging(8)} >{8}</Pagination.Item>
        <Pagination.Item active={page===9} onClick={() => handlePaging(9)} >{9}</Pagination.Item>
        </Pagination>
    </Card.Footer>
    </Card>
    </Col>

    <Modal show={modals} onHide={closeModal()}>
        <Modal.Header closeButton>
<Modal.Title>{person.profile.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{minWidth: '80%'}}>
            <Row style={{marginBottom: '15px'}}>
                <Col md={6}>
                    <Card bg="success" text="white">
                <Card.Header>Profile</Card.Header>
            <Card.Body>
                {person.profile.name && <PersonProfile />}
            </Card.Body>
            </Card>
                </Col>
                <Col md={6}>
                {person.world.name !== 'unknown' && <Card bg="secondary" text="white">
            <Card.Header>World</Card.Header>
            <Card.Body>
                 <PersonWorld /></Card.Body>
            </Card>}
                </Col>
                </Row><Row>
                <Col md={6}>
                    <Card bg="warning" text="white">
            <Card.Header>Films</Card.Header>
            <Card.Body>
                {person.movies.length > 0 && <PersonMovies />}</Card.Body>
            </Card>
                </Col>
                <Col md={6}>
                    {person.starships.length > 0 && <Card bg="info" text="white">
                        <Card.Header>Starships</Card.Header>
                        <Card.Body>
                            <PersonStarships /></Card.Body>
                    </Card>}
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>;
}

const mapStateToProps = ({people, person, modals})=>({
    people,
    person,
    modals
});

const mapDispatchToProps = dispatch => ({
    closeModal() {
        return () => {
            dispatch(closeProfileModal());
        }
    },
    getNewPage(pageNumber) {
        return dispatch(getPeoplePage(pageNumber));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);