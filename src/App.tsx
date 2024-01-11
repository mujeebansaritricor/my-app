import React from 'react';
import './App.css';
import Export from './components/ExportFunctionality/Export';
import StickyHeadTable from './components/StickyHeadTable';
import { ConfirmAlert } from './components/dialoge/alert';
import CustomDeleteButton from './components/delete-button';
import CutomDropdown from './components/custom-drop-down/custom-drop-down';
import MainMenu from './components/constants/menu';
import { TopMenu } from './components/constants/TopMenu';

function App() {
  return (
    <div className="App">
       <div>
       {/* <TopMenu getDefaultLang={function (lang: string): void {
          throw new Error('Function not implemented.');
        } } /> */}
    {/* <MainMenu/> */}
    </div>
    <div>
    <Export data={undefined}  allPosts={undefined} filterData={undefined}/>

    </div>
    <div>

    <StickyHeadTable/>
    </div>
    <div>
      {/* <ConfirmAlert/>
      <CustomDeleteButton/> */}
      {/* <CutomDropdown/> */}
    

   
    </div>
   
    </div>
  );
}

export default App;
