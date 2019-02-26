// Add BandInput component
import React, { Component } from 'react'

// import AddBands from './AddBands'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    console.log(this.state.name);
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add band</label>
          <input type="text" placeholder='Band here..'
          onChange={this.handleChange} value={this.state.name} />
          <input type="submit" />
       </form>
     </div>
   );
  }
}

export default BandInput
//   render() {
//     return(
//       <div>
//         <AddBands />
//         <p>Band Input</p>
//       </div>
//     )
//   }
// }

// export default BandInput
