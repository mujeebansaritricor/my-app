import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export interface IConfirmAlert {
  title?: string;
  text?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  callBack?: () => void;
}

export const ConfirmAlert = (props: IConfirmAlert) => {
  const {
    title = 'Are you sure?',
    text = 'Do you really want to go back?',
    cancelButtonText = 'No',
    confirmButtonText = 'Yes',
    showCancelButton = true,
    showConfirmButton = true,
    callBack,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    if (callBack) {
      callBack();
    }
    handleClose();
  };

  return (
    <div>
      {/* Replace this trigger with your own button or icon */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Confirm Dialog
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {showCancelButton && (
            <Button onClick={handleClose} color="primary">
              {cancelButtonText}
            </Button>
          )}
          {showConfirmButton && (
            <Button onClick={handleConfirm} color="primary" autoFocus>
              {confirmButtonText}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};
