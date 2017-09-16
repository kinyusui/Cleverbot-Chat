import React from 'react';
import axios from 'axios';
/**
 * A counter button: tap the button to increase the count.
 */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: 'no reply yet',
      message: ''
    };
    this.handlemessage.bind(this);
    this.onSubmit.bind(this);
  }

  handlemessage (event) {
    this.setState({
      message: event.target.value
    });
  }
  onSubmit (event) {
    event.preventDefault();
    var obj = {message: this.state.message}
    axios.post('/ChatBot',obj)
    .then(function(result) {
      console.log(`posted my dude`, result);
      axios.get('/ChatBot')
      .then(function(result) {
        var data = result.data;
        console.log(`this is the get`, data[data.length-1][1].substring(10));
        this.setState({
          reply: data[data.length-1][1].substring(10)
        })
      })
    })
  }
  render() {
    return (
      <div className='outer'> 
        <div className='cleverbot'>Cleverbot Replies: {this.state.reply}</div>
        <form onSubmit={this.onSubmit.bind(this)}>
          User says: <input type="text" name="message" value={this.state.message} onChange={this.handlemessage.bind(this)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default Form;


      // <form action="/ChatBot">
      //   First name: <input type="text" value="Mickey">
      //   Last name: <input type="text" name="lastname" value="Mouse">
      //   <input type="submit" value="Submit">
      // </form>