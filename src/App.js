import React, { Component } from "react";
import './App.css';
import KeyPad from './components/KeyPad';
import Output from "./components/Output";
import SciKeyPad from "./components/SciKeyPad";

class App extends Component {
  state = {
    result: ''
  }
  buttonPressed = buttonName => {
    if(buttonName === "=") {
      this.calculate();
    } else if (buttonName === "AC") {
      this.reset();
    } else if (buttonName === "√") {
      this.sqrt();
    } else if (buttonName === "cos") {
      this.cos();
    } else if (buttonName === "Rad") {
      this.rad();
    } else if (buttonName === "sin") {
      this.sin();
    } else if (buttonName === "tan") {
      this.tan();
    } else if (buttonName === "Deg") {
      this.deg();
    } else if (buttonName === "Inv") {
      this.inv();
    } else if (buttonName === "ln") {
      this.ln();
    } else if (buttonName === "log") {
      this.log();
    } else if (buttonName === "e") {
      this.e();
    } else if (buttonName === "∏") {
      this.sin();
    } else if (buttonName === "tan") {
      this.tan();
    } else if (buttonName === "Deg") {
      this.deg();
    }else 
      this.setState({
        result: this.state.result + buttonName

    });



  };

//backspace for future use?
//  backspace = () => {
//   this.setState({
//     result: this.state.result.slice(0,-1)
//   });
// }

  reset = () => {
    this.setState({
      result: ""
    });
  }

  //scientific calculator

  sqrt = () => {
    this.setState({
      result: (Math.sqrt(this.state.result)|| "") + ""
    });
  }

  cos = () => {
    this.setState({
      result: (Math.cos(this.state.result)|| "") + ""
    });
  }
//Rad and Deg do not work
  rad = () => {
    this.setState({
      result: (Math.rad(this.state.result)|| "") + ""
    });
  }
  deg = () => {
    this.setState({
      result: (Math.deg(this.state.result)|| "") + ""
    });
  }

  sin = () => {
    this.setState({
      result: (Math.sin(this.state.result)|| "") + ""
    });
  }

  tan = () => {
    this.setState({
      result: (Math.tan(this.state.result)|| "") + ""
    });
  }

  ln = () => {
    this.setState({
      result: (Math.log(this.state.result)|| "") + ""
    });
  }

  log = () => {
    this.setState({
      result: (Math.log10(this.state.result)|| "") + ""
    });
  }

  e = () => {
    this.setState({
      result: (Math.e(this.state.result)|| "") + ""
    });
  }

  exp = () => {
    this.setState({
      result: (Math.exp(this.state.result)|| "") + ""
    });
  }

  ans = () => {
    this.setState({
      result: (Math.ans(this.state.result)|| "") + ""
    });
  }

  inv = () => {
    this.setState({
      result: (Math.inv(this.state.result)|| "") + ""
    });
  }

  calculate = () => {
    try {
      this.setState({
      result: (eval(this.state.result) || "") + ""
    });
  } catch(e){
      this.setState({
        result: "error"
      })
    }
  }
  render() {
  return (
    <div className="App">
    <div className="calc-body">
      <Output result={this.state.result} />
      <KeyPad buttonPressed={this.buttonPressed} />
      </div>
      <div className="scicalc-body">
      <SciKeyPad buttonPressed={this.buttonPressed} />
      </div>
    </div>
  );
}
}
export default App;
