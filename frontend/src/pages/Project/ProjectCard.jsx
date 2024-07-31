import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons';

export default function ProjectCard() {
  return (
    <Card className='p-5 w-full lg:max-w-3xl'>
        <div className='space-y-5'>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-5'>
                        <h1 className='cursor-pointer font-bold text-lg'>Create Ecommerce Project</h1>
                        <DotFilledIcon />
                        <p className='text-sm text-gray-400'>fullstack</p>
                    </div>
                    <div className=''>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className='rounded-full' variant='ghost' size='icon'>
                                    <DotsVerticalIcon/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Update
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <p className='text-gray-500 text-sm'>
                    This is project about full stack developement
                </p>
            </div>
            <div className='flex flex-wrap gap-2 items-center'>
                {
                    [1,1,1,1].map((item)=> <Badge key={item} variant="outline">Frontend</Badge>)
                }
            </div>
        </div>
    </Card>
  )
}
