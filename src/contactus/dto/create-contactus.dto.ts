import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContactusDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  message?: string;
}
