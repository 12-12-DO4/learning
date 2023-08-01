/*
It's imp to remember that all comp names in React must be capitalized
as React treats lowercase components as regular HTML elems
Capitalizing component name helps React to distinguish JSX elems from HTML elems
*/

import { useState } from "react";

function Notes() {
  const [cond, setCond] = useState(true);
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
      <div className="props_vs_states" >
        like params in JS func allow you pass in vals as args, React uses props to pass data btw comps
        <br /> Props are like a JS obj passed using JSX syntax
        <br />When two comps communicate with each other, this communication is one-way street (unidirectional). 
        The component sending the props data is "parent" and the one receiving the data is "child". 
        access props on data obj using the regular dot notation syntax of plain JS
        <br />Props are immutable (cannot be changed). 
        when you declare a comp using props, it must never modify its own prompts (pure func)
        <br />React can be divided into props data and states data. 
        <br />Props data is data <strong>outside</strong> the comps that it receives and works with but cannot mutate. 
        (belongs to the parent that renders the comps)
        <br />State data is data <strong>inside</strong> the comps that it controls and can mutate. 
        (belongs to the component itself)
        <br />child comp will receive data via props, passing state that's set in a parent stateful comp.
        <br />Lifting state up is about cutting the state from child comp and moving it to the parent comp, 
        with the intent of making the state available in sibling comps.
        <br />prop drilling is passing data from parent to a child, then to a grandchild, and so on, 
        until it reaches more distant comp further down the comp tree, where this data is required
        <br />Lifting up state sometimes leads to prop drilling, which lowers maintainability and modularity (-ve res).
        <br />This is no diff when it comes to choosing stateful or stateless comp
        <br />stateful comp holds states as internal data and its state changes based on the way that the app is built; 
        often as a result of user actions. Use stateful comps when comp needs to maintain its own state in order to work
        <br /> A stateless comp however, doesn't store states and any changes must be inherited through props. 
        Use stateless comps when your comp doesn't need to maintain its own state in order to work.
        <br />A common approach for organizing comps is to have a stateful comp as parent 
        sends its states down to several stateless comps receive the state and render it on the screen. 
        <br />children comps are stateless and receive their parent state when passed down by using props. 
        <br />Keep in mind that you should never change the vals of props in children comps as they are immutable
        <br />App comp stores state can be changed through events and funcs and is therefore a stateful comp
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
      <div className="HTMLvsJSX">
        In HTML, you provide the event handling attr starting with on, 
        append the name of the event <strong>All lowercased</strong>. 
        After the "=" use "". 
        Inside "" <mark>invoke</mark> func that will run contrary to HTML.
        <br />
        In React, provide the event handling attrs starting with on, 
        append name of event <strong>First letter capitalized</strong>. 
        After "=" use opening and closing curly braces. 
        Inside curly brace delimiters, add <mark>name</mark> of the func to be run. 
        <i>Make sure not to invoke it.</i>
        <br />
        Finally, one more feature only using React is the passing of function declarations as props.
      </div>
      <div className="hooks">
        call hooks at the top level of comp or hooks. 
        Do not call hooks inside loops or conditions. 
        call hooks from React funcs, and not regular JS funcs. 
        <br />there are many hooks: useState, useContext, useMemo, useRef.
        <br />To share logic and reuse it across several comps, extract it into custom hook.
        <br />always use array destructuring when working with "useState". 
        name the state-setting func using the word “set” plus whatever the name of the state var is (in camelCase)
        <br />Use "useRef" hook to access a child element directly. 
        When invoking "useRef" hook, it will return a ref object (has a prop named "current").
        <br />using the context API is like teleporting to your destination instantly. 
        It's way to bypass redundant passing of data through multiple levels of comps. 
        To set it up, add a piece of code that will be your context provider. It's also where the state will be stored. 
        When a component needs to use the state, it becomes a context consumer.
      </div>
      <div className="spa">
        Social network, online email provider, map apps, their excellent ux are driven by SPAs. 
        <br />The entire app is loaded inside a single div, not in diff pages. 
        Diff views rendered when React makes changes to the Virtual DOM, with React updating the real DOM accordingly. 
        diff pages are broken into templates (views). Each view will have HTML code containing vars updated by app. 
        Browser sends req to server, and server sends back a JSON obj. 
        Browser then updates web page by inserting temp with vars replaced by the vals in JSON obj.
      </div>
      {
        cond && 
        <div className="cond-render">
          AND "&&" op is used to achieve cond rendering. surrounded by some code both on its left and on its right sides; 
          on left, val is provided, on right, a piece of JSX is provided. If a prop gets evaluated to true, using the &&, 
          you can render whatever JSX elems you want to right of "&&". 
        </div>
      }
      {/* cond ? <p>cond works successfully</p> : setCond(true) */}
      <div className="router">
        Instead of anchor tags and href attr, use the Link tag and to attr with React Router. 
      </div>
    </div>
  )
};

export default Notes;