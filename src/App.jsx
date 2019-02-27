import React from 'react';
import { Field } from './components/field';

function App() {
  const [email, setEmail] = React.useState('');

  return (
    <div className="App">
      <div className="container">
        <dl>
          <dt>email</dt>
          <dd>{email}</dd>
        </dl>
        <Field
          label="Email"
          type="email"
          onChange={ev => setEmail(ev.target.value)}
          value={email}
        />
      </div>
    </div>
  );
}

export default App;
