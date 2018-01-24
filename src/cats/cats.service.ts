import { Component, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Observable } from 'rxjs';

@Component()
export class CatsService {
  constructor(
    @Inject('DbConnectionToken') private readonly dbConnect
  ) {}

  create(createCatDto: CreateCatDto): Observable<any> {
    return this.dbConnect.query('INSERT INTO cats (name, age, breed) VALUES ($1,$2,$3) RETURNING name;',
    [createCatDto.name, createCatDto.age, createCatDto.breed])
    .catch(error => Observable.throw(
      new HttpException(error, HttpStatus.FORBIDDEN)
    ));
  }

  findAll(): Observable<any>{
    return this.dbConnect.query('SELECT * FROM cats')
    .toArray()
    .catch(error => Observable.throw(
      new HttpException(error, HttpStatus.FORBIDDEN)
    ));
  }
}