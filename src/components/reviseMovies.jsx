import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Revise  extends Component {
    state = {
        movies:getMovies(),
    };

    deleteMovie = (movie) =>{
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies:movies});
    }

    render() { 
        if(this.state.movies.length === 0)
            return <p>There are no movies in the database.</p> 

        return (
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.deleteMovie(movie)} className="btn btn-danger">Delete</button></td>
                    </tr>
                  ))}
                </tbody>
                </table>
            </div>
        );
    }
}
 
export default  Revise;