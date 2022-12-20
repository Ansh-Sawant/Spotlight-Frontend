import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNews } from "../service/api";
import Article from "./Article";

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
        {news.length > 0 &&
          news.map((article) => {
            return (
              <Article
                article={article}
                loginUser={loginUser}
                key={article._id}
              />
            );
          })}
      </InfiniteScroll>
      <footer>
        Made By: Ansh Sawant
      </footer>
    </>
  );
};

export default Articles;
