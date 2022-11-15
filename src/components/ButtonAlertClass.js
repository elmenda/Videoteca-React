import React, { Component } from 'react'



class ButtonAlertClass extends Component {

    message= 'booooooom!!!!'

    // constructor(props){
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick()  { 
    //     alert(this.message)  //El this aqui devuelve undefined si no se define en el constructor y se le vincula el objeto.
    // }

    handleClick = () => { alert(this.message) } //Otra solución para evitar el undefined del this es crearlo como un arrow function.

    render() { return (

        <button onClick={this.handleClick}>Show message { this.message } </button>

    )}



}



export default ButtonAlertClass