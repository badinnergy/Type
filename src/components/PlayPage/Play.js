import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';

// importing our own
import Emoji from '../Emoji/Emoji';

// importing from Material UI
import Button from '@material-ui/core/Button'

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
        
        const capitalized = word.charAt().toUpperCase() + word.slice(1)

        if (this.state.input === word || this.state.input === capitalized) {
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
        return (
            <div className="container">
                <h1 className="playPageText">{this.state.word}</h1>
                <h1 className="playPageText">{this.state.check}</h1>
                <h1 className="playPageText">{this.state.input ? this.state.input : "..."}</h1>
                <div className="playPageInputContainer">
                    <form onSubmit={this.check}>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control playPageInput"
                                aria-describedby="answerHelp"
                                value={this.state.input}
                                ref={this.textfield}
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>
                <h3 className="playPageInstruction">Press Enter when you're done typing</h3>
                <Button variant='contained' component={Link} to='/' className="indexPlayPageButton" color='primary'>Home</Button>
            </div>
        );
    }
}

export default Play;