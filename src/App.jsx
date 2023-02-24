import React from "react"
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { QueryClient,QueryClientProvider} from 'react-query'

import Declaration from './pages/dashboard';


import 'antd/dist/antd.css';
import './styles/index.css';
import './styles/tailwind.css';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <main>
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Declaration} />
              </Switch>
          </BrowserRouter>
        </main>
      </QueryClientProvider>
  );
}

export default App;
