import styled from 'styled-components';
import './App.css';
import { GlobalStyle } from './constants';
import { RouterBuilder } from './routes/build/routes.builder';

const DivApp = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

const App = () => {
  return (
    <DivApp>
      <GlobalStyle />
      <RouterBuilder />
    </DivApp>
  );
}

export default App;
