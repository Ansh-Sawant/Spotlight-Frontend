import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNews } from "../service/api";
import Article from "./Article";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const Articles = (loginUser) => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dailyNews();
  }, [page]);

  const dailyNews = async () => {
    let response = await getNews(page);
    setNews([...news, ...response.data]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={news.length}
        next={() => setPage((page) => page + 1)}
        hasMore={true}
      >
        {(news.length > 0) ?
          news.map((article) => {
            return (
              <Article
                article={article}
                loginUser={loginUser}
                key={article._id}
              />
            );
          }) :
            <div>
              <div className="alertMessage">
                <Alert key='info' variant='info'>
                  Please give us few seconds while we load some news for you!
                </Alert>
              </div>
              <div className="loader">
                <Spinner animation="border" role="status" />
              </div>
            </div>
        }
      </InfiniteScroll>
      <footer>
        Made By: Ansh Sawant
      </footer>
    </>
  );
};

export default Articles;
