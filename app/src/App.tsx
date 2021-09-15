import styled from 'styled-components';
import './App.css';
import { RouterBuilder } from './routes/build/routes.builder';

const DivApp = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

const App = () => {
  return (
    <DivApp>
      <RouterBuilder />
    </DivApp>
  );
}

export default App;
