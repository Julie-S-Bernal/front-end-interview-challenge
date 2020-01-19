import React, {useState} from 'react';


const PaymentTable = (props) => {

  const [isTransactionVisible, setTransactionVisible] = useState(false);
  const [selectedId, setSelectedId] = useState('')

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
    setSelectedId(id)
    isTransactionVisible ? setTransactionVisible(false) : setTransactionVisible(true)
  }

  const renderPaymentData = () => {

    return props.data && props.data.map((bills, index) => {
       const { id, iconUrl, categoryId, name, isBill } = bills //destructuring
    //    console.log('isBill',  bills.transactions[0])
       if (bills.isBill && props.billsOnly) {
       return (
           <>
          <tr id='parentRow' key={id} onClick={() => onRowClicked(id, bills.transactions)}>
             <td ><img alt='icon' height='50px' src={iconUrl}/></td> {/* Some images link are broken and needs fixing */}
             <td>{categoryId}</td>
             <td>{`${name}(${bills.transactions.length})`}</td>
             <td><button onClick={() => onButtonClicked(id, isBill)}>Remove bill</button></td>
          </tr>
          {isTransactionVisible ?
                <tr>
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {bills.transactions.map((bill, index, i) => {
                      return (<div key={i}><td>{bill.amount}</td> <td>{bill.date}</td></div>)
                    })}
                  </tr>
                </tbody>
            </tr> :
            null}
            </>
       )
       } else {
        if (!bills.isBill && !props.billsOnly) {
            return (
              <>
               <tr id='parentRow' key={id} onClick={() => onRowClicked(id, bills.transactions)}>
                  <td ><img alt='icon' height='50px' src={iconUrl}/></td> {/* Some images link are broken and needs fixing */}
                  <td>{categoryId}</td>
                  <td>{`${name}(${bills.transactions.length})`}</td>
                  <td><button onClick={() => onButtonClicked(id, isBill)}>Add bill</button></td>
               </tr>
               {isTransactionVisible ?
                <tr>
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {bills.transactions.map((bill, index, i) => {
                      if(id === selectedId) {
                      return (<div key={i}><td>{bill.amount}</td> <td>{bill.date}</td></div>)
                      }
                      return null
                    })}
                  </tr>
                </tbody>
            </tr> :
            null}
            </>
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
        <th>Name(Amount Of Transaction)</th>
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
