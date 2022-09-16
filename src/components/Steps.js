import * as React from 'react';
import { Grid } from '@mui/material';
import Cart from './Cart';

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    padding: 2
};

export default function Steps({ step, taskStep }) {
    return (
        <Grid container marginTop={2} height="80vh">
            <Grid item xs={12} sx={{ ...commonStyles, borderColor: 'text.primary' }} >
                STEP {step}
                <div style={{ borderRadius: 4 }}>
                    {taskStep && taskStep.length ? taskStep.map((item, index) => (
                        <Cart step={step} key={index} item={item} />
                    )) : <div style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', margin: '10px' }}>No Data Found</div>}
                </div>
            </Grid>
        </Grid>
    );
}
