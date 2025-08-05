/* eslint-disable @next/next/no-img-element */
import {
  BookIcon,
  GithubIcon,
  InfoIcon,
  LifeBuoyIcon,
  MessageCircleMoreIcon,
} from 'lucide-react';

import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

export default function InfoMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size='icon'
          variant='ghost'
          className='size-8 rounded-full shadow-none'
          aria-label='Open edit menu'
        >
          <InfoIcon
            className='text-muted-foreground'
            size={16}
            aria-hidden='true'
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='pb-2'>
        {/* <DropdownMenuLabel>Have Feedback?</DropdownMenuLabel>
        <DropdownMenuItem
          className='cursor-pointer py-1 focus:bg-transparent focus:underline'
          asChild
        >
          <a href='/feedback'>
            <span className='flex items-center gap-2'>
              <MessageCircleMoreIcon size={16} />
              Report an issue
            </span>
          </a>
        </DropdownMenuItem> */}
        <DropdownMenuLabel>Built by @brxjonesdev</DropdownMenuLabel>
        <DropdownMenuItem
          className='cursor-pointer py-1 focus:bg-transparent focus:underline'
          asChild
        >
          <a href='https://portfolio.braxtonjones.dev/'>
            <span className='flex items-center gap-2'>
              <img
                src='/blusuede.png'
                alt='Braxton Jones Logo'
                className='h-4 w-4 rounded-full'
              />
              Portfolio
            </span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
