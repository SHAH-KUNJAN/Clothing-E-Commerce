import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-annd-sign-up.component";
import Header from "./components/header/header.component";
import "./App.css";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  unmountFromAuth = null;
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unmountFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unmountFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signIn" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
