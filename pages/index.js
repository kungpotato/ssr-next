import Link from "next/link"
import Layout from "../components/Layout"


const Index = () => (
  <Layout title="Home">
    <Link href="/about">
      <a>Go about</a>
    </Link>
    <p>Welcome to home page</p>
  </Layout>
)
export default Index