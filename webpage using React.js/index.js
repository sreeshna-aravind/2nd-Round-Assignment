import React, {Component} from 'react';

class inputdisplayComponent extends Component {

    render() {
        return (
            <div className="input">
	    <p><input type='text' id='num' placeholder='Enter expression'/></p>
	    <br/>
	    <button name="result" onclick{e => this.props.onclick(e.target.name)}>result</button>
	    </div>
    );
}
export default inputdisplayComponent;