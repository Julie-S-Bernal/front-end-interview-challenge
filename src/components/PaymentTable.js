import React, {useState, useEffect} from 'react';


const PaymentTable = (props) => {

  const [data, setDataSet] = useState([]);
  const [hasError, setErrors] = useState(false);
//   const [isBill, setIsBill] = useState(null);

  async function fetchData() {
    const res = await fetch("http://localhost:3002/bills");
    res
      .json()
      .then(res => setDataSet(res))
      .catch(err => setErrors(err));
  }

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

  useEffect(() => {
    fetchData();
  },[]);

  const onButtonClicked = (id, isBill)=> {
    console.log(id, isBill);
    setPaymentStatus(id, isBill);
  }


  const renderPaymentData = () => {

    return props.data && props.data.map((bills, index) => {
       const { id, iconUrl, categoryId, name, isBill } = bills //destructuring
       console.log('isBill', isBill)
       if (bills.isBill && props.billsOnly) {
       return (
          <tr key={id}>
             <td ><img alt='icon' height='50px' src={iconUrl}/></td> {/* Some images link are broken and needs fixing */}
             <td>{categoryId}</td>
             <td>{index}</td>
             <td>{name}</td>
             <td><button onClick={() => onButtonClicked(id, isBill)}>Remove bill</button></td>
          </tr>
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
