import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import FollowingProfiles from "../profiles/FollowingProfiles";
import FollowedProfiles from "../profiles/FollowedProfiles";
import Footer from '../../components/Footer';
import FilteredComments from "../../components/FilteredComments";
import Artist from "../artists/Artist";
import axios from "axios";
import { Modal } from "react-bootstrap";

// ProfilePage Component
function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [artistData, setArtistData] = useState(null);

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  // console.log(pageProfile)

  const [profile] = pageProfile.results;
  // console.log(profile)
  const is_owner = currentUser?.username === profile?.owner;
  const artistId = profile?.artistId;
  // console.log(artistId)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteArtist = async () => {
    try {
      
      await axios.delete(`/artists/${artistId}/`);
      await axios.put(`/profiles/${id}/`, { artistId: null });
      setArtistData(null);
    } catch (err) {}
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
    //  const handleMount = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        try {
          const { data } = await axiosReq.get(`/artists/${artistId}/`);
          setArtistData(data);
        } catch (err) {
          setArtistData(null);
        }
        setHasLoaded(true);
      } catch (err) {
        setArtistData(null);
       // console.log(err);
      }
    };
    // handleMount();
  //};
    fetchData();
  }, [id, setProfileData, artistId]);

  const mainProfile = (
    <>
      {currentUser && currentUser.username === profile?.owner && (
        <ProfileEditDropdown id={profile?.id}  handleDeleteArtist={handleDeleteArtist} />
      )}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
        <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
            alt="Profile Image"
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
            </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                Follow
              </Button>
            ))}
        </Col>
        {profile?.content && (
        <Col className="p-3"
        style={{ border: "0.5px dashed #dadadf", marginTop: "20px" }}
        >
          {profile.content}
        </Col>
        )}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  // ProfilePage Structure
  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {profile?.artistId && is_owner && (
                <Button className={`${btnStyles.Button} mb-2`} onClick={handleShow}>
                  Remove as artist
                </Button>
              )}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to delete your artist profile?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    className={btnStyles.Button}
                    onClick={handleDeleteArtist}
                  >
                    Confirm
                  </Button>
                </Modal.Footer>
              </Modal>
              {artistData && (
                <Artist {...artistData} isProfilePage showAll />
              )}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      <FollowingProfiles ownerId={profile?.id} />
      <FollowedProfiles followedId={profile?.owner} />
      {profile?.id && <FilteredComments profileId={profile.id} />}
        <Footer />
      </Col>
      <Col className="d-block d-md-block d-lg-none p-0 p-md-2">
        <FilteredComments profileId={profile?.id} />
        {id && (
          <>
            
          </>
        )}
        <Footer />
      </Col>
    </Row>
  );
}

export default ProfilePage;





