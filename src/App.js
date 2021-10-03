import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import MainPage from './components/main/MainPage.jsx';
import NotFound from './components/404/NotFound.jsx';
import Cart from './components/cart/Cart.jsx';
import Catalog from './components/catalog/Catalog.jsx';
import About from './components/about/About.jsx';
import ItemDetails from './components/catalog/itemdetails/ItemDetails.jsx';

function App() {
  return (
    <>
    <Router>
    <Header/>
    <main className="container">
        <div className="row">
            <div className="col">
                <div className="banner">
                    <img src="/ra-diploma-public/banner.jpg" className="img-fluid" alt="К весне готовы!"/>
                    <h2 className="banner-header">К весне готовы!</h2>
                </div>

      <Switch>
          <Route exact path="/ra-diploma-public/" component={MainPage}/>
          <Route exact path="/ra-diploma-public/catalog" component={Catalog}/>
          <Route exact path="/ra-diploma-public/catalog/:id" component={ItemDetails}/>
          <Route exact path="/ra-diploma-public/contacts" component={Contacts}/>
          <Route exact path="/ra-diploma-public/cart" component={Cart}/>
          <Route exact path="/ra-diploma-public/about" component={About}/>
          <Route path='/ra-diploma-public/404' component={NotFound} />
        <Redirect from='*' to='/ra-diploma-public/404' />

        </Switch>

            </div>
        </div>
    </main>
    <Footer />
    </Router>
</>
  );
}

export default App;
