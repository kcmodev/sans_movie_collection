import {useState} from "react";

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [format, setFormat] = useState('');
    const [length, setLength] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [rating, setRating] = useState('');

    const saveMovie = (e) => {
        e.preventDefault()
    }

    return (
        <form className={'addMovieForm'}>
            <h3> SANS Movie Collection</h3>
            <div className='formInput'>
                <div className={'labelContainer'}>
                    <label>Title:</label>
                </div>
                <input
                    type='text'
                    placeholder='  Title*'
                    value={title}
                    onChange={(e) => saveMovie(e.target.value)}
                />
            </div>

            <div className='formInput'>

                <label>Format:</label>
                <input
                    type='text'
                    placeholder='  Format*'
                    value={format}
                    onChange={(e) => saveMovie(e.target.value)}
                />
            </div>

            <div className='formInput'>
                <label>Length</label>
                <input
                    type='text'
                    value={length}
                    placeholder={'  Length*'}
                    onChange={(e) => saveMovie(e.target.value)}
                />
            </div>

            <div className='formInput'>
                <label>Release Year:</label>
                <input
                    type='text'
                    value={releaseYear}
                    placeholder={'  Release Year*'}
                    onChange={(e) => saveMovie(e.target.value)}
                />
            </div>

            {/* CHANGE TO RADIO BUTTONS/DROPDOWN */}
            <div className='formInput'>
                <label>Rating:</label>
                <input
                    type='text'
                    value={rating}
                    placeholder={'  Rating*'}
                    onChange={(e) => saveMovie(e.target.value)}
                />
            </div>

            <div className={'submitDiv'}>
                <input type='submit' value='Save Movie' className='formSubmitButton' />
            </div>

        </form>
    )
}

export default AddMovie
