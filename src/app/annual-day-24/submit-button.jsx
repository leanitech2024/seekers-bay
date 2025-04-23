'use client';

import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Button } from '../../components/ui/button';

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
