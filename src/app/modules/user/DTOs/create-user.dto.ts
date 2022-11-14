import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty({ message: "Property 'name' is required" })
  name: string;

  @IsNotEmpty({ message: "Property 'username' is required" })
  username: string;

  @IsEmail()
  @IsNotEmpty({ message: "Property 'email' is required" })
  email: string;

  @IsNotEmpty({ message: "Property 'password' is required" })
  password: string;
}
