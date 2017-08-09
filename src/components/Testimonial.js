// @flow
import React from 'react';
import PropTypes from 'prop-types';



export class Testimonial extends React.Component {

  componentWillMount(){
    //console.log(this.props);
  }

  render(){
    return(
      <div className="col-sm-6">
          <div id="tb-testimonial" className={this.props.data.category}>
              <div className="testimonial-section">
                  Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.
              </div>

              <div className="testimonial-desc">
                  <img src={this.props.data.profileImage} alt="" />
                  <div className="testimonial-writer">
                    <div className="testimonial-writer-name">{this.props.data.name}</div>
                    <div className="testimonial-writer-designation">{this.props.data.jobs}</div>
                    <a href="#" className="testimonial-writer-company">{this.props.data.country}</a>
                  </div>
              </div>
          </div>
      </div>

    )
  }
}


Testimonial.PropTypes = {
  data:  PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobs: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
};
