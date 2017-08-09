import  React from 'react';
import {Testimonial} from '../components/Testimonial';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        data: [
        {
          name: "Matthew Horizonte",
          jobs: "Web Developer",
          country: 'Australia',
          category: 'testimonial testimonial-danger'
        },
        {
          name: "Kirkwood John",
          jobs: "Dentist",
          country: 'Germany',
          category: 'testimonial testimonial-warning'
        },
        {
          name: "Mt. Tallac",
          jobs: "Bus Driver",
          country: 'Canada',
          category: 'testimonial testimonial-primary'
        },
        {
          name: "John Fitz Oscar",
          jobs: 34,
          country: 'New Zeland',
          category: 'testimonial testimonial-default'
        }
      ]
      }
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ReactJs Multiple Components Tutorial</h1>


        <div className="row">
          {this.state.data.map((information, i) =>
              <Testimonial data={information} key={i} />
            )}
  			</div>

      </div>
    );
  }
}


export default App;
