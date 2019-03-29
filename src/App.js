import React, { Component } from 'react';
import Footer from './components/Footer/FooterContainer'
import Header from './components/Header/HeaderContainer'
import AddSection from './components/AddSection/AddSectionContainer'
import Columns from './components/Columns/ColumnsContainer.jsx'
import './styles/reset.sass'
import './styles/main.sass'

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
