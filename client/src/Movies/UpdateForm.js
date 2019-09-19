import React, {useState, useEffect} from 'react';
import axios from 'axios';


const initialMovie = {
    id: null,
    titile:'',
    director: '',
    metascore: null,
    stars: []
}



const UpdateForm = props => {
    const [movie, setMovie] = useState(initialMovie);

    
    const fetchMovie = id => {
      axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
    };

    useEffect(() => {
      fetchMovie(props.match.params.id);
    }, [props.match.params.id]);

      
    const changeHandler = event => {
        event.persist();
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
        .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res => {
          console.log(res);
          setMovie(initialMovie);
          props.updateMovies(res.data);
          props.history.push('/movie')
        })
        .catch(error => console.log(error.response));
        
    }
    
      const starHandler = index => event => {
        setMovie({...movie, star: movie.stars.map((starName, starIndex) => {
          return starIndex === index ? event.target.value : starName;
        })});
      };



        return (
          <div className="quotes-form">
            <h2>Update</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
              <input
                type="text"
                name="title"
                onChange={changeHandler}
                value={movie.title}
              />
              <label>Director</label>
              <input
                type="text"
                name="director"
                onChange={changeHandler}
                value={movie.director}
              />
              <label>Metascore</label>
              <input
                type="number"
                name="metascore"
                onChange={changeHandler}
                value={movie.metascore}
              />
        
            <label>Stars</label>
            {movie.stars.map((star, index) => (
            <input 
            type="text"
            onChange={starHandler(index)}
            value={star}/>
            
              /* {this.props.deleteError ? (
                <ErrorMessage message={this.props.deleteError} />
              ) : null}
              {this.props.deleteSuccessMessage ? (
                <SuccessMessage message={this.props.deleteSuccessMessage} />
              ) : null}
              <button className="quotes-btn" type="submit">
                DELETE quote
              </button> */
            ))}
              <button type='submit'>Update</button>
            </form>
          </div>
        );
      }

export default UpdateForm;
    
