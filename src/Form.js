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
  handlereply (reply) {
    this.setState({
      reply: reply
    })
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
    .then((result) => {
      //console.log(`posted my dude`, result);
      axios.get('/ChatBot')
      .then((result) => {
        var data = result.data;
        var cleverbotreply = data[data.length-1][1].substring(10);
        //console.log(`this is the get`, cleverbotreply);
        this.setState({
          reply: cleverbotreply
        });
      })
    })
  }

  render() {
    return (
      <div className='outer'> 
        <div className='cleverbot'>Cleverbot Replies: {this.state.reply}</div>
        <form onSubmit={this.onSubmit.bind(this)}>
          User says: <input className="onlyInput" type="text" name="message" value={this.state.message} onChange={this.handlemessage.bind(this)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default Form;

//axios.post().then(function(result){}.bind(this)); would probably not work
      // <form action="/ChatBot">
      //   First name: <input type="text" value="Mickey">
      //   Last name: <input type="text" name="lastname" value="Mouse">
      //   <input type="submit" value="Submit">
      // </form>