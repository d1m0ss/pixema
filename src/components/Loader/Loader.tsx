import { FC } from 'react';
import './Loader.scss';
import { CircularProgress } from '@mui/material';

export const Loader: FC = () => {
  return (
    <section className='loading'>
        <CircularProgress color="info" />
    </section>
  )
};
