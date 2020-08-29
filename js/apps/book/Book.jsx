const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { BookApp } from './pages/BookApp.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { BookAdd } from './cmps/BookAdd.jsx'
import { Modal } from './cmps/Modal.jsx'

export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <main>
                        <Switch>
                            <Route component={BookDetails} path="/books/:bookId" />
                            {/* <Route component={BookApp} path="/books" /> */}
                        </Switch>
                    </main>
                    <Modal>
                        <BookAdd />
                    </Modal>
                </div>
            </Router>
        )
    }
}