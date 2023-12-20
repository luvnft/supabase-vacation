import { CopyIcon } from 'lucide-react';

import useWindowSize from '@/hooks/use-window-size';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';

export function PresetShare() {
  const { width } = useWindowSize();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='secondary' className='w-full'>
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent align={width < 900 ? 'center' : 'end'} className='sm:w-[520px]'>
        <div className='flex flex-col space-y-2 text-center sm:text-left'>
          <h3 className='text-lg font-semibold'>Share preset</h3>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            Anyone who has this link and an OpenAI account will be able to view this.
          </p>
        </div>
        <div className='flex items-center space-x-2 pt-4'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Link
            </Label>
            <Input
              id='link'
              defaultValue='https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003'
              readOnly
              className='h-9'
            />
          </div>
          <Button type='submit' size='sm' className='px-3'>
            <span className='sr-only'>Copy</span>
            <CopyIcon className='size-4' />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
