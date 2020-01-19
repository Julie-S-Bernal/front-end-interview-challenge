import React from 'react';


const PaymentTable = (props) => {

  const setPaymentStatus = (id, isBill ) => {
    return fetch(`http://localhost:3002/bills/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isBill: isBill ? false : true,
        }),
      })
      .then(response => response.json());
  }

  const onButtonClicked = (id, isBill)=> {
    setPaymentStatus(id, isBill);
  }

  const onRowClicked = (id, transactions)=> {
    console.log(id)
  }

  const paymentArray = props.data && props.data.map((paymentItems, index) => { return paymentItems })
  const paymentArrayTwo = props.paymentArray && props.paymentArray.map((item, index) => { return item })

  const renderPaymentData = () => {

    return props.data && props.data.map((bills, index) => {
       const { id, iconUrl, categoryId, name, isBill } = bills //destructuring
       console.log('isBill', bills.transactions[0].amount)
       if (bills.isBill && props.billsOnly) {
       return (
           <>
          <tr key={id} onClick={() => onRowClicked(id, isBill)}>
             <td ><img alt='icon' height='50px' src={iconUrl}/></td> {/* Some images link are broken and needs fixing */}
             <td>{categoryId}</td>
             <td>{name}{bills.transactions.length}</td>
             <td><button onClick={() => onButtonClicked(id, isBill)}>Remove bill</button></td>
          </tr>
          <tr key={id}>
          {/* <td>{bills.transactions[index]}</td>
          <td>{bills.transactions.date}</td> */}
       </tr>
       </>
       )
       } else {
        if (!bills.isBill && !props.billsOnly) {
            return (
               <tr key={id} onClick={() => onRowClicked(id, bills.transactions)}>
                  <td ><img alt='icon' height='50px' src={iconUrl}/></td> {/* Some images link are broken and needs fixing */}
                  <td>{categoryId}</td>
                  <td>{name}</td>
                  <td><button onClick={() => onButtonClicked(id, isBill)}>Add bill</button></td>
               </tr>
            )
         }
       }
       return null;
    })
 }


  return(
    <>
      <table>
      <thead>
      <tr>
        <th>Icon</th>
        <th>Category</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
        <tbody>
          {renderPaymentData()}
        </tbody>
      </table>
    </>
  )
}


export default PaymentTable;
