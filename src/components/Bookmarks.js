import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { deleteBookmarks, getBookmarks } from "../service/api";

const Bookmark = (loginUser) => {
  const [bookmarks, setBookmarks] = useState({});
  let [deleteBookmarksCount, setDeleteBookmarksCount] = useState(0);

  useEffect(() => {
    allBookmarks();
  }, [deleteBookmarksCount]);

  const allBookmarks = async () => {
    let response = await getBookmarks();
    const allBookmarks = response.data;
    const currentUserBookmark = allBookmarks.filter((each) => each.email === loginUser.loginUser.email);
    setBookmarks(currentUserBookmark);
    console.log(currentUserBookmark);
  };

  const transformDate = (date) => {
    if(!date) return null;
    const dateArray = date.split('T');
    return dateArray[0];
  }

  return (
    <>
      <h1>My Bookmarks</h1>
      {(bookmarks.length > 0) ?
        bookmarks.map((bmNews) => {
          return (
            <>
              <div key={bmNews.title} className="articleDiv">
                <div className="article">
                  <Container>
                    <Row>
                      <Col md={4} xs={12}>
                        <img
                          src={(bmNews.urlToImage) ? (bmNews.urlToImage) : './lamp.png'}
                          alt={bmNews.title}
                          className="articleImage"
                        />
                      </Col>
                      <Col md={8} xs={12}>
                        <h4 className="articleTitle">{bmNews.title}</h4>
                        <p className="articleAuthorTime">
                        By {(bmNews.author) ? (bmNews.author) : 'News Website'} | {transformDate(bmNews.publishedAt)}{" "}
                        </p>
                        <p className="articleDesc">{bmNews.description}</p>
                        <div className="articleBtnDiv">
                          <button
                            className="articleBtn"
                            onClick={() => {
                              deleteBookmarks(bmNews.email, bmNews.title);
                              setDeleteBookmarksCount(
                                (deleteBookmarksCount += 1)
                              );
                              alert("Bookmark Removed");
                            }}
                          >
                            <i className="fa fa-trash" />
                            &nbsp;Remove
                          </button>
                          <button className="articleBtn">
                            <a href={bmNews.url} target="_bla">
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
        })
        : 
        <div className="bookmarkMessage">
          Currently you don't have any bookmarks
        </div>
      }
    </>
  );
};

export default Bookmark;
