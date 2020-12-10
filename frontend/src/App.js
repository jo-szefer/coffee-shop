import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Shop } from "./components/Home/Shop";
import { SingleOrigin } from "./components/Shop/SingleOrigin";
import { Accessories } from "./components/Shop/Accessories";
import { Blends } from "./components/Shop/Blends";
import { LoginForm } from "./components/SignIn/LoginForm";
import { ContactForm } from "./components/Contact/ContactForm";
import { shopCategories } from "./components/Home/shopCategories";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/index";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer);

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <Header handleOpenCart={handleOpen} />
          <Cart open={open} handleClose={handleClose} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop shopCategories={shopCategories} />
            </Route>
            <Route path="/single-origin">
              <SingleOrigin />
            </Route>
            <Route path="/blends">
              <Blends />
            </Route>
            <Route path="/accessories">
              <Accessories />
            </Route>
            <Route path="/contact">
              <ContactForm />
            </Route>
            <Route path="/signin">
              <LoginForm />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
