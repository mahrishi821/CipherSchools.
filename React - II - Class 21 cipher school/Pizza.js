// import React, {Component} from 'react';
// import Pizza from'./Pizza.js';

// class App extends Component{
//   render(){
//     let dynamicName='React is mind blowing'
//     let brand='Pizza Hut'
//     let description='Pizza is a delicious food'
//     return(
//       <div>
//       <h1> {dynamicName} </h1>
//       <Pizza brand={brand} description={description}></Pizza>
//       </div>
      
//     )
//   }
// }

// export default App;
import React, { Component } from 'react';
import Pizza from './Pizza.js'; // Ensure no extra spaces

class App extends Component {
  render() {
    let dynamicName = 'React is mind blowing';
    let brand = 'Pizza Hut';
    let description = 'Pizza is a delicious food';
    return (
      <div>
        <h1>{dynamicName}</h1>
        <Pizza brand={brand} description={description}></Pizza>
      </div>
    );
  }
}

export default App;
