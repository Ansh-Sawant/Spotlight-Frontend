import { Container, Row, Col } from "react-bootstrap";
import { bookmarks } from "../service/api";
import { useHistory } from "react-router-dom";

const Article = ({ article, loginUser }) => {
  let history = useHistory();

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

  const transformDate = (date) => {
    if(!date) return null;
    const dateArray = date.split('T');
    return dateArray[0];
  }

  return (
    <>
      <div className="articleDiv">
        <div className="article">
          <Container>
            <Row>
              <Col md={4} xs={12}>
                <img
                  src={(article.urlToImage) ? (article.urlToImage) : './lamp.png'}
                  alt={article.title}
                  className="articleImage"
                />
              </Col>
              <Col md={8} xs={12}>
                <h4 className="articleTitle">{article.title}</h4>
                <p className="articleAuthorTime">
                  By {(article.author) ? (article.author) : 'News Website'} | {transformDate(article.publishedAt)}{" "}
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
                        history.push('/login');
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
