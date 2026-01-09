'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button
      onClick={() => window?.open('/files/Кочнев_Андрей_(Full-Stack).pdf', '_blank')}
    >
      Скачать резюме
    </Button>
  );
};

export default DownloadCV;
