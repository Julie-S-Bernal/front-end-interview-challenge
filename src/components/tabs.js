import React, {useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import { Container, Col, Row } from 'styled-bootstrap-grid';

import PaymentTable from './PaymentTable';


const StyledTab = styled.div`
  text-align: left;
  padding-right: 10px;
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

  return(
    <Container>
      <Row>
        <Col col={12}>
          <Tabs style={{textAlign: 'left'}}>
            <Row>
              <Col col={12}>
                <TabList >
                  <Tab>
                    <StyledTab>
                      <h2>Bills</h2>
                    </StyledTab>
                  </Tab>
                  <Tab>
                    <StyledTab>
                    <h2>Transactions</h2>
                    </StyledTab>
                  </Tab>
                </TabList>
              </Col>
            </Row>
            <Row>
              <Col col={12}>
                <TabPanel>
                  <h2>Bills</h2>
                  <PaymentTable
                    data={data}
                    billsOnly={true}
                  />
                </TabPanel>
              </Col>
            </Row>
            <Row>
              <Col col={12}>
                <TabPanel>
                  <h2>Transactions</h2>
                  <PaymentTable
                    data={data}
                  />
                </TabPanel>
              </Col>
            </Row>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default TabComponent;
