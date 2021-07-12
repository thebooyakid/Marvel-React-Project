import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core';
import { MarvelForm } from '../../components/MarvelForm';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'comics_appeared_in', headerName: 'Comics In', type: 'number', width: 150 },
  { field: 'super_power', headerName: 'Super Power', width: 330 },
];

interface gridData{
  data:{
    id?:string
  }
}

export const DataTable = () => {

  let { heroData, getData } = useGetData()
  let [ open, setOpen ] = useState(false)
  let [ gridData, setData ] = useState<gridData>({data:{}})
  
  let handleOpen = () => {
    setOpen(true)
  }
  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
    
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Heroes In Inventory</h2>
      <DataGrid rows={heroData} columns={columns} pageSize={10} checkboxSelection onRowSelected = { setData } />

    <Button onClick={handleOpen}>Update</Button>
    <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

      {/*Dialog Pop Up begin */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Update Hero</DialogTitle>
      <DialogContent>
        <DialogContentText>Update Hero</DialogContentText>
          <MarvelForm id={gridData.data.id!}/>
      </DialogContent>
      <DialogActions>
        <Button onClick = {handleClose} color = "primary">Cancel</Button>
        {/* <Button onClick = {handleClose} color = "primary">Done</Button>  */}
      </DialogActions>
    </Dialog>
    </div>
  );
}