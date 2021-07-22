import React, { useState } from "react";
import "./menu.styles.scss";

import Item from "../item/item";



function Menu(props) {
  const [items, setItems] = useState(props.items);
  const [counter, setCount] = useState(0);
  function add(id, count) {
    const addedItem = items.map((item) => {
      if (id === item.id) {
        return { ...item, count: item.count+ 1 };
      }
      return item;
    });
    setItems(addedItem);
    setCount(counter+1);
  }

  function cancel(id, count) {
    const canceledItem = items.map((item) => {
      if (id === item.id) {
        if(item.count>0)
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setItems(canceledItem);
    setCount(counter-1);
  }

  function remove(id) {
    const remainingItems = items.filter((item) => id !== item.id);
    setItems(remainingItems);
    let total = 0;
    for(var i=0; i<remainingItems.length; i++){
      total +=remainingItems[i].count;
    }
    setCount(remainingItems.reduce( function(cnt,o){ return cnt + o.count; }, 0));
  }

  function refresh() {
    const refreshedItems = items.map((item) => {
      
        return { ...item, count: 0 };

    });
    setItems(refreshedItems);
    setCount(0);

  }

  function restart() {
    setItems(props.items);
    setCount(0);
  }
  //Now the list of items component
  const itemlist = items.map((item) => (
    <Item id={item.id} count={item.count} key={item.id} add={add} cancel={cancel} remove={remove} />
  ));

  
  

  return(
    <div>
      <div className='header-buttons'>
        <div className='refresh fancy-button bg-gradient1 fa fa-ticket' onClick={() => refresh()}>
        <span ><i class="fa fa-ticket"></i>Refresh</span>
          </div>
        <div className='restart fancy-button bg-gradient2' onClick={() => restart()}><span ><i class="fa fa-ticket"></i>Restart</span></div>
        
      </div>
      <div className='displayhead'>
        <h2>Cart &emsp; </h2>
        <p>{counter}</p>
      </div>
      {itemlist}
    </div>
  )

}

// const ITEMLIST = [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }];
// let finaltot = 0;
// let counterlist = [{ itemscount: "0" }, { itemscount: "1" }, { itemscount: "2" }, { itemscount: "3" }]

// class Menu extends React.Component {
//   state = { count: 0 };

//   callbackFunction = (n, id, isDelete) => {
//     finaltot +=n;
//     counterlist[id].itemscount = n;
//     this.setState({ count: finaltot });

//     console.log(counterlist[id]);

//   };
//   render() {
//       let newitemList = ITEMLIST.filter(function (item) {
//           return item.isDelete === true;
//       }).map(function (item) {
//           return item;
//       })
//     let itemList = ITEMLIST.map((item) => (
//       <Item id={item.id} parentCallback={this.callbackFunction} isDelete={false} />
//     ));
//     return (
//       <div>
//         <div className="displayhead">
//           <h2>Items &emsp; </h2>
//           <p>{this.state.count}</p>
//         </div>

//         {itemList}
//       </div>
//     );
//   }
// }
export default Menu;
