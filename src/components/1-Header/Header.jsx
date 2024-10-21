import Menu from "./components/Menu/Menu"
import TopHeader from "./components/TopHeader/TopHeader"

import "./Header.css"
const header = () => {
  return (
    <div className="header  ">
      <TopHeader />
      <Menu />
    </div>
  )
}

export default header