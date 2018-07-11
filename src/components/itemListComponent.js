import React from 'react';
import AvatarComponent from './avatarComponent';
import logo from '../'

export const ItemListComponent = (props) => {
    const { inStockDataList } = props;
    const style = {backgroundColor: 'gray'}    
    debugger
    const navList = inStockDataList.map(item => {
        return(
        <li key={item.name} {...props} style={style}>
        <AvatarComponent src={item.src} className="avatar" alt={item.name} height="100" width="100"/>
          {item.name} | {item.type}
        </li>)
      });
      return <ul>{navList}</ul>;
}

