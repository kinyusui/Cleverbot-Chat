import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: '',
    };
  }
 
  render() {
    return (
      <form action="/ChatBot">
        User: <input type="text" value=""/>
      </form>
    );
  }
}
export default Form;


      // <form action="/ChatBot">
      //   First name: <input type="text" value="Mickey">
      //   Last name: <input type="text" name="lastname" value="Mouse">
      //   <input type="submit" value="Submit">
      // </form>