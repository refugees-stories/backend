# backend
Backend development for Refugee Stories group app.

# Endpoints to register, login, and get info

| Endpoint | Description |
| --- | --- |
| '/' | The root directory; used as a sanity check to ensure basic server functionality. |
| '/register | The directory for registering new users, implementing { username: xxx, password: xxx } and assigned an autoincrementing ID |
| '/login' | The directory to log in, implementing { username: xxx, password: xxx }; a successful log in returns a welcome message and token. |
| '/test' | displays a list of registered users IF login and auth token are present |

# Once logged in and you've pushed the jwt to headers as 'Authorization'

| Endpoint | Description |
| --- | --- |
| '/addstory' | Adds new stories, implementing { name: xxx, story: xxxx xxx xxxx xxxxxx } format viewable to all users; { name } is intended for the speaker or author of the story but may be left blank. |
| '/stories' | Displays all current stories within the app database. |
| '/deletestory/:id' | Deletes the story associated with submitted ID. |
| '/updatestory/:id' | Updates the story associated with submitted ID, and returns new body object with said story |


# Generic Login info:

| Login | Password |
| --- | --- |
| testuser | password |

#Final Test
Final test has not yet been conducted.

# A Heroku Warning: It Is...Heroku
As a previous backend developer warned once, HerokuApp does some weird things with servers. New users will disappear every 4-6 hours, but seeded users are permanent. If there is data you would like to be permanent as well (pre-existing users, seed refugee stories, etc.), please let me know.
