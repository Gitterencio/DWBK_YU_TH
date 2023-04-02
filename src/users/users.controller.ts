import {  Controller, Get,Put,Post,Delete,Res,Req, HttpStatus, Body,Param,NotFoundException,Query } from '@nestjs/common';

//DTO USERS
import {CreateProductDTO} from 'dw-data-types/dto/product.dto';
//INTERFACE USERS
import {Product} from 'dw-data-types/interfaces/general.interface';
@Controller('users')
export class UsersController {}
