import Link from "next/link"
import Layout from "../components/Layout"
import {Component} from "react"

export default class About extends Component {
  state = {
    user: null
  }

  componentDidMount () {
    fetch('https://api.github.com/users/reedbarger')
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data
        })
      })
  }

  render () {
    return (
      <Layout title="About">
        {JSON.stringify(this.state.user)}
        <Link href="/">
          <a>Go home</a>
        </Link>
        <p>about kungpotato</p>
        <img src="/static/test1.jpg"/>
      </Layout>
    )
  }
}