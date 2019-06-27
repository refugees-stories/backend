# backend
Backend development for Refugee Stories group app.

# Endpoints to register, login, and get info

| Endpoint | Description |
| --- | --- |
| '/' | The root directory; used as a sanity check to ensure basic server functionality. |
| '/api/user/register | The directory for registering new users, implementing { username: xxx, password: xxx } and assigned an autoincrementing ID |
| '/api/user/login' | The directory to log in, implementing { username: xxx, password: xxx }; a successful log in returns a welcome message and token. |

# Once logged in and you've pushed the jwt to headers as 'Authorization'

| Endpoint | Description |
| --- | --- |
| '/api/user/submit' | Adds new stories, implementing { name: xxx, story: xxxx xxx xxxx xxxxxx } format viewable to all users; { name } is intended for the speaker or author of the story but may be left blank. |
| '/api/stories/' | Displays all current stories within the app database. |
| '/api/stories/:id' | Displays a story associated with submitted ID.' |
| '/api/stories/:id' | Deletes the story associated with submitted ID. |
| '/api/stories/:id' | Updates the story associated with submitted ID, and returns new body object with said story |


# Generic Login info:

| Login | Password |
| --- | --- |
| testuser | password |

#Final Test
Final test has not yet been conducted.

# A Heroku Warning: It Is...Heroku
As a previous backend developer warned once, HerokuApp does some weird things with servers. New users will disappear every 4-6 hours, but seeded users are permanent. If there is data you would like to be permanent as well (pre-existing users, seed refugee stories, etc.), please let me know.
