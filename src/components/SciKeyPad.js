import React, { Component } from "react";
// import { render } from "react-dom";

export default class SciKeyPad extends Component {
    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    };
    render() {
        return (
            <div className= "buttons">
                <button name="Rad" onClick={this.buttonPressed}>Rad</button>
                <button name="Deg" onClick={this.buttonPressed}>Deg</button>
                <button name="x!" onClick={this.buttonPressed}>x!</button>

                <button name="Inv" onClick={this.buttonPressed}>Inv</button>
                <button name="sin" onClick={this.buttonPressed}>sin</button>
                <button name="ln" onClick={this.buttonPressed}>ln</button>

                <button name="∏" onClick={this.buttonPressed}>∏</button>
                <button name="cos" onClick={this.buttonPressed}>cos</button>
                <button name="log" onClick={this.buttonPressed}>log</button>

                <button name="e" onClick={this.buttonPressed}>e</button>
                <button name="tan" onClick={this.buttonPressed}>tan</button>
                <button name="√" onClick={this.buttonPressed}>√</button>

                <button name="Ans" onClick={this.buttonPressed}>Ans</button>
                <button name="EXP" onClick={this.buttonPressed}>EXP</button>
                <button name="Xy" onClick={this.buttonPressed}>Xy</button>
            </div>
        );
    }

}