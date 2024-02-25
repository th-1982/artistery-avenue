import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProfilePage from "./pages/profiles/ProfilePage";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostEditForm from "./pages/posts/PostEditForm";
import PostsPage from "./pages/posts/PostsPage";
import PostPage from "./pages/posts/PostPage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ContactCreateForm from "./pages/contacts/ContactCreateForm";
import ProfileDeleteForm from "./pages/profiles/ProfileDeleteForm";
import NotFound from "./components/NotFound";
import Artist from "./pages/artists/Artist";
import ArtistsPage from "./pages/artists/ArtistPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import ReviewCreateForm from "./pages/reviews/ReviewCreateForm";
import ArtistCreateForm from "./pages/artists/ArtistCreateForm";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="We could not find what you were looking for. Search for another keyword" />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results have been found. Search another keyword or follow a User."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
           <Route
            exact
            path="/bookmarked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or bookmark a post."
                filter={`bookmarks__owner__profile=${profile_id}&ordering=-bookmarks__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route
            exact
            path="/profiles/:id/delete"
            render={() => <ProfileDeleteForm id={profile_id} />}
          />
          <Route exact path="/contact/" render={() => <ContactCreateForm />} />
          <Route exact path="/artist" render={() => <Artist />} />
          <Route exact path="/artists" render={() => <ArtistsPage />} />

          <Route
            exact
            path="/artists/create/"
            render={() => <ArtistCreateForm />}
          />
          <Route
            exact
            path="/reviews/:id"
            render={() => <ReviewsPage />}
          />
          <Route
            exact
            path="/reviews/:id/create/"
            render={() => <ReviewCreateForm />}
          /> 
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
