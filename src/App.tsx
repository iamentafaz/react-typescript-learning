import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import Button from './components/Button';
import Container from './components/Container';
// import Counter from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UsersContext';
import Users from './components/context/Users';
import DomRef from './components/ref/DomRef';
import { Counter } from './components/class/Counter';
import List from './components/generics/List';
import RandomNumbers from './components/generics/RandomNumbers';
import { Toast } from './components/templateliterals/Toast';
import CustomButton from './components/html/Button';
import CustomComponent from './components/html/CustomComponent';

function App() {
  const name = {
    firstName: 'Mir',
    lastName: 'Ali'
  }

  const nameList = [
    {
      firstName: 'Chandler',
      lastName: 'Bing',
      id: 1
    },
    {
      firstName: 'Phoebe',
      lastName: 'Buffay',
      id: 2
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
      id: 3
    }
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <CustomComponent messageCount={1} isLoggedIn name="Mir"/>
        <CustomButton variant='primary'>Primary Button</CustomButton>
        <Toast position='center' />
        {/* <RandomNumbers value='Random Numbers' isPositive />
        <RandomNumbers value='Random Numbers'  isNegative />
        <RandomNumbers value='Random Numbers' isZero/> */}

        {/* <List items={['Apple', 'Banana', 'Guava']} onClick={(item) => console.log(item)}/>
        <List items={[1, 2, 3]} onClick={(item) => console.log(item)}/> */}
        {/* <List items={nameList} onClick={(item) => console.log(item)}/> */}


        {/* <Counter message='Hello message'/>
        <DomRef />
        <UserContextProvider>
          <Users />
        </UserContextProvider> */}
        {/* <ThemeContextProvider>
          <Box />
        </ThemeContextProvider> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter /> */}
        {/* <Container styles={{border: '1px solid #fff', padding: '1rem'}}/> */}
        {/* <Button handleClick={(event, id) => {
          console.log('Button click', event, id)
        }}></Button> */}
        {/* <Heading> Plaintext</Heading>
        <Status status='success'/>
        <Greet name='Mir' messageCount={30} isLoggedIn={false} />
        <Person name={name}/>
        <PersonList names={nameList}/> */}
      </header>
    </div>
  );
}

export default App;
