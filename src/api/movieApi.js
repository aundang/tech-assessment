import axios from 'axios';

const getMovies = async () => {
  try {
    const res = await axios.get(
      'https://g5jezgqoe1.execute-api.us-east-1.amazonaws.com/stg'
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default { getMovies };
