import React, { Component } from 'react';


class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(prevState);
    }

    componentWillUnmount(){
        console.log('counter - unmount')
    }
    // state = {
    //     count:this.props.counter.value
    // }

    // handleIncrement = ()=>{
    //     this.setState({count: this.state.count + 1})
    // }

    // handleDecrement = ()=>{
    //     if(this.state.count === 1){
    //         this.setState({count:1})
    //     }
    //     else{this.setState({count: this.state.count - 1})}
    // }


    render() { 
        console.log('counter-render')
        return (
        <div className='row' >
            <span className='col-1 mt-3 h3 user-select-none'> {this.props.counter.value}</span>

            <div className='col mt-2'>
                <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className='btn btn-secondary'>+</button>
                <button
                onClick={() => this.props.onDecrement(this.props.counter)}
                className='btn btn-secondary ms-2'
                disabled={this.props.counter.value === 1 ? "disabled" : ""}
                >-</button>
                <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className='ms-3 btn btn-danger'>X</button>
            </div>
        </div>);
    }

    // renderTage(){
    //     if(this.props.tags.length === 0){
    //         return <h1 className='m-1 badge text-warning'>Empty</h1>
    //     }
    //     return this.tags.map((tag, index)=> <li key={tag}>{index + 1} {tag}</li>);
    // }

    // getBadgeClasses() {
    //     let classes = "badge m-2 bg-";
    //     classes += this.props.counter === 0 ? "warning" : "primary";
    //     return classes;
    // }

    // formatCount(){
    //     const {count, another} = this.props.counter;
    //     return count === 0 ? 'zero' : count;
    // } 
}
 
export default Counter;