import './index.scss';

import React, { Component } from 'react';
import Content from '../../components/content';
import Footer from '../../components/footer';

class Products extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="products placeholder">Products</div>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default Products;
