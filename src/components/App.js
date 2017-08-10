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
          category: 'testimonial testimonial-danger',
          profileImage: 'https://randomuser.me/api/portraits/men/16.jpg'
        },
        {
          name: "Julie John Fitz",
          jobs: "Dentist",
          country: 'Germany',
          category: 'testimonial testimonial-warning',
          profileImage: 'https://randomuser.me/api/portraits/women/36.jpg'
        },
        {
          name: "Mt. Tallac",
          jobs: "Bus Driver",
          country: 'Canada',
          category: 'testimonial testimonial-primary',
          profileImage: 'https://randomuser.me/api/portraits/men/26.jpg'
        },
        {
          name: "John Fitz Oscar",
          jobs: "Database administrator",
          country: 'New Zeland',
          category: 'testimonial testimonial-default',
          profileImage: 'https://randomuser.me/api/portraits/men/35.jpg'
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
