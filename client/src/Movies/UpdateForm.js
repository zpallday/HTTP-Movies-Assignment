import React, {useState, useEffect} from 'reac';
import axios from 'axios';
import Movie from './Movie';

const initialMovie = {
    id: null,
    titile:'',
    director: '',
    metascore: null,
    stars: []
}



const UpdateForm = props => {
    const [movie, setMovie] = useState(initialMovie);

    const changeHandler = event => {
        event.presist();
        let value = event.target.value;
        if (event.target === 'metascore') {
            value = parseInt(value, 10);
        }

        setMovie({
            ...movie,
            [event.target.name]: value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios
        .put()
    }
    
        return (
          <div className="quotes-form">
            <h2>Update</h2>
            <form>
                <label>Title</label>
              <input
                type="text"
                name="title"
                // placeholder="Title"
                onChange={changeHandler}
                // value={this.state.movieQuote.quote}
              />
              <label>Director</label>
              <input
                type="text"
                name="director"
                // placeholder="Character"
                onChange={changeHandler}
                // value={this.state.movieQuote.character}
              />
              <label>Metascore</label>
              <input
                type="number"
                name="metascore"
                // placeholder="Movie"
                onChange={changeHandler}
                // value={this.state.movieQuote.movie}
              />
              {/* {this.props.deleteError ? (
                <ErrorMessage message={this.props.deleteError} />
              ) : null}
              {this.props.deleteSuccessMessage ? (
                <SuccessMessage message={this.props.deleteSuccessMessage} />
              ) : null}
              <button className="quotes-btn" type="submit">
                DELETE quote
              </button> */}
            </form>
          </div>
        );
      }

