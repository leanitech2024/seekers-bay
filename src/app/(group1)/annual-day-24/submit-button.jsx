'use client';

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export function CompressImages() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>
          <Loader2 className='w-4 h-4 mr-2 animate-spin' />
          Processing...
        </Button>
      ) : (
        <Button>Compress all</Button>
      )}
    </>
  );
}
