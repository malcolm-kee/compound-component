import React from 'react';
import { Field, Label, Input } from './components/field';
import { ButtonSelect, ButtonOption } from "./components/button-select";
import { Tabs, Tab, TabNav, TabNavButton, TabPanel } from "./components/tabs";

function App() {
  const [email, setEmail] = React.useState('');
  const [framework, setFramework] = React.useState(null);

  return (
    <div className="App">
      <div className="container">
        <dl>
          <dt>email</dt>
          <dd>{email}</dd>
        </dl>
        <dl>
          <dt>framework</dt>
          <dd>{framework}</dd>
        </dl>
        <Field>
          <Label>Email</Label>
          <div className="input-group">
            <span className="input-group-addon">@</span>
            <Input
              type="email" 
              onChange={ev => setEmail(ev.target.value)} 
            />
            </div>
        </Field>
        <ButtonSelect value={framework} onChangeValue={setFramework}>
          <ButtonOption value="ng">Angular</ButtonOption>
          <ButtonOption value="react">React</ButtonOption>
          <ButtonOption value="vue">Vue</ButtonOption>
        </ButtonSelect>
        <Tabs>
          <TabNav>
            <TabNavButton tabVal="intro">Intro</TabNavButton>
            <TabNavButton tabVal="details">details</TabNavButton>
          </TabNav>
          <TabPanel>
            <Tab tabVal="intro">
              <h1>This is intro</h1>
            </Tab>
            <Tab tabVal="details">
              <h1>This is details</h1>
            </Tab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
