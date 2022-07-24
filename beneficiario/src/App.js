import { useAuth0 } from "@auth0/auth0-react";
//import { LoginButton } from './Login';
//import { Profile } from './Profile';
//import { LogoutButton } from './Logout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Header1 from './components/Header1';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
//import VerBeneficiarios from './components/VerBeneficiarios';
import NotFound from './pages/NotFound';
import Beneficiariopage from './pages/Beneficiariopage';
//import EditarBeneficiarios from './components/EditarBeneficiarios';
//import NotFound from './pages/Beneficiariopage';
const cache=new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        rhtbl_Beneficiarios:{
          merge(existing,incoming){
            return incoming;
          },
      },
      
    },
  },
},
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  const {isAuthenticated} =useAuth0();
  return (
    <>
    <ApolloProvider client={client}>
    <Router>
    
    <div className="container">

        { isAuthenticated ? (
          <>
          <Header/>
            
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/rhtbl_Beneficiarios/:id'element={<Beneficiariopage />} />
              <Route path='*' element={<NotFound />} />
    
            </Routes>
          </>
        ) : (
          <Header1/>
        )}


    </div>
    </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
