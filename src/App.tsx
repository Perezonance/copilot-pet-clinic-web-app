import React from 'react';
import './App.css';
import { NAV_APPTS, NAV_HOME, NAV_PETS, NAV_VETS, NavigationBar } from './components/NavigationBar/NavigationBar';
import ContentPane from './components/ContentPane/ContentPane';

function App() {
  const [showTable, setShowTable] = React.useState(false);
  const [selectedResource, setSelectedResource] = React.useState('');
  const [tableData, setTableData] = React.useState<any[]>([]);

  const handleNavigationClick = async (endpoint: string, data: any) => {
    switch (endpoint) {
    case NAV_VETS:
      setShowTable(true);
      setTableData(data);
      setSelectedResource(NAV_VETS);
      break;

    case NAV_PETS:
      setShowTable(true);
      setTableData(data);
      setSelectedResource(NAV_PETS);
      break;

    // case NAV_OWNERS:
    //   console.log('Table is shown');
    //   setShowTable(true);
    //   setTableData(data);
    //   break;

    case NAV_APPTS:
      setShowTable(true);
      setTableData(data);
      setSelectedResource(NAV_APPTS);
      break;

    default:
      setShowTable(false);
      setTableData([]);
      setSelectedResource(NAV_HOME);
      break;
    }
  };

  return (
    <div className="App">
      <NavigationBar onClick={handleNavigationClick}/>
      <ContentPane showTable={showTable} tableData={tableData} selectedResource={selectedResource}/>
    </div>
  );
}

export default App;
