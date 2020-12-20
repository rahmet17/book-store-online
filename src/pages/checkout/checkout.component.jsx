import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Книга</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Описание</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Количество</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Цена</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Убрать из корзины</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>Сумма: {total} <span>&#8381;</span></TotalContainer>

  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
