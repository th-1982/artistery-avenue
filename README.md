# Artistery Avenue

Artistry Avenue is a social media platform designed for artists and art enthusiasts that aims to create a vibrant and interactive online community for artists and art enthusiasts, providing a platform for sharing, appreciation, and connection within the art world. The platform incorporates diverse features and functionalities encapsulated within distinct applications, each catering to specific aspects of the artistic experience.

It is a website where Users can share the artwork they have made, give feedback to others,  like, and connect.


![Mockup image](readme)


## Live Project
- The live website can be found [here](https://th-1982-artistery-avenue-react-7bb24beffb04.herokuapp.com/)

## Purpose of the website:
- To offer artists and art enthusiasts a platform to share their artwork, including posts, pictures, and comments.
- To establish and nurture a vibrant community of users with shared interests in the art world.
- To facilitate connections and interactions among artists and art enthusiasts.
- To serve as a creative hub and a starting point for personal and future artistic projects.

## Set Goals
- To develop a fully functional and specialized social media platform tailored for artists and art enthusiasts.
- To prioritize user accessibility, interaction, and control over their artistic content and data.
- To establish and cultivate a thriving artistic community on the platform, encouraging creating and sharing creative content, including imagery.

## Design:
The website was designed to ensure users can easily browse through various posts, artworks, and creative content within the platform.
The website prioritizes a navigation system, allowing users to access all components easily. This includes straightforward paths to CRUD functionalities for managing their Posts, Comments, Likes, and Profiles.
The Users are also empowered to perform all CRUD functionalities, such as creating, reading, updating, and deleting their Posts, Comments, Likes, and Profiles. This capability enhances user control and customization.
In addition to standard CRUD operations, Users incorporate specialized functionalities for CRU Reviews and Wall messages. This caters to the unique needs of the artistic community by fostering detailed reviews and interactions on user profiles.

Rather than prioritizing aesthetics like structure and colors, the developer's efforts are geared towards creating more components and their functionality and arranging them accordingly.


# Features & Functionality

## Features and Functionlity for Reg. Non-Registered Users:
- Visitors can read all posts from "/".
- Visitors can read all users' posts from /profiles/(id)/.
- Visitors can create a user account through /signup/.
- Visitors can navigate to the "/", "/signin", "/signup", "/profiles/(id)", and "/contact" pages.
- Visitors can access external links on users' posts/comments and in the Footer.
- Visitors can send messages to the admin panel via the contact form, from /contact/.
- Visitors can view detailed profiles of registered artists, including portfolios and contact details.
- Registered users can bookmark posts to save and revisit them later.
- Registered users can view all the posts they have bookmarked.

## Registered Users (CRUD) can do the above as a Visistor, moreover:
- Users can sign in/out through the "/sign in" and "/sign out" options on the NavBar.
- Users can create posts through the "posts/create" component available on the NavBar.
- Users can update their posts through the "/posts/(id)/edit" functionality available in the MoreDropdown menu inside the Post.
- Users can delete their posts through the "Delete" functionality in the MoreDropdown menu inside the Post.
- Users can Like/Dislike all posts through the "Like/Dislike" functionality under the Post. (Users cannot use this functionality for their Posts)
- Users can navigate to their profiles.
- Users can update their Profile Bio and profile Picture in "Edit Profile" (/profiles/(id)/edit) from the Dropdown menu.
- Users can update their Username in "Change Username" (/profiles/(id)/edit/username) from the Dropdown menu.
- Users can update their Password in "Update Password" (/profiles/5/edit/password) from the Dropdown menu.
- Users can delete their profiles by clicking "Delete Account" from the Dropdown menu. (Bugged).
- Users can create Wall posts via the Wall component at "/."
- Users can update their Wall posts via their posts on the Wall.
- Users can create Reviews on each other's profiles (/profiles/(id)/).
- Users can update their Reviews from their reviews associated with a profile via a profile page.
- Registered users can bookmark posts to save and revisit them later.
- Registered users can view all the posts they have bookmarked.
- Registered users can remove a bookmark from a post.

