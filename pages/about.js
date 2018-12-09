import Link from "next/link"

const About = () => (
    <div>
      <h1>About</h1>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <p>about kungpotato</p>
      <img src="/static/test1.jpg"/>
    </div>
  )
  export default About