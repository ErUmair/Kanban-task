import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { pink } from '@mui/material/colors';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from "react-redux";
import { addItem1To2, deleteItem } from '../store/_actions/user_actions';

export default function Cart({ step, item }) {
  const dispatch = useDispatch();

  return (
    <>
      {
        item ?
          <div style={{ border: '1px solid #ccc', padding: '5px', margin: '5px' }}>
            <div className='flex'>
              {item.id}
              <Button color="error" onClick={() => dispatch(deleteItem(item))} startIcon={<DeleteOutlinedIcon sx={{ color: pink[500] }} />}>
                Delete
              </Button>
            </div>
            <div className='empty-block'></div>
            <div className='flex'>
              <div>
                {
                  step !== 1 ? <ArrowBackIcon onClick={() => dispatch(addItem1To2(item, (step - 1), 'backward'))} /> : null
                }
              </div>
              <div>
                {
                  step !== 4 ? <ArrowForwardIcon onClick={() => dispatch(addItem1To2(item, (step + 1), 'forward'))} /> : null

                }
              </div>
            </div>
          </div>
          : null
      }
    </>


  )
}
