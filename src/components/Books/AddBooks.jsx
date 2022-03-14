import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import AlertDialog from '../Dialog/AlertDialog';

import EventEmitter from "../../utils/EventEmitter";
export default function Books(){
    const history= new useHistory()
    return (
        <>
        <AlertDialog/>
    <h2>Add Books</h2>
    <Button variant="contained" color="primary" onClick={()=>EventEmitter.emit('add',{name:'Junmar Layaog III'})}>Add</Button>
    <Button variant="contained" color="error" onClick={()=>history.goBack()}>Back</Button>
    </>
    );
}