import React from 'react';
import Key from '../Key/Key';
import FiveWayButton from './FiveWayButton';
import {Grid, Row} from 'react-bootstrap';
import './Navbar.css';

const navbar = (props) => {
     return (
        <Grid className={'row navbar'} >
            <Row >
                <Key chars={''} clicked={() => props.options('dict')} glyph={'earphone'} />
                <FiveWayButton selected={props.selected} ok={props.ok} fnc={props.fnc}/>
                <Key chars={''} clicked={() => props.options('')} glyph={'envelope'} />
            </Row>
        </Grid>
        );
}

export default navbar;