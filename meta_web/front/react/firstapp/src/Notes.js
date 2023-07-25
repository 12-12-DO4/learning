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
      <div></div>
    </div>
  )
};