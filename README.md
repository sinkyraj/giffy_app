# giffy_app
This app is about search for favorite giffy and save them.

A user can search view and save giFs images and animated Stickers. 

# tools or npm packages (package.json)
   express mongoose concurrently if-env dotenv axios
   material-UI, react-router-dom
# description 
 1- I used create-react-app command to create this app.
 2- db folder has database information.
 3- React's  client folder(UI) can communicate with the backend through server.js file.
 4- App's data is defined in the model folder in Gifs.js.
 5- routes folder has giphyRoutes to seach Gifs Images and animated stickers using Giphy Api and gifRoutes to get, post and delete routes to match with custom method from front end axios.  
 6- dotenv file has APi keys from Giphy Api site.
 7- App's UI has been established in the client folder and UI has been designed using the React libraries - material-UI, react-router-dom.
 8- client's component folder has Navbar information, pages has multi view structure (Home, Saved). 
 9- Client's Util folder has custom axios method to communicate with backened routes.
 10- Please write npm i in the root directory terminal and another npm i in client directory terminal to install all the packages you requires to run this app.
 11- Please wrire npm start in the root directory terminal to start app.

