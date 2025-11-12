import json from '@/assets/lottie/noData.json';

import Lottie from 'lottie-react';

const NoData = () => {
  return (
    <div className='max-w-2xl mx-auto'>
      <Lottie animationData={json} />
    </div>
  );
};

export default NoData;