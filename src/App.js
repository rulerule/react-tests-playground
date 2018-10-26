import React, { Component } from 'react'
import './styles/App.css'
//import Person from './components/Person'     FIRST LESSON
import UserInput from './components/exercise1/UserInput'
import UserOutput from './components/exercise1/UserOutput'

class App extends Component {
    /****************************************************************************************
    *                                       FIRST LESSON                                    *
    *                                                                                       *
    *****************************************************************************************/
    //  state = {
    //     persons: [
    //         {name: 'MAX', age: 28},
    //         {name: 'MAX1', age: 281},
    //         {name: 'MAX2', age: 282}
    //     ],
    //     teste: {
    //         name: 'badjoras'
    //     }
    // }

    //ON THE CALLBACK PASSING THE STATE TO BE COMMENTED
    // switchNameHandler = (newName = 1) => {
    //     this.setState((state) => {
    //         return {
    //             persons: state.persons.map( person => {
    //                 return {...person, name: newName}
    //             })
    //         }
    //     })
    // }

    // switchNameHandler = newName => {
    //     if(typeof(newName) != 'string') return; //this is werid
    //     this.setState({
    //         persons: this.state.persons.map( person => {
    //             return {...person, name: newName}
    //         })
    //     })
    // }

    // nameChangedHandler = event => {
    //     this.setState({
    //         persons: this.state.persons.map( person => {
    //             return {...person, name: event.target.value}
    //         })
    //     })
    // }

    // render() {
    //     const style = {
    //         backgroundColor: 'white',
    //         font: 'inherit',
    //         border: '1px solid blue',
    //         padding: '8px',
    //         marginBottom: '10px'
    //     }
    //
    //     return (
    //         <div className="App">
    //         <h1> Hi , trying react app </h1>
    //         <p> this is really working </p>
    //         <button style = {style} onClick={this.switchNameHandler.bind(this, 'badjorasDiModem')}> Switch Name </button>
    //         <Person
    //             name= {this.state.persons[0].name}
    //             age= {this.state.persons[0].age}
    //             click = {this.switchNameHandler.bind(this, 'max')}
    //             changed = {this.nameChangedHandler}/>
    //         <Person
    //             name= {this.state.persons[1].name}
    //             age= {this.state.persons[1].age} >my hobbis: racing </Person>
    //         <Person
    //             name= {this.state.persons[2].name}
    //             age= {this.state.persons[2].age}
    //             click = {this.switchNameHandler.bind(this)}/>
    //         <Person name= {this.state.teste.name} />
    //         </div>
    //     );
    //     //return React.createElement('div', null, 'Hi, Im a react appppp');
    // }

    /****************************************************************************************
    *                                       FIRST EXERCISE                                  *
    *                                                                                       *
    *****************************************************************************************/
    state = {
        username: 'rule'
    }

    usernameChangeHandler = event => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
            <UserInput username={this.state.username} changed={this.usernameChangeHandler}/>
            <UserOutput text="badhoras di modem" username={this.state.username}/>
            <UserOutput text="badhoras di modem" username={this.state.username}/>
            </div>
        );
    }
}

export default App;
