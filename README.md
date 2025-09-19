
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
- git clone

Frontend
- 
- npm install - dependencies install
- npm run build - dist folder
- sudo apt update
- sudo apt update nginx
- sudo systemctl start nginx
- sudo systemctl enable nginx
- copy code from build files(dist) to /var/www/html
- sudo scp -r dist/* /var/www/html/
- Enable port 80 of your instance

Backend


- cd DevTinder/
- npm install
- updated DB password
- allowed ec2 instance public ip on mongodb server
- npm install pm2 -g
- pm2 start npm --start
(pm2 logs)
(pm2 flush npm) npm - name of the application
pm2 list - list of process
pm2 stop npm - stop the process
pm2 delete npm - delete the process
- 
modify base url of frontend to /api



# Deployment

- Signup on AWS 
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-43-204-96-49.ap-south-1.compute.amazonaws.com
- Install Node version 16.17.0
- Git clone
- Frontend    
    - npm install  -> dependencies install
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html/
    - sudo scp -r dist/* /var/www/html/
    - Enable port :80 of your instance
- Backend
    - updated DB password
    - allowed ec2 instance public IP on mongodb server
    - npm intsall pm2 -g
    - pm2 start npm --name "devTinder-backend" -- start
    - pm2 logs
    - pm2 list, pm2 flush <name> , pm2 stop <name>, pm2 delete <name>
    - config nginx - /etc/nginx/sites-available/default
    - restart nginx - sudo systemctl restart nginx
    - Modify the BASEURL in frontend project to "/api"


nginx config
-----------

        Frontend = http://43.204.96.49/
    Backend = http://43.204.96.49:7777/

    Domain name = devtinder.com => 43.204.96.49

    Frontend = devtinder.com
    Backend = devtinder.com:7777 => devtinder.com/api

    nginx config : 

    server_name 43.204.96.49;

    location /api/ {
        proxy_pass http://localhost:7777/;  # Pass the request to the Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }







- Body

Navbar
Route=/ => feed
Router=/connections => connections
Route=/login => login
Route=/profile => profile