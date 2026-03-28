import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contactus } from './entities/contactus.entity';
import { SendMailDto } from './dto/send-mail.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactusService {
  private transporter;

  constructor(
    @InjectRepository(Contactus)
    private readonly contactUsTable: Repository<Contactus>,
  ) {
    this.transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.SMTP_USER || 'cogquizoutbound@gmail.com',
        pass: process.env.SMTP_PASS || 'lcjjrkezqaqxpdee',
      },
      secure: true,
    });
  }

  async sendMail(SendMailDto: SendMailDto) {
    try {
      const contact: Contactus = new Contactus();
      contact.name = SendMailDto.name;
      contact.email = SendMailDto.email;
      contact.message = SendMailDto.message;
      await this.transporter.sendMail({
        from: process.env.SMTP_USER || 'cogquizoutbound@gmail.com',
        to: 'support@cogquiz.com',
        subject: 'Message',
        text: `Name: ${SendMailDto.name}\nEmail: ${SendMailDto.email}\nMessage: ${SendMailDto.message}`,
      });
      await this.contactUsTable.save(contact);
      return true;
    } catch (error) {
      console.error('Error occurred while sending email:', error);
      return { success: false, message: 'Failed to send email.' };
    }
  }
}
