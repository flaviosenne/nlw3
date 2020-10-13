import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = {Landing}/>
                <Route path = '/orfanato' component = {OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes