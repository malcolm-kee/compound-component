import React from 'react';
import { ButtonOption, ButtonSelect } from './components/button-select';

function App() {
  const [framework, setFramework] = React.useState('');

  return (
    <div className="App">
      <div className="container">
        <dl>
          <dt>framework</dt>
          <dd>{framework}</dd>
        </dl>
        <ButtonSelect value={framework} onChangeValue={setFramework}>
          <ButtonOption value="ng">Angular</ButtonOption>
          <ButtonOption value="react">React</ButtonOption>
          <ButtonOption value="vue">Vue</ButtonOption>
        </ButtonSelect>
      </div>
    </div>
  );
}

export default App;
