import {useState, useEffect} from "react";
import {addMovie} from "../actions";

const AddMovieForm = () => {
    // useEffect(() => {  getMovies().then(() => {console.log('Movies retrieved')}) })

    const [title, setTitle] = useState('');
    const [format, setFormat] = useState('');
    const [filmLength, setLength] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [rating, setRating] = useState('');

    const saveMovie = async (e) => {
        e.preventDefault();
        // await addMovie({title, format, filmLength, releaseYear, rating})

        // Reset values after submit
        setTitle('');
        setFormat('');
        setLength('');
        setReleaseYear('');
        setRating('');

    }

    return (
        <form className={'addMovieForm'} onSubmit={saveMovie}>
            <h3> SANS Movie Collection</h3>
            <div className='formInput'>
                <div className={'labelContainer'}>
                    <label>Title:</label>
                </div>
                <input
                    type='text'
                    placeholder='  Title*'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required={true}
                />
            </div>

            <div className='formInput'>

                <label>Format:</label>
                <input
                    type='text'
                    placeholder='  Format*'
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    required={true}
                />
            </div>

            <div className='formInput'>
                <label>Length</label>
                <input
                    type='text'
                    value={filmLength}
                    placeholder={'  Length*'}
                    onChange={(e) => setLength(e.target.value)}
                    required={true}
                />
            </div>

            <div className='formInput'>
                <label>Release Year:</label>
                <input
                    type='text'
                    value={releaseYear}
                    placeholder={'  Release Year*'}
                    onChange={(e) => setReleaseYear(e.target.value)}
                    required={true}
                />
            </div>

            <div className='formInput'>
                <label>Rating:</label>
                <select onChange={(e) => setRating(e.target.value)}
                        required={true}>
                    <option value={1}>1 star</option>
                    <option value={1}>2 stars</option>
                    <option value={1}>3 stars</option>
                    <option value={1}>4 stars</option>
                    <option value={1}>5 stars</option>
                </select>
            </div>

            <div className={'submitDiv'}>
                <input type='submit' value='Save Movie' className='formSubmitButton' />
            </div>
        </form>
    )
}

export default AddMovieForm
