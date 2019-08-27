import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-now'

// importing our own
import Emoji from '../Emoji/Emoji';

// importing from Material UI
import Button from '@material-ui/core/Button'

var rambang = require('kata-rambang');
var word = rambang();

class Bermasa extends Component {
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
                <h1><Countdown date={Date.now() + 60000} /></h1>
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
                                autoFocus
                            />
                        </div>
                    </form>
                </div>
                <h3 className="playPageInstruction">Tekan Enter bila dah habis taip.</h3>
                <Button variant='contained' component={Link} to='/malay' className="indexPlayPageButton" color='primary'>Utama</Button>
                <div style={{clear:"both"}}>
                    <br />
                    <h5>Berapa lajukah rekod dunia?</h5>
                    <a className="btn btn-primary jawapan" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        JAWAPAN
                    </a>
                    <div className="collapse" id="collapseExample">
                        <div className="infographicCredit">
                            Rujukan: <a href="https://www.ratatype.com/learn/average-typing-speed/">Ratatype</a>, <a href="https://en.wikipedia.org/wiki/Typing">Wikipedia</a>
                        </div>
                        <div className="card card-body jawapan">
                            Ada beberapa rekod dunia yang boleh dinyatakan.
                            <ul className="mobile-only">
                                <li><Emoji symbol="📝" label="star"/>Stella Pajunas - 216 wpm - IBM electric - QWERTY</li>
                                <li>Barbara Blackburn - 212 wpm - DSK</li>
                                <li>Guilherme Sandrini - 301.45 wpm - QWERTY</li>
                                <li>Sean Wrona - 256 - QWERTY</li>
                                <li><Emoji symbol="⭐️" label="star"/>Michael DeRoche - 318 wpm - QWERTY</li>
                            </ul>
                            <table className="table desktop-only">
                                <thead>
                                    <tr>
                                        <th scope="col">Nama</th>
                                        <th scope="col"><i>Words per minute</i>(wpm)</th>
                                        <th scope="col">Jenis Kekunci</th>
                                        <th scope="col">Susun atur Kekunci</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><Emoji symbol="📝" label="star"/>Stella Pajunas-Garnand</th>
                                        <td>216</td>
                                        <td>IBM electric</td>
                                        <td>QWERTY</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Barbara Blackburn</th>
                                        <td>212</td>
                                        <td>DSK</td>
                                        <td>Dvorak</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Guilherme Sandrini</th>
                                        <td>301.45</td>
                                        <td>Modern</td>
                                        <td>QWERTY</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sean Wrona</th>
                                        <td>256</td>
                                        <td>Modern</td>
                                        <td>QWERTY</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><Emoji symbol="⭐️" label="star"/>Michael DeRoche</th>
                                        <td>318</td>
                                        <td>Modern</td>
                                        <td>QWERTY</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="infographicContainer">
                            <a href="https://www.ratatype.com/learn/average-typing-speed/">
                                <img src="https://www.ratatype.com/static/i/average-typing-speed_en.png?v=1" title="Average typing speed" alt="Average typing speed" border="0" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bermasa;