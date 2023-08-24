import { applyDecorators, UseGuards } from '@nestjs/common';
import { validRoles } from '../interfaces/valid-role.interface';
import { UserRoleGuard } from '../guards/user-role.guard';
import { RoleProtected } from './role-protected.decorator';
import { AuthGuard } from '@nestjs/passport';

export function Auth(...roles:validRoles[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthGuard(), UserRoleGuard),
  );
}