import api from "./apiUtil";

export const getAllMovies = async () => {
    try {
        const res = await api.get('/movies');
        console.log(`payload: ${res}`)
    } catch(e) {
        console.error(`Error with get request to DB.. ${e}`);
    }
};

export const addMovie = async () => {
  // try  {
  //   await api.post('/movies', data)
  // } catch(e) {
  //     console.error(e);
  // }
};
