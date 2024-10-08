import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return "This action adds a new product"
  }

  findAll() {
    return  [
      {
        "name":"Plátano",
        "code":"003456789",
        "id": 1,
        "description":"Plátano verde"
      },
      {
        "name":"Manzana",
        "code":"003456789",
        "id": 2,
        "description":"Manzana verde"
      },
      {
        "name":"Pera",
        "code":"003456789",
        "id": 3,
        "description":"Pera verde"
      }
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
