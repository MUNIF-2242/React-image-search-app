import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID ZU55vrgvhPB3CRG83psrDf2_4O4KciupT00OGpO-b0I',
    },
    params: {
      query: term,
    },
  });
  //console.log(response.data.results);

  return response.data.results;
};
export default searchImages;
