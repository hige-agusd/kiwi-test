import React, { Component } from 'react';
import Navbar from '../../components/Pad/Navbar/Navbar';
import Numpad from '../../components/Pad/Numpad/Numpad';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../store/index';
import './Pad.css';

class Pad extends Component {
    state = { words: null, digits: '' };

    setText = digit => {
        this.setState({...this.state, digits: ''});
        this.props.setText(digit);
    }

    getWords = (digit) => {
        switch (digit) {
            case 0: this.setText(digit); break;
            case 1: this.setText(digit); 
                this.props.getWords(digit);
                break;
            default: let digits = this.state.digits + digit;
                this.setState({ ...this.state, digits: digits });
                this.props.getWords(digits);
        }
    };

    moveCursor = direction => {
        if (!this.props.words) return -1;
        let selected = [...this.props.selected];
        switch (direction) {
            case 'left': selected[1] -= 1; break;
            case 'right': selected[1] += 1; break;
            case 'up': selected[0] -= 1; break;
            case 'down': selected[0] += 1; break;
            default: console.log('Unexpected case');
        }
        const rows = ~~(this.props.words.length / 3);
        selected = [selected[0] < 0 ? rows - 1 : selected[0] % rows,
        selected[1] < 0 ? 2 : selected[1] % 3];
        this.props.moveCursor(selected);
    }

    render() {
        return (
            <Grid fluid={true} className={'pad'}>
                <Navbar fnc={this.moveCursor} selected={this.props.selected} />
                <Numpad fnc={this.getWords} />
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        words: state.suggestedWords,
        selected: state.selectedWord
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getWords: (digits) => dispatch(actions.getWords(digits)),
        moveCursor: (direction) => dispatch(actions.moveCursor(direction)),
        setText: (digit) => dispatch(actions.setText(digit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pad);
