# Testing:
Testing has been performed for its overall purpose.
The website has proven to exhibit dynamic functionality and responsive interactivity, both in the Front & Back-End.
After consecutive rehearsals and manual testing, the website employed the desired role and met the final goal set by the developer.

Based on the solid foundations of CRUD, testing was performed:
- By navigating and accessing links on the website.
- By Creating, Reading, Updating, and Deleting an account for a registered user. (Deleting: Bugged/Unsolved)
- By Creating, Reading, Updating, and Deleting posts of a registered user.
- By Creating, Reading, Updating and Deleting comments on a post as a registered user.
- By liking and unliking a post as a registered user.
- By following and unfollowing a post as a registered user.
- By Creating, Reading, Updating comments on the community wall as a registered user.
- By Creating, Reading, Updating reviews and ratings on a user profile as a registered user.
- By Creating, Reading, Updating artist profile as a registered user.
- By Creating a message to the moderators via the contact form.
- By Populating the components (Posts, Walls, Reviews, Following Profiles/Followed Profiles) to activate infinite Scrolling.
- By inputting and retrieving results from the search box.
- By Updating the username, bio, password and image of a registered user, if authenticated.
- By manipulating posts, users, comments, artists, bookmarks, likes, followers, contacts, walls, reviews as a superuser in the Admin panel.
- By bookmark and unbookmark a post as a registered user.


## Functionalities
- By clicking on "Home" or the logo located in the NavBar, users are sent to the homepage, where a list of posts can be found, with the latest being retrieved on top. From here, users can browse posts via scroll down and select one to read.
- By clicking on "Feed," users are sent to the Feed page, where logged in users can then retrieve a list of posts for all the users the authenticate duser is following.
- Users can view the list of Artists, contact details, ratings, and number of reviews by clicking on an Artist in the Navigation Bar.
- By clicking on "Liked," users are sent to the Liked page, where logged in users can then retrieve a list of posts for all the liked posts, initially liked by the authenticated user.
- By clicking on "Bookmark," users are sent to the Bookmark page, where logged in users can then retrieve a list of posts for all the Bookmark posts, initially bookmark by the authenticated user.
- By clicking on "Profile," users are sent to the Profile page, where one can Read all the user activity ( including: Posts, number of Posts, number of Followers, list of Followers), number of Followings, list of Followings, all Comments created by this particuar user. If the visitor of thie profile is the owner and is authenticated, then the owner may Update (the username, bio, password and profile image) & Delete the profile (unresolved).
- Inside the Profile page, Users may Edit their Username, Profile Picture, Bio, Password, register as artist and Image by clicking the three dots available at the upper right corner of the component. Users can also Delete the Profile by clicking the "Delete Profile" Button. Once the Profile is deleted the account is eliminated along with the Posts, Comments, Wall posts, Reviews, Bookmarks, artist profile, Follower & Likes associated with that particular account.
- By accessing the "Reviews" component located in artist's profile of a user... authenticated users can Create a Review in a artist's profile. Reviews once created cannot be deleted. Rather, user can Created or Updated their own reviews on content and rating.
- By clicking on Artist in the Navbar, users can create a Review in the Artist's profile by clicking on Leave a review, input content and rating, and click Save.
- By inputting words in the Seach box, Users may filter Posts according to a set of characters. Posts are automatically retrieved if a Post contains words in the Title or Body. Users may click on a post, after retrieved, in order to open and read it.
- By clicking on "Sign Up", users are sent to the Sign Up Form page. In that page, users may give in a Username and Password(2/2) in order to create an account. Once the submit "Sign Up" button is clicked, the account is created and Users may log in to their User account.
- By clicking on "Sign In", users are requested to use their credentials (Username & Password) to access their User accounts. Once "Log in" is clicked, Users are in and can start CRUDing functionalities withing the website.
- By clicking "Sign Out", users are logged out from their accounts.
- By clicking on "Post," users are redirected to the Post Form, where they must input a title & body to create a Post. Posts are submitted by clicking the Submit Button. (Users must be logged in to post.)
- Once a post has been successfully created, it can be accessed and read by the entire community.
- Authors of that particular Post can Read, Update and Delete thie posts. Respectively, these functionalities are achieved by clicking the associated icons at the three dots available inside of the Post page, the "Pencil" and "Bin". Additionally Like/Unlike is restricted to non-authors of the Post, but to authenticated users only as is the creating and updating a Comment. Bookmark/Unbookmark is restricted to non-authors of the Post, but to authenticated users only as is the creating and updating a Comment. Authenticated users can also make use of the Bookmark function, by clicking the "Bookmark" next to the "Heart" and "Comment" icons.
- By clicking the Like/Unlike buttons, inside of a Post, the ammount of likes should be incremented and decremneted accordingly to that post. the number should be displayed in the lower section of the post.
- By clicking the Bookmark/Unbookmark buttons, inside of a Post, the ammount of bookmarks should be incremented and decremneted accordingly to that post. the number should be displayed in the lower section of the post.
- By clicking the Follow/Unfollow buttons on a user profile or most followed profiles component, the ammount should be displayed in a users profile, together with a list of Followers and Followings. Only registered and logged in users can use this functionality.
-By clicking on "Profile," Users may register as an artist by clicking the three dots available at the upper right corner of the component. Users can fill in their contact details, including content, location, email address, and contact phone number, and click Create, and the user is registered as an artist.
-Users may filter Artists according to name, location, or specialty by inputting words in the Search artist. Artists are automatically retrieved if they contain words in the Title or Body. Users may click on an Artist to open and read it after retrieving it.
By clicking on "Artist's Profile," users are sent to the Profile page, where one can Read all the artist's activity ( including Posts, number of Posts, number of Followers, list of Followers), number of Followings, list of Followings, all Comments created by this particular artist on this artist profile. If the visitor of this profile is the owner and is authenticated, then the owner may Update (the username, bio, password, and profile image) and delete the profile (unresolved).
- By clicking on the Contact logo "Letter", displayed in the footer, users are redirected to a contact form, where one is requested to input the e-mail address. One may also write the Name, Subject and Message. This component is free for all, hence, users are not requested to be autheticated. Rather anyone, including visitors may use this functionality.
- Users may write messages on the Walls component. Users need to be logged in in order to submit a message. Once submitted, owners of the message may also alter or update the content of the message. Messages cannot be deleted, only Created and Updated.
- By clicking on the Terms of Service, displayed on the footer, users are faced with a modal, forcing users to read it. The modal should disapear once the button is clicked.