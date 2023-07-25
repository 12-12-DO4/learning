/*
It's imp to remember that all comp names in React must be capitalized
as React treats lowercase components as regular HTML elems
Capitalizing component name helps React to distinguish JSX elems from HTML elems
*/

function Notes() {
  const someStyles = {
    color: "#eee",
    fontWeight: "bold",
    marginRight: "10px"
  }
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
      <div className="props" >
        like params in JS func allow you pass in vals as args, React uses props to pass data btw comps
        <br /> Props are like a JS obj passed using JSX syntax
        <br />When two comps communicate with each other, this communication is one directional. 
        The component sending the props data is "parent" and the one receiving the data is "child"
        <br />when you declare a comp using props, it must never modify its own prompts (pure func)
      </div>
      <div className="return">
        return statements are the area of expressive syntax that allows you write regular HTML code 
        as you'd like to have it in your rendered app. 
        But if you need to return HTML code over multiple lines, it must be placed inside parentheses. 
        <br />This allows devs to alternate btw regular HTML tags, 
        and dynamic vals represented as JSX expressions inside curly braces.
        <br />HTML code must be wrapped in a top level elem, such as a div tag. 
        If you do not want to add extra div elems to the DOM, you can use fragment instead {/* <></> */}
      </div>
      <div className={someStyles} style={{color:"red", fontSize:"18px"}}>
        you cannot use the keyword "class" to work with CSS classes in your HTML elems. 
        As "class" is a reserved keyword in JS, you must use "className" instead. 
        <br className="className"/>"className" is written in camelCase
        <br />You can use "className" to list any number of CSS classes to style a specific JSX elem. 
        This is just like how you use a class attr in regular HTML to style the comp in a sep CSS file.
        <br style={{display: "block", padding:"10px"}}/>or using inline style and pass it a JS obj.
        <br style={someStyles}/>props in camelCase, sep by commas, with str vals, in JS obj format.
      </div>
    </div>
  )
};