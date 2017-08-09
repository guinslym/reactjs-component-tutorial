import  React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import {Testimonial} from '../components/Testimonial';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {users:['Jessie ', 'Stephanie' , 'Marc', 'Judy'],
                  category:['primary','default','danger','warning']};
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ReactJs Multiple Components Tutorial</h1>

        <div className="row">
  				<div className="col-sm-6">
            <Testimonial users={this.state.users} />
  				</div>
  			</div>

      </div>
    );
  }
}

export default App;
