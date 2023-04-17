import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState(0)

  async function updateNews(){
  const url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4ad9db1f773a42a6bf8ddd40d7e770f0&pageSize=12&page=${page}`;
  setLoading(true)
  let responseData = await fetch(url);
  let parsedData = await responseData.json();
  setArticles(parsedData.articles)
  setTotalResult(parsedData.totalResults)
  setLoading(false)

  }
  useEffect(() => {
    updateNews()
  }, [])
  const fetchMoreData = async() => {
    setPage(page+1)
    const url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4ad9db1f773a42a6bf8ddd40d7e770f0&pageSize=12&page=${page}`;
  setLoading(true)
  let responseData = await fetch(url);
  let parsedData = await responseData.json();
  setArticles([...articles,...parsedData.articles])
  setTotalResult(parsedData.totalResults)
  setLoading(false)
  };
  return (
    <>
      <div className="container my-5">
        <h1
          className="my-5"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          News Plane. Latest {props.category} Breakings
        </h1>
        <div className="container my-2">
          {loading && <Spinner />}
        </div>
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!=totalResult}
        loader={<Spinner/>}
      >
          <div className="container">
          <div className="row">
          {articles.map((element) => {
            return (
              <div className="col" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.source.name}
                  date={new Date(element.publishedAt)}
                  mode={props.mode}
                />
              </div>
            );
          })}
        </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}
News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
}