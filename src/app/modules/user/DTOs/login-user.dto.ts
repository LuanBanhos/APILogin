import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDTO {
  @IsEmail({ message: "Property 'email' is not a valid email" })
  @IsNotEmpty({ message: "Property 'email' is required" })
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Property 'password' is required" })
  password: string;
}
