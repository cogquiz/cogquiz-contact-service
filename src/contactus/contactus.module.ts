import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ContactusService } from './contactus.service';
import { ContactusController } from './contactus.controller';
import { Contactus } from './entities/contactus.entity';
import { WinstonLoggerModule } from '../common/logger.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contactus]),
    JwtModule.register({ secret: process.env.JWT_SECRET || 'secret', signOptions: { expiresIn: '1d' } }),
    WinstonLoggerModule,
  ],
  controllers: [ContactusController],
  providers: [ContactusService],
})
export class ContactusModule {}
