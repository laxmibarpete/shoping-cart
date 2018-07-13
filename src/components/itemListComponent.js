import React from 'react';
import AvatarComponent from './avatarComponent';
import logo from '../'

export const ItemListComponent = (props) => {
    const { inStockDataList } = props;
    const style = {backgroundColor: 'gray', textAlign: 'center'}    
    debugger
    const navList = inStockDataList.map(item => {
        return(
          <div style={style}>
          <AvatarComponent src={item.src} className="avatar" alt={item.name} height="200" width="200"/>
          <table class="table">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                </tr>
            </table>
        </div>
        )
      });
      return <div class="list">{navList}</div>;
}

