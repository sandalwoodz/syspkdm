import {
    IsNotEmpty,
    IsString,
    IsArray,
    ValidateNested,
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { ApiProperty } from '@nestjs/swagger';
  
  // eslint-disable-next-line @typescript-eslint/class-name-casing
  export class teacherarryDto {
   
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly jobnumber: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;
  
    @ApiProperty()
    @IsString()
    readonly college: string;
  }

  export function IsNonPrimitiveArray(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
      registerDecorator({
        name: 'IsNonPrimitiveArray',
        target: object.constructor,
        propertyName,
        constraints: [],
        options: validationOptions,
        validator: {
          validate(value: any, args: ValidationArguments) {
            return (
              Array.isArray(value) &&
              value.reduce(
                (acc, el) => acc && typeof el === 'object' && !Array.isArray(el),
                true,
              )
            );
          },
        },
      });
    };
  }

  export class RemoveEssayDto {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @IsNonPrimitiveArray()
    @Type(() => teacherarryDto)
    readonly patchs: teacherarryDto[];
  }
  