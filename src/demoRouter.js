import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

export const demoRouter = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  )
}
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}
