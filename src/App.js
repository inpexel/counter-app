// import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    console.log('App - constructor')

    this.state = {
      counters:[
          {id:1, value:4},
          {id:2, value:1},
          {id:3, value:1},
          {id:4, value:1},
      ]
    }}


  componentDidMount(){
    console.log('App - Mounted')
  }

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters})
};

handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters})
};

handleDelete = (counterId)=>{
    const counters = this.state.counters.filter(c=>c.id !== counterId);
    this.setState({counters})
};

handleReset = () =>{
    const counters = this.state.counters.map(c=>{
        c.value=0
        return c
    })
    this.setState({counters});
};

render(){
  console.log('App - rendered')
  return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.length}/>
      <main className='container'>
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </main>
    </React.Fragment>
  );
}
}

export default App;
