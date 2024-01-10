import React from 'react';
import './App.css';
import Export from './components/ExportFunctionality/Export';
import StickyHeadTable from './components/StickyHeadTable';
import { ConfirmAlert } from './components/dialoge/alert';
import CustomDeleteButton from './components/delete-button';
import CutomDropdown from './components/custom-drop-down/custom-drop-down';
import MainMenu from './components/constants/menu';

function App() {
  return (
    <div className="App">
       <div>
    {/* <MainMenu/> */}
    </div>
    <div>
    <Export data={undefined}  allPosts={undefined} filterData={undefined}/>

    </div>
    <div>

    <StickyHeadTable/>
    </div>
    <div>
      <ConfirmAlert/>
      <CustomDeleteButton/>
      {/* <CutomDropdown/> */}
    

   
    </div>
   
    </div>
  );
}

export default App;
