import React from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext.js";
import Profile from "./Profile";

  // PopularProfiles Component
  const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();
  
  // PopularProfiles Structure
  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      
      {popularProfiles.results.length ? (
        <>
       
          <p><i className="fa-solid fa-users-viewfinder fa-lg"></i>Most followed profiles.</p>
          {mobile ? (
          
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};


export default PopularProfiles;


