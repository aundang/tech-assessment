import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import movieApi from '../../api/movieApi';
import MovieTiles from '../../components/MovieTiles/MovieTiles';
import { Filter } from '../../components/Filter/Filter';
import { filterMovieList } from '../../utilities/utilities';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      filteredList: [],
      filterType: 'year',
      filterValue: 'all'
    };
    this.setFilter = this.setFilter.bind(this);
  }

  async componentDidMount() {
    const getMovie = await movieApi.getMovies();
    this.setState({
      movieList: getMovie
    });
    this.setState({
      filteredList: this.state.movieList
    });

    console.log(this.state);
  }

  setFilter(filterBy, years, genre) {
    console.log(this.state);
    this.setState({
      filterType: filterBy,
      filterValue: filterBy === 'year' ? years : genre
    });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (
      this.state.filterType !== prevState.filterType ||
      this.state.filterValue !== prevState.filterValue
    ) {
      console.log('Filtering: ', this.state);
      const filteredMovieList = filterMovieList(
        this.state.movieList,
        this.state.filterType,
        this.state.filterValue
      );
      this.setState({ filteredList: filteredMovieList });
    }
  }

  render() {
    const { filteredList } = this.state;
    const renderedMovies =
      filteredList && filteredList.length === 0 ? (
        <span>No movies found</span>
      ) : (
        this.state.filteredList.map((movie, i) => (
          <Link key={i} to={`/details/${movie.name}`} className="link">
            <MovieTiles
              title={movie.name}
              synopsisShort={movie.synopsisShort}
              image={movie.image}
              key={i}
            />
          </Link>
        ))
      );

    return (
      <div className="HomePageContainer">
        <h1 className="Title">Movies</h1>
        <Filter onSetFilter={this.setFilter} />
        <div className="movieTilesWrapper">{renderedMovies}</div>
      </div>
    );
  }
}

export default HomePage;
