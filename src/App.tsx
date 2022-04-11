import { useState } from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { AuthProvider } from './context/AuthProvider'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <ProtectedLayout>
              <h2>Hello, this's profile component</h2>
            </ProtectedLayout>
          </Route>
          <Route path="/login"></Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
