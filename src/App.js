import React from 'react';
import { QueryClient,QueryClientProvider } from 'react-query';
import Users from './components/Users';
import './App.css'
const queryClient= new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Users/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
