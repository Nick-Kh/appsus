const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { NavBar } from './cmps/NavBar.jsx'
import { Home } from './pages/Home.jsx'
import { Book } from './js/apps/book/Book.jsx'
import { Note } from './js/apps/note/Note.jsx'
import { EmailApp } from './js/apps/mail/EmailApp.jsx'

export class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route component={Note} path='/note'></Route>
            <Route component={EmailApp} path='/mail'></Route>
            <Route component={Book} path='/book'></Route>
            <Route component={Home} path='/' />
          </Switch>
        </main>
      </Router>
    )
  }
}