import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser, RawHeaders, RoleProtected, Auth } from './decorators';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role.guard';
import { validRoles } from './interfaces/valid-role.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
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

  @Get('check')
  @Auth()
  checkAuthStatus(
    @GetUser() user:User
  ) {
    return this.authService.checkAuthStatus(user)
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

  @Get('private3')
  @Auth(validRoles.admin)
  testinPriveRoute3(
    @GetUser() user:User,
  ) {
    return {
      user,
    };
  }
}
