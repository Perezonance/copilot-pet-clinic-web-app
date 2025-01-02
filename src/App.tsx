import React from 'react';
import './App.css';
import { NAV_APPTS, NAV_HOME, NAV_PETS, NAV_VETS, NavigationBar } from './components/NavigationBar/NavigationBar';
import { ContentPane, ContentViewThing } from './components/ContentPane/ContentPane';
import { AppointmentView } from './components/AppointmentView/AppointmentView';

function App() {
  const [showTable, setShowTable] = React.useState(false);
  const [selectedResource, setSelectedResource] = React.useState<ContentViewThing>({ endpoint: NAV_HOME, contentView: () => <div></div> });
  const [tableData, setTableData] = React.useState<any[]>([]);

  const handleNavigationClick = async (endpoint: string, data: any) => {
    switch (endpoint) {
    case NAV_VETS:
      setShowTable(true);
      setTableData(data);
      setSelectedResource({
        endpoint: NAV_VETS,
        contentView: () => {
          return (
            <AppointmentView appointment={data}/>
          )
        }
      });
      break;

    case NAV_PETS:
      setShowTable(true);
      setTableData(data);
      setSelectedResource({
        endpoint: NAV_PETS,
        contentView: () => {
          return (
            <AppointmentView appointment={data}/>
          )
        }
      });
      break;

    // case NAV_OWNERS:
    //   console.log('Table is shown');
    //   setShowTable(true);
    //   setTableData(data);
    //   break;

    case NAV_APPTS:
      setShowTable(true);
      setTableData(data);
      setSelectedResource({
        endpoint: NAV_APPTS,
        contentView: () => {
          return (
            <AppointmentView appointment={data}/>
          )
        }
      });
      break;

    default:
      setShowTable(false);
      setTableData([]);
      setSelectedResource({
        endpoint: NAV_HOME,
        contentView: () => <div></div>
      });
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
