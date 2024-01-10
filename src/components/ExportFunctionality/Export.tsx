import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import autoTable from 'jspdf-autotable'; // Import the autoTable function from the jspdf-autotable package
import 'jspdf-autotable'; // Import the jspdf-autotable package
import 'jspdf-autotable';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import jsPDF from 'jspdf';
import { useTheme } from '@mui/system';
import rowsData from "./config"
import exportSingleExcel from './ExportToExcel';


const Export = ({ data, allPosts, filterData }: { data: any, allPosts: any, filterData: any }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [columns, setColumns] = useState([
    { header: 'Name', dataKey: 'name' },
    { header: 'ISO Code', dataKey: 'code' },
    { header: 'Population', dataKey: 'population' },
    { header: 'Size', dataKey: 'size' },
    { header: 'Density', dataKey: 'density' },

  ])

  const exportExcel = exportSingleExcel(
    'Excel_data.xlsx',rowsData// Replace 10 with the desired number argument
  )

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExport = (exportFunction: any) => {
    exportFunction();
    handleClose();
  };


  // single pdf and all pdf
  const handleExportPDF = (number:any) => {
    const doc = new jsPDF('landscape', 'px', [1800, 800]);
    const rows: any[] = rowsData.slice(0,number); // Declare the 'rows' variable
    const cntStr = `Total Count: ${rows.length}`;

    doc.setFontSize(12);
    doc.text(cntStr, 15, 10);

    const tableColumnStyles = {};
    columns?.forEach((column: any, index: any) => {
      const tableColumnStyles: { [key: number]: { cellWidth: number } } = {};
      tableColumnStyles[index] = { cellWidth: column.minWidth || 40 };
    });

    autoTable(doc, {
      head: [columns.map((col) => col.header)], // Change 'label' to 'header'
      body: rows.map((row) => columns.map((col) => row[col.dataKey])), // Use 'dataKey' instead of 'id'
      columnStyles: tableColumnStyles,
    });

    doc.save(`pdf_table_data.pdf`);
    handleClose();
  };



  return (
    <div>
      <Button
        aria-expanded="false"
        onClick={handleClick}
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          borderRadius: '20px',
          color: 'var(--blue-blue-5000049-db, var(--colour-blue-500, #0049DB))',
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontFamily: 'Lato',
          fontSize: '14px',
          fontStyle: 'normal',
          border: '1px solid var(--blue-blue-5000049-db, #0049DB)',
          textTransform: 'none', // Preserve the case
          padding: " 4px 12px",
        }}
      >
        Export
      </Button>

      <Menu id="export-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => {
          handleExportPDF(10)
        }}     >
          Export to PDF</MenuItem>


        <MenuItem onClick={() => {
          handleExportPDF(rowsData.length)
        }}   >Export to all PDF</MenuItem>
        <Divider variant="middle" component="li" />
        
        {/* export to excel */}
        <MenuItem onClick={() => {
          exportExcel(10)
        }}    >Export to Excel</MenuItem>

        {/* excel to all excel */}
        <MenuItem onClick={() => {
          exportExcel(rowsData.length)
        }} 
        >Export to all Excel</MenuItem>
      </Menu>
    </div >
  );
};

export default Export;
