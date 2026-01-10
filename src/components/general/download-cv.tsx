'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Кочнев_Андрей(Fullstack).pdf', '_blank')}>
      Скачать резюме
    </Button>
  );
};

export default DownloadCV;
