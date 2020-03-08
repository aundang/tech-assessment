import { replaceSpace, filterMovieList } from './utilities';

describe('#replaceSpace', () => {
  it('Should replace all the %20 to spaces', () => {
    const string = 'tre%20abc%20the';
    const expected = 'tre abc the';

    expect(replaceSpace(string)).toEqual(expected);
  });
});

describe('#filterMovieList', () => {
  it('should filter the movie list based on the filter type and value', () => {
    const movieList = [
      {
        name: 'Deadpool',
        productionYear: 2016,
        genre: 'Action',
        synopsisShort: 'A wisecracking mercenary',
        synopsis: 'Wade Wilson is a dishonorably discharged special forces operative working',
        image: 'movie1.jpg'
      },
      {
        name: 'Barnyard',
        productionYear: 2006,
        genre: 'Animation',
        synopsisShort: 'When the farmer',
        synopsis: 'Otis (Kevin James) is a carefree young cow who prefers playing with his ',
        image: 'movie2.jpg'
      }
    ];
    const expected = [{
      name: 'Deadpool',
      productionYear: 2016,
      genre: 'Action',
      synopsisShort: 'A wisecracking mercenary',
      synopsis: 'Wade Wilson is a dishonorably discharged special forces operative working',
      image: 'movie1.jpg'
    }];

    expect(filterMovieList(movieList, 'year', '2016')).toEqual(expected);
    expect(filterMovieList(movieList, 'genre', 'Action')).toEqual(expected);

  });
});
