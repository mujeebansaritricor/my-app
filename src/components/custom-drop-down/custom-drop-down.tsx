import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CustomDeleteButton from '../delete-button';

const CutomDropdown = ({
  deleteAction,
  deleteTiltle,
  editAction,
  editTitle,
  copyAction,
  copyTitle,
  showPayItemsAction,
  showPayItemsTitle,
  pfSchemeBtns,
  item,
  isComponentVisible,
  closeOtherDropDownIndex,
  dropDownIndex,
  isActionMethod,
  isAction,
  index,
  actionLabel,
  isDeleteAction,
  isDownloadAction,
  downloadAction,
  downloadTitle,
}: any) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
    closeOtherDropDownIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2}>
          {isDeleteAction && (
            <CustomDeleteButton
              buttonName={deleteTiltle}
              onClick={(e:any) => {
                e.stopPropagation();
                deleteAction(item);
                handleClose();
              }}
            />
          )}
          {isDownloadAction && (
            <Box>
              <Button
                disabled={item?.jobStatus?.toLowerCase() !== 'success'}
                onClick={(e) => {
                  e.stopPropagation();
                  downloadAction(item);
                  handleClose();
                }}
              >
                {downloadTitle}
              </Button>
            </Box>
          )}
          {isAction && (
            <CustomDeleteButton
              buttonName={actionLabel}
              onClick={(e:any) => {
                e.stopPropagation();
                isActionMethod(item);
                handleClose();
              }}
            />
          )}
          {pfSchemeBtns && (
            <Box>
              <Button onClick={() => copyAction && copyAction(item)}>
                {copyTitle}
              </Button>
              <Button
                onClick={() => {
                  showPayItemsAction && showPayItemsAction(item);
                }}
              >
                {showPayItemsTitle}
              </Button>
            </Box>
          )}
        </Box>
      </Popover>
    </div>
  );
};

export default CutomDropdown;
