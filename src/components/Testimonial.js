import React from 'react';


export class Testimonial extends React.Component {

  componentWillMount(){
    console.log(this.props);
  }

  render(){
    return(
      <div id="tb-testimonial" className="testimonial testimonial-default">
          <div className="testimonial-section">
              Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.
          </div>

          <div className="testimonial-desc">
              <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" />
              <div className="testimonial-writer">
                <div className="testimonial-writer-name">Zahed Kamal</div>
                <div className="testimonial-writer-designation">Front End Developer</div>
                <a href="#" className="testimonial-writer-company">Touch Base Inc</a>
              </div>
          </div>
      </div>

    )
  }
}
