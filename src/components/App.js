import  React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import {Testimonial} from '../components/Testimonial';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ReactJs Multiple Components Tutorial</h1>

        <div className="row">
  				<div className="col-sm-6">
            <Testimonial/>
  				</div>
  			</div>

      </div>
    );
  }
}

export default App;
