import React from 'react';
import { Field, Label, Input } from './components/field';
import { Router, Route, Link, Switch } from './components/simple-router';

function HomePage() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <div className="App">
      <div className="container">
        <dl>
          <dt>name</dt>
          <dd>{name}</dd>
          <dt>email</dt>
          <dd>{email}</dd>
        </dl>
        <Field>
          <Label>Name</Label>
          <Input onChange={ev => setName(ev.target.value)} value={name} />
        </Field>
        <Field>
          <Label>Email</Label>
          <div className="input-group">
            <span className="input-group-addon">@</span>
            <Input
              type="email"
              id="email-control"
              onChange={ev => setEmail(ev.target.value)}
              value={email}
            />
          </div>
        </Field>
        <div>
          <Link to="/two">Page Two</Link> | <Link to="/three">Page Three</Link>{' '}
          | <Link to="/asdf9">Somewhere not exists</Link>
        </div>
      </div>
    </div>
  );
}

function PageTwo() {
  return (
    <div>
      <h1>Page Two</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/three">Page Three</Link> |{' '}
        <Link to="/asdf9">Somewhere not exists</Link>
      </div>
    </div>
  );
}

function PageThree() {
  return (
    <div>
      <h1>Page Three</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/two">Page Two</Link> |{' '}
        <Link to="/asdf9">Somewhere not exists</Link>
      </div>
    </div>
  );
}

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <p>The sadness...</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/two" component={PageTwo} />
        <Route path="/three" component={PageThree} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
