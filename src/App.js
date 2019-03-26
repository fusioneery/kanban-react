import React, { Component } from 'react';
import Footer from './Footer/FooterContainer'
import Header from './Header/HeaderContainer'
import AddSection from './AddSection/AddSectionContainer'
import Columns from './Columns/ColumnsContainer.jsx'
import './reset.sass'

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <AddSection />
      <Columns />
      <Footer />
      </>
    );
  }
}

export default App;
