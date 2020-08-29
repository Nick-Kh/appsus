const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { NavBar } from './cmps/NavBar.jsx'
import { Home } from './pages/Home.jsx'
import { BookApp } from './js/apps/book/pages/BookApp.jsx'
import { Note } from './js/apps/note/Note.jsx'
import { EmailApp } from './js/apps/email/EmailApp.jsx'

export class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route component={Note} path='/note'></Route>
            <Route component={EmailApp} path='/email'></Route>
            <Route component={BookApp} path='/books'></Route>
            <Route component={Home} path='/' exact />
          </Switch>
        </main>
      </Router>
    )
  }
}
