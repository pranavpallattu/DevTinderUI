
# DevTinder

- Create a Vite + React Application
- Remove unnecessary code and create a hello world app
- Install tailwindCSS
- Install daisyUI
- Add navbar component to app.jsx
- Create a navbar separate component file
- Install react router dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your body component
- Create a Footer
- Create a Login page 
- Install axios
- CORS => Install cors => add cors middleware to app with configurations origin and credentials:true 
- whenever you're making an api call with axios make {withcredentials:true}
- Install Redux toolkit and read docs
- Install redux toolkit and react-redux => configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in store
- Navbar should update as soon as user logs in 
- Refactor our code to add constants file and components folder
- You should not be able to acces other routes without login
- if token is not present redirect to login page
- Logout feature
- Get the feed and add the feed to the store
- build the user card on feed
- Edit profile feature
- Show toast message on save of profile
- make gender dropdown
- make about textarea
- Instaead of checking skill array.length we are checking the length of the string
- New page - see all my connection
- New page - see all my pending connection requests
- Part 4 - last part - removing req from pending request page
- Feature - accept reject connection req 
- error - feed doesnt shows new user without refresing even after sending ignored or interested

- send or ignore the user from the feed
- Signup new User



deployment - AWS
----------------

- signup on AWS
- Launch Instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-13-126-248-210.ap-south-1.compute.amazonaws.com
- install node version
- 






- Body

Navbar
Route=/ => feed
Router=/connections => connections
Route=/login => login
Route=/profile => profile