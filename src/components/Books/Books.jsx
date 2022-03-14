import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function Books(){
    const history= new useHistory()
    return (
        <>
    <h2>Books</h2>
    <Button variant="contained" onClick={()=>history.push('/addbooks')}>Add Books</Button>
    </>
    );
}