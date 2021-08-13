import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string; // string porque o id é do tipo uuid
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    await productsRepository.remove(product); // ao invés de se utilizar o id, está sendo usada a entidade/objeto product
  }
}

export default DeleteProductService;
