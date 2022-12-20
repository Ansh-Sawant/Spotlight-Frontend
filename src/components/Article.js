import { Container, Row, Col } from "react-bootstrap";
import { bookmarks } from "../service/api";

const Article = ({ article, loginUser }) => {
  const bookMarkedNews = {
    name: loginUser.loginUser.name,
    email: loginUser.loginUser.email,
    author: article.author,
    title: article.title,
    description: article.description,
    url: article.url,
    urlToImage: article.urlToImage,
    publishedAt: article.publishedAt,
    content: article.content,
  };

  return (
    <>
      <div className="articleDiv">
        <div className="article">
          <Container>
            <Row>
              <Col md={4} xs={12}>
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="articleImage"
                />
              </Col>
              <Col md={8} xs={12}>
                <h4 className="articleTitle">{article.title}</h4>
                <p className="articleAuthorTime">
                  By {article.author} | {article.publishedAt}{" "}
                </p>
                <p className="articleDesc">{article.description}</p>
                <div className="articleBtnDiv">
                  <button
                    className="articleBtn"
                    onClick={() => {
                      if (bookMarkedNews.name) {
                        bookmarks(bookMarkedNews);
                      } else {
                        alert("Please Login First");
                      }
                    }}
                  >
                    <i className="fa fa-star" />
                    &nbsp;Bookmark
                  </button>

                  <button className="articleBtn">
                    <a href={article.url} target="_bla">
                      <i className="fa fa-book" />
                      &nbsp;Read More
                    </a>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Article;
