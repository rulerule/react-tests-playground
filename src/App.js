import React, { Component } from 'react'
import './styles/App.css'

//import Person from './components/Person'     FIRST LESSON

// import UserInput from './components/exercise1/UserInput'   FIRST EXERCISE
// import UserOutput from './components/exercise1/UserOutput' FIRSR EXERCISE

//import Person from './components/Person' //SECOND LESSON

//import ValidatorComponent from './components/exercise2/ValidatorComponent'  SECOND EXERCISE
//import CharComponent from './components/exercise2/CharComponent'  SECOND EXERCISE
class App extends Component {
    /****************************************************************************************
    *                                       FIRST LESSON                                    *
    *                                    BASE FEATURES / JSX                                *
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
    // state = {
    //     username: 'rule'
    // }
    //
    // usernameChangeHandler = event => {
    //     this.setState({
    //         username: event.target.value
    //     })
    // }
    //
    // render() {
    //     return (
    //         <div className="App">
    //         <UserInput username={this.state.username} changed={this.usernameChangeHandler}/>
    //         <UserOutput text="badhoras di modem" username={this.state.username}/>
    //         <UserOutput text="badhoras di modem" username={this.state.username}/>
    //         </div>
    //     );
    // }

/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/

    /****************************************************************************************
    *                                       SECOND PART                                     *
    *                                Lists and conditionals                                 *
    *****************************************************************************************/
    //  state = {
    //     persons: [
    //         {name: 'MAX', age: 28, id: '23123'},
    //         {name: 'MAX1', age: 281, id: '2344'},
    //         {name: 'MAX2', age: 282, id: '23444'}
    //     ],
    //     teste: {
    //         name: 'badjoras'
    //     },
    //     showPersons: false
    // }
    //
    // togglePersonsHandler = () => {
    //     this.setState({
    //         showPersons : !this.state.showPersons
    //     });
    // }
    //
    // nameChangedHandler = (event, id) => {
    //     const personIndex = this.state.persons.findIndex( element => { return element.id === id })
    //     const person = {...this.state.persons[personIndex]}
    //     person.name = event.target.value
    //     const persons = [...this.state.persons]
    //     persons[personIndex] = person
    //     this.setState({persons: persons})
    // }
    //
    // deletePersonHandler = personIndex => {
    //     const persons = [...this.state.persons]
    //     persons.splice(personIndex, 1)
    //     this.setState({persons: persons})
    // }
    //
    // render () {
    //     let persons = null;
    //     if (this.state.showPersons) {
    //         persons = (
    //             <div>
    //                 {this.state.persons.map( (person, index) => {
    //                     return (
    //                         <Person
    //                             click={() => this.deletePersonHandler(index)}
    //                             changed= {(event) => this.nameChangedHandler(event, person.id)}
    //                             name= {person.name}
    //                             age = {person.age}
    //                             key= {person.id}/>
    //                         )
    //                 })}
    //             </div>
    //         )
    //     }
    //     return (
    //         <div>
    //             <h1> List and Conditions </h1>
    //             <button onClick={this.togglePersonsHandler}>hide and show</button>
    //             {persons}
    //         </div>
    //     )
    // }

    /****************************************************************************************
    *                                       SECOND EXERCISE                                 *
    *                                                                                       *
    *****************************************************************************************/
    // state = {
    //     text: ''
    // }
    //
    // changeInputHandler = event => {
    //     this.setState({ text: event.target.value })
    // }
    //
    // deleteCharHandler = (event, index) => {
    //     let temp = this.state.text.split('')
    //     temp.splice(index, 1);
    //     let newText = temp.join('');
    //     this.setState({ text: newText })
    // }
    //
    // render () {
    //     const elements = this.state.text.split('')
    //     const chars = elements.map((char, index) => {
    //         return <CharComponent click={(event) => this.deleteCharHandler(event, index)} char={char} key={index} />
    //     });
    //     return (
    //         <div>
    //             <input value={this.state.text} onChange={this.changeInputHandler}/>
    //             <p>{this.state.text.length}</p>
    //             <ValidatorComponent textSize={this.state.text.length}/>
    //             {chars}
    //         </div>
    //     )
    // }
    /****************************************************************************************
    *                                       THIRD PART                                      *
    *                                styling react components                               *
    *****************************************************************************************/
    render () {
        const style = { backgroundColor: 'green' }
        let classes = []
        if(true) classes.push('red')
        if(true) classes.push('bold')
        return <div class={classes.join(' ')} style={style}> third part project </div>
    }
}

export default App;
