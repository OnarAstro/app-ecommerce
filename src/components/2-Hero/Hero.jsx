import Brand from "./components/Brand/Brand"
import TopHero from "./components/TopHero/TopHero"

import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">

    <div className="box-hero">
    <TopHero />
    </div>

      <Brand />
    </div>
  )
}

export default Hero