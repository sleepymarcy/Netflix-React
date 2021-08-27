import MovieCard from "./MovieCard";
import React from "react";

class GallerieRow extends React.Component {
    state = {
        url: "https://www.omdbapi.com/?apikey=23ae3a68&s=",
        search: this.props.search,
        library: []
    }

// Load Function
  async loadMovie() {
    try {
      let response = await fetch(this.state.url + this.state.search);
      let data = await response.json();
      this.setState({library : data.Search})
        console.log(this.state.library)
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
        <div className="row px-3 bg-black mt-3">
        <div className='col-12'>
            <h2 className="text-white">{this.state.search}</h2>
        </div>
        {
        this.state.library.slice(0,6).map(mov => <MovieCard movieId = {mov.imdbID} img={mov.Poster}/>)
        }
        </div>
    );
  }
}

export default GallerieRow;
