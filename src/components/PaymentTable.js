import React, {useState, useEffect} from 'react';


const PaymentTable = (props) => {

  const [data, setDataSet] = useState([]);
  const [hasError, setErrors] = useState(false);

  const setPaymentStatus = (id, isBill ) => {
      console.log('working', id, isBill)
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
    console.log(id, isBill);
    setPaymentStatus(id, isBill);
  }




  const renderPaymentData = () => {

    return props.data && props.data.map((bills, index) => {
       const { id, iconUrl, categoryId, name, isBill } = bills //destructuring
       console.log('isBill', bills.transactions[0].amount)
       if (bills.isBill && props.billsOnly) {
       return (
           <>
          <tr key={id}>
             <td ><img alt='icon' height='50px' src={iconUrl}/></td> {/* Some images link are broken and needs fixing */}
             <td>{categoryId}</td>
             <td>{index}</td>
             <td>{name}{bills.transactions.length}</td>
             <td><button onClick={() => onButtonClicked(id, isBill)}>Remove bill</button></td>
          </tr>
          <tr key={id}>
          <td>{bills.transactions.amount}</td>
          <td>{bills.transactions.date}</td>
       </tr>
       </>
       )
       } else {
        if (!bills.isBill && !props.billsOnly) {
            return (
               <tr key={id}>
                  <td ><img alt='icon' height='50px' src={iconUrl}/></td> {/* Some images link are broken and needs fixing */}
                  <td>{categoryId}</td>
                  <td>{index}</td>
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
        <tbody>
          {renderPaymentData()}
        </tbody>
      </table>
    </>
  )
}


export default PaymentTable;
