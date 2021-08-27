import MovieCard from "./MovieCard";
import React from "react";

class GallerieRow extends React.Component {
    state = {
        url: "https://www.omdbapi.com/?apikey=23ae3a68&s=",
        search: "Harry",
        library: []
    }

// Load Function
  async loadMovie() {
    try {
      let response = await fetch(this.state.url + this.state.search);
      let data = await response.json();
      this.state.library = data.Search
      console.log(this.state.library);
    } catch (err) {
      console.log(err);
    }
  }
// Deafult Load
  componentDidMount() {
      this.loadMovie()
  }
  render() {
    return (
      <div className="bg-dark">
        <div className="row px-3">
        <div className='col-12'>
            <h2 className="text-white">{this.state.search}</h2>
        </div>
        {Object.values(this.state.library).map(mov => <p movie={mov.Title}></p>)}
        </div>
      </div>
    );
  }
}

export default GallerieRow;
