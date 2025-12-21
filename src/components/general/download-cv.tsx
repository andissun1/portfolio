'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/myCV.pdf', '_blank')}>
      Скачать резюме
    </Button>
  );
};

export default DownloadCV;
