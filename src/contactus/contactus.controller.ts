import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { ContactusService } from './contactus.service';
import { WinstonLoggerService } from '../common/logger.service';
import { SendMailDto } from './dto/send-mail.dto';
import { Response } from 'express';

@Controller('contactus')
export class ContactusController {
  constructor(
    private readonly contactusService: ContactusService,
    private readonly logger: WinstonLoggerService,
  ) {}

  @Post('sendMail')
  @UsePipes(new ValidationPipe())
  async create(@Res() response: Response, @Body() SendMailDto: SendMailDto) {
    try {
      const result = await this.contactusService.sendMail(SendMailDto);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Email sent successfully',
        data: result,
      });
    } catch (error) {
      this.logger.info(error.message);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: error.message[0],
      });
    }
  }
}
