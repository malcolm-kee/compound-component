import React from 'react';
import { Field } from './components/field';

function App() {
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
        <Field
          label="Name"
          onChange={ev => setName(ev.target.value)}
          value={name}
        />
        <Field
          label="Email"
          type="email"
          id="email-control"
          onChange={ev => setEmail(ev.target.value)}
          value={email}
        />
      </div>
    </div>
  );
}

export default App;
