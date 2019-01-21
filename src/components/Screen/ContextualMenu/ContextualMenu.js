import React from 'react';
import { Row, Col } from 'react-bootstrap';

const contextualMenu = (props) => {

    return (
        <Row>
            {props.options.map(option => {
                return (<Col xs={4} key={option}>
                    {option}
                </Col>)
            })}
        </Row>
    );
}

export default contextualMenu;