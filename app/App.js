import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Content from './components/Content';
import AudienceList from './components/AudienceList';
import Insights from './components/Insights';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<Router>
			  <div>
			    <ul>
			      <li><Link to="/">Content</Link></li>
			      <li><Link to="/AudienceList">AudienceList</Link></li>
			      <li><Link to="/topics">Topics</Link></li>
			    </ul>

			    <hr/>

			    <Route exact path="/" component={Content}/>
			    <Route path="/AudienceList" component={AudienceList}/>
			    <Route path="/topics" component={Topics}/>
			  </div>
			</Router>
		);
	}

};
export default App;
