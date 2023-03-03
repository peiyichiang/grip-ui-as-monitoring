/*
 * This software is Copyright (c) 2015 The Regents of the University of
 * California. All Rights Reserved. Permission to copy, modify, and distribute this
 * software and its documentation for academic research and education purposes,
 * without fee, and without a written agreement is hereby granted, provided that
 * the above copyright notice, this paragraph and the following three paragraphs
 * appear in all copies. Permission to make use of this software for other than
 * academic research and education purposes may be obtained by contacting:
 *
 * Office of Innovation and Commercialization
 * 9500 Gilman Drive, Mail Code 0910
 * University of California
 * La Jolla, CA 92093-0910
 * (858) 534-5815
 * invent@ucsd.edu
 *
 * This software program and documentation are copyrighted by The Regents of the
 * University of California. The software program and documentation are supplied
 * "as is", without any accompanying services from The Regents. The Regents does
 * not warrant that the operation of the program will be uninterrupted or
 * error-free. The end-user understands that the program was developed for research
 * purposes and is advised not to rely exclusively on the program for any reason.
 *
 * IN NO EVENT SHALL THE UNIVERSITY OF CALIFORNIA BE LIABLE TO ANY PARTY FOR
 * DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST
 * PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN IF
 * THE UNIVERSITY OF CALIFORNIA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGE. THE UNIVERSITY OF CALIFORNIA SPECIFICALLY DISCLAIMS ANY WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE. THE SOFTWARE PROVIDED HEREUNDER IS ON AN "AS
 * IS" BASIS, AND THE UNIVERSITY OF CALIFORNIA HAS NO OBLIGATIONS TO PROVIDE
 * MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR MODIFICATIONS.
 */

import React from "react";
import EventsList from "./pages/events_list";
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import ReactDOM from 'react-dom';
import EventDetails from "./pages/event_details";
import PfxEventDetails from "./pages/pfx_event_details";
import EventTags from "./pages/event_tags";
import Nav from "./templates/nav";
import Footer from "./templates/footer";
import CodeRepos from "./pages/repos";
import Acknowledgement from "./pages/ack";
import Methodology from "./pages/method";
import Contacts from "./pages/contacts";

const App = () => {
    // const { isLoading } = useAuth0();

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return <React.Fragment>
        <Nav/>
        <Switch>
            {/* page routes */}
            <Route path='/events/:eventType/:eventId/:pfxEventId/:pathAsn' component={PfxEventDetails}/>
            <Route path='/events/:eventType/:eventId/:pathAsn' component={EventDetails}/>
            <Route path='/method' component={Methodology}/>
            <Route path='/repos' component={CodeRepos}/>
            <Route path='/ack' component={Acknowledgement}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/tags' component={EventTags}/>
            <Route path='/' component={EventsList}/>
        </Switch>
        <Footer/>
    </React.Fragment>
}

class HijacksApp extends React.Component {

    render() {
        return <BrowserRouter>
                <App/>
        </BrowserRouter>;
    }
}

// ReactDOM.render(<HijacksApp/>, document.getElementById('root'));
export default HijacksApp;
