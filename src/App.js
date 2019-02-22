import React from 'react';
import { ButtonOption, ButtonSelect } from './components/button-select';
import { Field, Input, Label } from './components/field';
import { Tabs, TabNav, TabNavButton, TabPanel, Tab } from './components/tabs';

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
        <Field>
          <Label>Email</Label>
          <Input type="email" id="email-field" />
        </Field>
        <Tabs>
          <TabNav>
            <TabNavButton tabVal="home">Home</TabNavButton>
            <TabNavButton tabVal="details">Details</TabNavButton>
          </TabNav>
          <TabPanel>
            <Tab tabVal="home">
              <h2>Home</h2>
              <p>lorem</p>
            </Tab>
            <Tab tabVal="details">
              <h2>Details</h2>
              <p>lorem2</p>
            </Tab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
