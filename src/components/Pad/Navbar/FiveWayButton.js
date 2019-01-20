import React from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import './FiveWayButton.css';

const key = (props) => {
    return (
    <Grid fluid={true} className={'five-way-btn col-xs-4'}>
        <Row>
            <Col xs={4} className={''} ></Col>
            <Col xs={4} onClick={() => props.fnc('up')} className={'arrow'} ><Glyphicon glyph={'menu-up'}/></Col>
            <Col xs={4} className={''} ></Col>
        </Row>
        <Row>
            <Col xs={4} onClick={() => props.fnc('left')} className={'arrow'} ><Glyphicon glyph={'menu-left'}/></Col>
            <Col xs={4} onClick={() => props.ok(-1)} className={''} ><Glyphicon glyph={'ok-sign'}/></Col>
            <Col xs={4} onClick={() => props.fnc('right')} className={'arrow'} ><Glyphicon glyph={'menu-right'}/></Col>
        </Row>
        <Row>
            <Col xs={4} className={''} ></Col>
            <Col xs={4} onClick={() => props.fnc('down')} className={'arrow'} ><Glyphicon glyph={'menu-down'}/></Col>
            <Col xs={4} className={''} ></Col>
        </Row>
    </Grid>
    );
}

export default key;