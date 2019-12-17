import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';

import Card from './../../components/Card';
import api from '../../services/api';

import { List } from './style';

import * as CartActions from '../../store/modules/cart/actions';

function Content({ amount, addToCartRequest, navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormmated: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  const handleAddProduct = id => {
    addToCartRequest(id, navigation);
  };

  const renderItem = item => {
    return (
      <View style={{ marginRight: 20 }}>
        <Card
          {...item}
          amount={amount[item.item.id] || 0}
          onPress={id => handleAddProduct(id)}
        />
      </View>
    );
  };

  return (
    <List
      data={products}
      keyExtractor={item => String(item.id)}
      renderItem={item => renderItem(item)}
    />
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Content);
