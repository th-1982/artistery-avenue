import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Post from "./Post";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import CommunityComments from "../../components/CommunityComments";
import Footer from "../../components/Footer";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import WallPostsList from "../../pages/walls/WallPostsList";
import WallPostCreateForm from "../../pages/walls/WallPostCreateForm";


function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

  const id = "id";
  const createWallPost = async (wallPostData) => {
    try {
      await axiosReq.post(
        "https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/walls/",
        wallPostData,
      );
    } catch (error) {
      // Handle the error
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <PopularProfiles mobile />
       {/* <i className={`fas fa-search ${styles.SearchIcon}`} /> */}
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
         
          <Form.Control
            id="searchInput"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col className="d-block p-0 p-lg-2">
      <div className="tablet-and-mobile-only">
        <WallPostsList profileId={id} currentUser={currentUser} />
        <WallPostCreateForm
          profileId={id}
          createWallPost={createWallPost}
          currentUser={currentUser}
        />
      </div>
      <div className="d-none d-lg-block">
      <PopularProfiles />
      </div>
      <CommunityComments /> 
      <Footer />
      </Col>
    </Row>
  );
}


export default PostsPage;