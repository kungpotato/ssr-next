import Link from "next/link"


const Index = () => (
  <div>
    <h1>Home</h1>
    <Link href="/about">
      <a>Go about</a>
    </Link>
    <p>Welcome to home page</p>
  </div>
)
export default Index