import React from 'react';
import { Link } from 'react-router-dom'
import { withApollo } from 'react-apollo';

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.logout = () => {
      props.client.resetStore();
    }
  }

  render() {
	  return (
	    <div>
	      <p>Home page</p>
	      <p><Link to='/channelsList'>Channel List</Link></p>
	      <p><button onClick={this.logout}>Log out</button></p>
	    </div>
	  );
  };
}

export default withApollo(Home);
