import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';


const StyledTab = styled(Tab)`
  padding: 10px;
  &:hover {
    border-bottom: 2px solid  rgb(8, 21, 255);
  }
  &:focus {
    border-bottom: 2px solid  rgb(8, 21, 255);
  }
`
StyledTab.tabsRole = 'Tab';


const TabComponent = () => {

  return(
    <>
      <Tabs>
        <TabList>
          <Tab><StyledTab>Bills</StyledTab></Tab>
          <Tab><StyledTab>Transactions</StyledTab></Tab>
          <Tab><StyledTab>Title 3</StyledTab></Tab>
        </TabList>
      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
      </Tabs>
    </>
  )
}


export default TabComponent;
