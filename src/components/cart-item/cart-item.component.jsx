import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  NameContainer
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span>
        {quantity} x {price} &#8381;
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
