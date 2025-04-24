import { Controller, Get } from '@nestjs/common';

@Controller('music')
export class MusicController {
    @Get()
    firstfunction(){
        return 'hello music'
    }
}
