import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser, RawHeaders, RoleProtected } from './decorators';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role.guard';
import { validRoles } from './interfaces/valid-role.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto){
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testinPriveRoute(
    @GetUser() user:User,
    @GetUser('email') emailUser:string,
    @RawHeaders() rawHeaders:string[],
  ) {
    return {
      user,
      rawHeaders,
    };
  }

  //@SetMetadata('roles',['admin','super-user'])
  @Get('private2')
  @RoleProtected(validRoles.admin)
  @UseGuards(AuthGuard(), UserRoleGuard)
  testinPriveRoute2(
    @GetUser() user:User,
  ) {
    return {
      user,
    };
  }
}
