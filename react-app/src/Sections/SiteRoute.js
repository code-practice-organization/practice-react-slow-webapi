import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Posts from '../Components/Posts'
import NotFound from '../Components/NotFound'

/**
 * Functional Component for handle routes of sites.
 *
 * @component
 * @example
 * return (
 *   <SiteRoutes />
 * )
 */
const SiteRoutes = () => (
    <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/home" component={Posts} />

        <Route path="*" component={NotFound} />
    </Switch>
)

export default SiteRoutes
