import React from 'react';
import Key from '../Key/Key';
import FiveWayButton from './FiveWayButton';
import {Grid, Row} from 'react-bootstrap';
import './Navbar.css';

const navbar = (props) => {
    const callBtn = () => {
        console.log('call');
    };
    const smsBtn = () => {
        console.log('SMS');
    }
    
    return (
        <Grid className={'row navbar'} >
            <Row >
                <Key chars={''} clicked={callBtn} glyph={'earphone'} />
                <FiveWayButton selected={props.selected} fnc={props.fnc}/>
                <Key chars={''} clicked={smsBtn} glyph={'envelope'} />
            </Row>
        </Grid>
        );
}

export default navbar;