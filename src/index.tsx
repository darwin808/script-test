// export * from "./components/ZestyExplorer"

import React from "react"
import ReactDOM from "react-dom"
import { ZestyExplorer } from "./components"
import { canUseDOM } from "./utils/index"

console.log("cdn v3")
console.log(process.env, "ENV")
const main = () => {
   if (!canUseDOM()) {
      return null
   }
   document.body.innerHTML += '<div id="zesty-explorer"></div>'
   return ReactDOM.render(<ZestyExplorer />, document.getElementById("zesty-explorer"))
}

main()
