import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Post.module.css";

// component renders artist information and statistics
const Artist = (props) => {
  const {
    owner,
    id,
    profile_id,
    profile_image,
    content,
    // hourly_rate,
    location,
    email,
    phone,
    reviews_count,
    average_rating,
    isProfilePage,
    showAll,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  return (
    <Card className={styles.Post}>
      <Card.Body>
        {!isProfilePage && (
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={100} />
              {owner}
            </Link>
          </Media>
        )}
        <p className="text-center">
          Speciality:
          {content}
        </p>
        <p className="text-center">
          Location:
          {location}
        </p>
        {/* <p className="text-center">
          Rate: €
          {hourly_rate}
          {" "}
          per hour
        </p> */}
        <p className="text-center">
          Email:
          {email}
        </p>
        <p className="text-center">
          Phone:
          {phone}
        </p>
        <p className="text-center">
          Rating:
          {" "}
          <Rating readonly initialValue={average_rating} size={25} />
        </p>
        <p>
          {reviews_count}
          {" "}
          reviews
        </p>
        {!is_owner && (
          <Button
            className={btnStyles.Button}
            onClick={() => history.push(`/reviews/${id}/create`)}
            aria-label="create-review"
          >
            Leave a review
          </Button>
        )}
        {showAll && (
          <Button
            className={btnStyles.Button}
            onClick={() => history.push(`/reviews/${id}`)}
            aria-label="view-reviews"
          >
            Artist Reviews
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};


export default Artist;
