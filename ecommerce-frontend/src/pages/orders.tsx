import React, { useState } from 'react'
import TableHOC from '../components/admin/TableHOC';

type DataType ={
_id:string;
amount:number;
quantity:number,
discount:number;
status:ReactElement;
action:ReactElement;
};

const column:Column<DataType>[]=[
  {
    Header:"ID",
    accessor:"-id"
  },
  {
    Header:"Quantity",
    accessor:"quantity",
  },
  {
    Header:"Discount",
    accessor:"discount",
  },
  {
    Header:"Amount",
    accessor:"amount",
  },
  {
    Header:"Status",
    accessor:"status",
  },
  {
    Header:"Action",
    accessor:"action",
  }
  
];

const Orders = () => {

const [rows]= useState<DataType[]>([
  {_id: "asdf",
  amount: 4534,
  quantity:20,
  discount:123,
  status:<span className='red'>
    Procesing
  </span>,
  action:<link to={`/order/asdf`}>View</link>,
  },
]);

const Table =TableHOC<DataType>(column,rows,"dashboard-product-box","orders",true)();

  return (
    <div className='container'>
      Orders Page
      <h1>My Orders</h1>
      {Table}
    </div>
  )
};

export default Orders;
