import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.action";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-annd-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import "./App.css";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  unmountFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unmountFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unmountFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/signIn"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
