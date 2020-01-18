import React, {useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

import PaymentTabke from './PaymentTable';


const StyledTab = styled.div`
  padding: 10px;
  &:hover {
    border-bottom: 2px solid  rgb(8, 21, 255);
  }
  &:focus {
    border-bottom: 2px solid  rgb(8, 21, 255);
  }
`

const TabComponent = () => {

  const [data, setDataSet] = useState([]);
  const [hasError, setErrors] = useState(false);

  async function fetchBills() {
    const res = await fetch("http://localhost:3002/bills");
    res
      .json()
      .then(res => setDataSet(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchBills();
  },[]);


console.log('data', data);

  return(
    <>
      <Tabs>
        <TabList>
          <Tab><StyledTab>Bills</StyledTab></Tab>
          <Tab><StyledTab>Transactions</StyledTab></Tab>
        </TabList>
      <TabPanel>
      <div>
        <h2>Bills</h2>
        <PaymentTabke
        data={data}
        billsOnly={true}
        />
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Transactions</h2>
        <PaymentTabke
        data={data}
        />
      </TabPanel>
      </Tabs>
    </>
  )
}


export default TabComponent;
