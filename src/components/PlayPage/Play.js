import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

// importing our own
import Emoji from '../Emoji/Emoji';

// importing from Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

var rambang = require('kata-rambang');
var word = rambang();

class Play extends Component {
    constructor(props) {
        super(props);
        this.textfield = createRef();
        this.state = {
            input: '',
            word: word,
            check: <Emoji symbol="❔" label="tick"/>,
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value,
        });
    };

    check = e => {
        e.preventDefault();
        
        if (this.state.input === word) {
            this.setState({
                check: <Emoji symbol="✅" label="tick"/>,
            })
        } else if (this.state.input !== word) {
            this.setState({
                check: <Emoji symbol="❌" label="cross"/>,
            })
        } else {
            this.setState({
                check: <Emoji symbol="❔" label="question mark"/>,
            })
        }

        setTimeout( function() {
            this.newWord()
        }.bind(this), 300)
    }

    newWord = () => {
        word = rambang();
        this.setState({
            word: word,
            input: '',
            check: <Emoji symbol="❔" label="question mark"/>,
        });
    }
    
    render() {
        const { classes } = this.props;
        
        return (
            <div>
                <h1 style={custom.text}>{this.state.word}</h1>
                <h1 style={custom.text}>{this.state.check}</h1>
                <h1 style={custom.text}>{this.state.input}</h1>
                <form className={classes.container} onSubmit={this.check} autoComplete="off">
                    <TextField
                    id="outlined-bare"
                    className={classes.textField}
                    ref={this.textfield}
                    value={this.state.input}
                    margin="normal"
                    variant="outlined"
                    autoFocus
                    style={custom.input}
                    onChange ={this.handleChange}
                    />
                </form>
                <h3 style={custom.instruction}>Press Enter when you're done typing</h3>
            </div>
        );
    }
}

const custom = {
    input: {
        margin: 'auto',
        position: 'fixed',
        bottom: '40%',
        right: '44%',
        textAlign: 'center',
    },
    text: {
        marginTop: '3%',
    },
    instruction: {
        position: 'fixed',
        bottom: '35%',
        right: '41%',
    },
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

Play.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Play);