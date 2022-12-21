import axios from './axios';
import useAxios from '../hooks/useAxios';

function getQuestion(questionid) {
  const [query, error, loading] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: '/question/2',
    requestConfig: {
      headers: {
        'Content-Language': 'pt-BR',
      },
    },
  });
  
  if(!error) console.log(error);
  if(loading) console.log("Loading...");
  else return [query, error, loading];
}


export function GenerateQuery(questionid) {
  let loaded = getQuestion(2);
  // let rightQuery = !getQuestion(2)[2] && getQuestion(2)[0]?.query;
  // while ( loaded != false) console.log('not yet');
  // let query = rightQuery.split(" ");
  let query = ['a', 'b', 'c'];

  const queries = [
    'INNER',
    'JOIN',
    'UPDATE',
    'DELETE',
    'BY',
    'IN',
    'LEFT',
    'RIGHT',
    'TRIGGER',
    'PROCEDURE',
  ];

  while (query.length < 10) {
    let random = queries[Math.floor(Math.random() * queries.length)];
    if (query.indexOf(random) === -1) {
      query.push(random);
    } else {
      continue;
    }
  }

  query = Shuffle(query);
  return query;
}

function Shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
