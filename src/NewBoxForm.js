import React, { Component } from 'react'


class NewBoxForm extends Component {
    constructor(props) {
        super(props);

this.state = {
    width: '',
    height: '',
    backGroundColor: ''
}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

     };

    handleChange(evt) {
    this.setState({
        [evt.target.name]:evt.target.value
    }); 
    }

handleSubmit(evt) {
evt.preventDefault();

}

    render() {
        
        return (
          <div className='NewBoxForm'>
              <form onSubmit={this.handleSubmit}>
                  <label htmlfor="width">Width: </label>
                 <input
                 id='width'
                 name="width" 
                 value={this.state.width} 
                 onChange={this.handleChange}
                    />
                  <label htmlfor="height">Height: </label>
                 <input
                 id='height'
                 name="height" 
                 value={this.state.height} 
                 onChange={this.handleChange}
                    />
                  <label htmlfor="backGroundColor">Backgound Color: </label>
                 <input
                 id='backgroundColor'
                 name="backGroundColor" 
                 value={this.state.backGroundColor} 
                 onChange={this.handleChange}
                    />
                    <button>Submit!</button>
              </form>
          </div>
        );
      }

    
}
export default NewBoxForm;