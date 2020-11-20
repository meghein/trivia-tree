import { useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer, { ACTIONS } from 'reducers/app';

export default function useData() {
  const [state, dispatch] = useReducer(reducer, {
    database: {},
    page: 'initial',
    questionsArr: [],
  });

  const categories = {
    general: 'General Knowledge',
    animal: 'Animal Kingdom',
    myth: 'Mythology',
    science: 'Science & Nature',
    geography: 'Geography',
    art: 'Art',
    cartoon: 'Cartoon & Animation',
    history: 'History',
    film: 'Film',
    music: 'Music'
  }

  const setPage = page => dispatch({ type: ACTIONS.PAGE, payload: page })

  const setQuestionsArr = arr => dispatch({ type: ACTIONS.QUESTIONS_ARR, payload: arr })

  useEffect(() => {
    const animal = axios.get(`https://opentdb.com/api.php?amount=50&category=27&type=multiple`);
    const general = axios.get(`https://opentdb.com/api.php?amount=50&category=9&type=multiple`);
    const myth = axios.get(`https://opentdb.com/api.php?amount=50&type=multiple`);
    const science = axios.get(`https://opentdb.com/api.php?amount=50&category=17&type=multiple`)
    const geography = axios.get(`https://opentdb.com/api.php?amount=50&category=22&type=multiple`)
    const art = axios.get(`https://opentdb.com/api.php?amount=23&category=25&type=multiple`)
    const cartoon = axios.get(`https://opentdb.com/api.php?amount=50&category=32&type=multiple`)
    const history = axios.get(`https://opentdb.com/api.php?amount=50&category=23&type=multiple`)
    const film = axios.get(`https://opentdb.com/api.php?amount=50&category=11&type=multiple`)
    const music = axios.get(`https://opentdb.com/api.php?amount=50&category=12&type=multiple`)
    Promise.all([animal, general, myth, science, geography, art, cartoon, history, film, music]).then(all => {
      dispatch({
        type: ACTIONS.DATABASE,
        payload: {
          animal: all[0].data.results,
          general: all[1].data.results,
          myth: all[2].data.results,
          science: all[3].data.results,
          geography: all[4].data.results,
          art: all[5].data.results,
          cartoon: all[6].data.results,
          history: all[7].data.results,
          film: all[8].data.results,
          music: all[9].data.results,
        }
      })
      dispatch({ type: ACTIONS.PAGE, payload: 'splash' })
    });
  }, [])

  return {
    categories,
    state,
    setPage,
    setQuestionsArr,
  };
}