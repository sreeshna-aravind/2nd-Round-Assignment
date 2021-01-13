import React, { Component } from 'react';
import './App';
import ResultComponent from './components/ResultComponent';
import inputdisplayComponent from "./components/inputdisplayComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "result"){
            this.calculate()
        }

        

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
               
                result: (eval(this.state.result) || "" ) + ""
            })
 	
      	{alert(this.state.result);
	}

        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

   

    render() {
        return (
            <div>
                <div className="expression-body">
		    <h1>VIZUALYZE INTELLIGENCE</h1>
                    <h2>Evaluate Expression</h2>
		    
                    <ResultComponent result={this.state.result}/>
                    <inputdisplayComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
