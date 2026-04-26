import React from 'react';
import { SyncLoader } from 'react-spinners';

const loading = () => {
    return (
      <div className='text-4xl flex justify-center items-center h-screen'>
        <SyncLoader />
      </div>
    );
};

export default loading;