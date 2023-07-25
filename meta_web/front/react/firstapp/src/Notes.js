/*
It's imp to remember that all comp names in React must be capitalized
as React treats lowercase components as regular HTML elems
Capitalizing component name helps React to distinguish JSX elems from HTML elems
*/

function Notes() {
  return(
    <div className="notes">
      <div>React comp is much like a regular JS func</div>
      <div>For a comp to render something on the page, it needs to return one or more JSX elems</div>
      <div>browser cannot understand JSX syntax</div>
      <div>JSX looks like HTML so much that but it's actually JS code, not HTML</div>
      <div className="folder-structure">
        <ul>
          <li>
            <span>src</span>
            <ul>
              <li>App.css contains the styles for the App.js comps</li>
              <li>index.css file contains the styles to use in the entire app</li>
              <li>
                App.test.js, setupTests.js, and the reportsWebVitals.js 
                are files related to the app's performance and testing
              </li>
              <li>
                logo.svg file is displayed on the start page of the default app 
                when the app is displayed in the browser on the local host
              </li>
            </ul>
          </li>
          <li>
            <span>root</span>
            <ul>
              <li>
                .gitignore file is using version control 
                and used to specify what files and folders must be excluded from a proj.
                this file is not specific to React. This means that other sys use this file too.
              </li>
              <li>
                README.md file is a markdown file that gives some basic information on this proj. 
                Devs use this when they want to share the proj's code on sites like GitHub
              </li>
              <li>
                package.json a json file lists information pertaining to my app, 
                which allows npm to run several scripts and perform various tasks in the app itself. 
                It helps npm rebuild the app on another machine.
              </li>
              <li>
                the package-lock.json file holds the list of all deps with a specific v. 
                if we delete the node modules folder with (files that our proj needs to run), 
                it has all the information for npm to be able to rebuild those files reliably. 
                This file is there to ensure the npm tracks all the modules installations properly.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
};