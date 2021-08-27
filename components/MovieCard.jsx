import React from "react";
// import { Col,Card,Button } from "react-bootstrap";
class MovieCard extends React.Component {
  render() {
    return (
      <a href="#" className="col-2 my-3">
          <div className='movieCard'>
              <img className='w-100' src="{this.props.movie} "/>
              <p>{this.props.movie}</p>
            </div>
      </a>
    );
  }
}

export default MovieCard;
