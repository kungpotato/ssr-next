import Link from "next/link"
import Layout from "../components/Layout"

const About = () => (
    <Layout title="About">
      <Link href="/">
        <a>Go home</a>
      </Link>
      <p>about kungpotato</p>
      <img src="/static/test1.jpg"/>
    </Layout>
  )
  export default About