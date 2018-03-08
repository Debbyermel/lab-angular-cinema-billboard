import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
    movies = [
        {
          id: 1,
          title: 'The Imitation Game',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SY999_CR0,0,670,999_AL_.jpg',
          synopsis: 'During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.',
          genres: 'Drama',
          year: 2014,
          director: 'Morten Tyldum',
          actors: [
            'Benedict Cumberbatch',
            'Keira Knightley',
            'Matthew Goode'
          ],
          hours: ['Monday 14:30h', 'Tuesday 19:40h', 'Friday 22:10h'],
          room: 1
        }, 
        {
          id: 2,
          title: 'Interstelar',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
          synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.',
          genres: 'Drama',
          year: 2014,
          director: 'Christopher Nolan',
          actors: [
            'Matthew McConaughey',
            'Anne Hathaway', 
            'Jessica Chastain'
          ],
          hours: ['Sunday 18:10h', 'Tuesday 21:40h', 'Friday 22:25h'],
          room: 2
        }, 
        {
          id: 3,
          title: 'The Theory of Everything',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SY1000_CR0,0,674,1000_AL_.jpg',
          synopsis: 'A look at the relationship between the famous physicist Stephen Hawking and his wife.',
          genres: 'Drama',
          year: 2014,
          director: 'James Marsh',
          actors: [
            'Eddie Redmayne',
            'Felicity Jones',
            'Tom Prior'
          ],
          hours: ['Tuesday 20:40h', 'Friday 21:30h', 'Sunday 17:00h'],
          room: 3
        }
      ];
 
 constructor() { }

 getMovies() {
    return this.movies;    
  }

  getMovie(id) {
   console.log(id);
  return this.movies.filter(movie => movie.id === id);
  }

}
