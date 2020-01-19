import React, {useState} from 'react';


const PaymentTable = (props) => {

  const [isTransactionVisible, setTransactionVisible] = useState(false);
  const [selectedId, setSelectedId] = useState('')

  const setPaymentStatus = (id, isBill ) => {
    return fetch(`http://localhost:3002/bills/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isBill: isBill ? false : true,
        }),
      })
      .then(response => response.json());
  }

  const onButtonClicked = (event, id, isBill)=> {
    event.stopPropagation();
    setPaymentStatus(id, isBill);
    props.fetchBills();
  }

  const onRowClicked = id => {
    setSelectedId(id)
    isTransactionVisible ? setTransactionVisible(false) : setTransactionVisible(true);
  }

  const renderPaymentData = () => {

    return props.data && props.data.map((bills, index) => {
       const { id, iconUrl, categoryId, name, isBill } = bills
       if (bills.isBill && props.billsOnly) {
       return (
           <>
          <tr id='parentRow' key={index} onClick={() => onRowClicked( id, bills.transactions)}>
             <td ><img alt='icon' height='50px' src={iconUrl}/></td>
             <td>{categoryId}</td>
             <td>{`${name}(${bills.transactions.length})`}</td>
             <td><button onClick={(event) => onButtonClicked(event, id, isBill)}>Remove bill</button></td>
          </tr>
          {
            isTransactionVisible && id === selectedId ?
              <tr>
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {bills.transactions.map((bill, index) => {
                      if(id === selectedId) {
                        return (
                        <tr key={index}>
                          <td>{bill.amount}</td>
                          <td>{bill.date}</td>
                        </tr>
                        )}
                      return null
                    })}
                  </tr>
                </tbody>
              </tr>
            :
             null
            }
            </>
          )
       } else {
        if (!bills.isBill && !props.billsOnly) {
            return (
              <>
               <tr id='parentRow' key={index} onClick={() => onRowClicked(id, bills.transactions)}>
                  <td>
                    <img alt='icon' height='50px' src={iconUrl}/>
                  </td>
                  <td>{categoryId}</td>
                  <td>{`${name}(${bills.transactions.length})`}</td>
                  <td>
                    <button onClick={(event) => onButtonClicked(event,id, isBill)}>Add bill</button>
                  </td>
               </tr>
                {
                  isTransactionVisible && id === selectedId ?
                  <>
                    <thead>
                      <tr>
                        <th>Amount</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                        {bills.transactions.map((bill, index) => {
                          if(id === selectedId) {
                            return (
                              <tr key={`${index}-k`}>
                                <td>{bill.amount}</td>
                                <td>{bill.date}</td>
                              </tr>
                            )}
                          return null
                        })}
                    </tbody>
                  </>
                  :
                  null
                }
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
