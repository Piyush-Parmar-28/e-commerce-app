import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MyChip(props) {
    return (
        <div className= "card-img-overlay p-1" >
            <Stack direction="row" spacing={1}>
                <Chip 
                    label={props.Chipcontent} 
                    color='primary' 
                    size= "small"
                />
            </Stack>
        </div>
    );
}
