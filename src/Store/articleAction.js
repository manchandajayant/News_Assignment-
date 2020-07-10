import request from "superagent";
export const ARTICLES_FETCHED = "ARTICLES_FETCHED";

const API_KEY = `${process.env.REACT_APP_NEWS_API_KEY}`;
const baseUrl = `http://newsapi.org/v2/everything?q=football&from=2020-07-09&sortBy=publishedAt&apiKey=${API_KEY}`;
const allArticlesFetched = (articles) => ({
  type: ARTICLES_FETCHED,
  payload: articles,
});

export const showAllArticles = () => (dispatch, getState) => {
  request(`${baseUrl}`)
    .then((res) => {
      const action = allArticlesFetched(res.body);
      dispatch(action);
      //console.log(action);
    })
    .catch(console.error);
};
