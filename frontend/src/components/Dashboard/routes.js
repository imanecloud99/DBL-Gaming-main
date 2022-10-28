import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from "../Dashboard/Sidebar";
import FriendsPage from "../Pages/FriendsPage";
import ChannelSettings from "./Views/ChannelSettings";
import Followers from "./Views/Followers";
import Home from "./Views/Home";
import StreamManager from "./Views/StreamManager";
import StreamSettings from "./Views/StreamSettings";
import StreamTools from "./Views/StreamTools";

import Navbar from "../Navbars/Navbar"


function RoutesDashboard () {
    return(
        <>
        <div className="dashboardPage__main">

            <Router>

                <Sidebar />
                <Switch>
                    <Route path='/dashboard/home' exact component={Home}/>
                    <Route path='/dashboard/streamingtools' exact component={StreamTools}/>
                    <Route path='/dashboard/streamanager' exact component={StreamManager}/>
                    <Route path='/friends' exact component={FriendsPage}/>
                    <Route path='/dashboard/followers' exact component={Followers}/>
                    <Route path='/dashboard/settings/stream' exact component={StreamSettings}/>
                    <Route path='/dashboard/settings/channel' exact component={ChannelSettings}/>
                </Switch>

            </Router>
           
        </div>
        </> 
    );
}

export default RoutesDashboard;