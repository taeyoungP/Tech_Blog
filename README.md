# Tech Blog

## Task

The task for this project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Descripton

 * [Link to deployed application](https://guarded-waters-21251.herokuapp.com)

 * Homepage
 ![homepage](./Assets/images/homepage.png)

 * Login Page
 ![login page](./Assets/images/login_page.png)

 * Signup Page
 ![signup page](./Assets/images/signup.png)

 * Dashboard (Accessible once the user signed in.)
 ![dashboard page](./Assets/images/dashboard.png)

 * Create new post
 ![create new post](./Assets/images/newpost.png)

 * Update/Delete the post
 ![update delete post page](./Assets/images/update_delete_post.png)

 * Add comment (This feature available to only logged in user.)
 ![add comment](./Assets/images/comment.png)


## How to Use

 * When user is not signed in, they can only read posts and comments from main homepage. Once user is signed in, they are available to create new post(s) or add comment(s) to the post(s). (User can also create new account.)

 * When user is logged in, the page will redirect to main homepage.

 * **Note** When user tries to update the post, update button works and the post will be updated, but the user needs to manually clicks back to dashboard or homepage. **Update button will not redirect the page to anywhere**. User can check their updated post from their dashboard or homepage.

## Credits

 * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
 * [MySQL2](https://www.npmjs.com/package/mysql2)
 * [Sequelize](https://www.npmjs.com/package/sequelize)
 * [dotenv package](https://www.npmjs.com/package/dotenv)
 * [bcrypt package](https://www.npmjs.com/package/bcrypt)
 * [express-session](https://www.npmjs.com/package/express-session)
 * [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
