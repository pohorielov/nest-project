import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user', description: 'Имя пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @Length(3, 20, {message: 'Не меньше 3 и не больше 20 символов'})
    readonly username: string;

    @ApiProperty({example: 'email@gmail.com', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(6, 16, {message: 'Не меньше 6 и не больше 16 символов'})
    readonly password: string;
}