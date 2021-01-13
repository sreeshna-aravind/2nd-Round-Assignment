import React, {Component} from 'react';
import { withAlert } from 'react-alert'


class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
             const App = ({ alert }) => (
  	       <button
   		 onClick={() => {
      		    alert.calculate("result is:" + this.state.result);
    		}}
 		 >result</button>
	    </div>
	)
      )


    };
}


export default ResultComponent;
export default withAlert()(App)   

            