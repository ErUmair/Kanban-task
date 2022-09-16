import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { TextField } from '@mui/material';
import { useDispatch } from "react-redux";
import { addItemAction } from '../store/_actions/user_actions';
import { ADD_ITEM_1 } from '../store/_actions/types';

export default function AddItem() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');

    const addTitleItem = () => {
        let obj = { step: ADD_ITEM_1, id: +title }
        dispatch(addItemAction(obj));
        setOpen(false)
    }

    return (
        <div>
            <Stack
                direction="row"
                justifyContent="end"
                alignItems="center"
                spacing={2}>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={() => setOpen(true)}>
                    Add item
                </Button>
                <Dialog open={open}>
                    <DialogTitle>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography variant="p">Add Task</Typography>
                            <IconButton onClick={() => setOpen(false)}>
                                <CloseIcon onClose={() => setOpen(false)} />
                            </IconButton>
                        </Grid>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <TextField id="standard-basic" label="Add Title" type="number" variant="standard" onChange={(e) => setTitle(e.target.value)} />
                        </DialogContentText>
                    </DialogContent>
                    <div
                        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: "10px" }}
                    >
                        <Button variant="outlined" startIcon={<AddIcon />} onClick={addTitleItem} disabled={title.length > 0 ? false : true}>
                            Add Task
                        </Button>

                    </div>
                </Dialog>
            </Stack>
        </div>
    );
}