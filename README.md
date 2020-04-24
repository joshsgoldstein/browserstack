


## Challenge Overview/Scenario

Create a development pipeline using browserstack as the hosted selenium.  The pipeline requirements include: deployment in a Jenkins CI pipeline, 3 assertions in test scripts, and 5 different browsers to test against.

In this pipeline I will be testing the Tech Kid News application and the new text box I just added to the page. 

Link to test application: [Tech Kid News](https://bobs-playland-tests.netlify.app/)

### Assertions
    * check the title of the application is "Tech Kid News"
    * check that the input text box is visible
    * check that the text rendered to the screen contains the text from the input text box

### Browsers

| Browser | OS           |
|---------|--------------|
| Firefox | Mac Catalina |
| Firefox | Windows 10   |
| Chrome  | Mac Catalina |
| Chrome  | Windows 10   |
| Edge    | Windows 10   |

### Test Script Location
`tests/remote/homepage.js`

### Browserstack Configuration Location
`conf/multiple.conf.js`

### Jenkins Configurtion and Screenshots 
**Jenkinsfile location:** `Jenkinsfile`
**Jenkins screenshot location:** `images/`

### Run the tests
To run the tests locally without jenkins use the following command:
##### `npm test`

-------------------------------------------
## Running the application
In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `npm test`

Launches tests against Browserstack<br />


##### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


