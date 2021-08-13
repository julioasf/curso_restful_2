import { EntityRepository, Repository } from 'typeorm';
import Order from '../entities/Order';
import Customer from '@modules/customers/typeorm/entities/Customer';

// Interface customizada do Product, visto que aqui só precisaremos de alguns dados do produto.
interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

interface IRequest {
  customer: Customer;
  products: IProduct[]; // como só utiliza alguns dados de Product, então usa a interface customizada.
}

@EntityRepository(Order)
class OrdersRepository extends Repository<Order> {
  public async findById(id: string): Promise<Order | undefined> {
    // quando é findOne por id, não é necessário usar um objeto com where.
    const order = this.findOne(id, {
      relations: ['order_products', 'customer'],
    });

    return order;
  }

  public async createOrder({ customer, products }: IRequest): Promise<Order> {
    const order = this.create({
      customer,
      order_products: products,
    });

    await this.save(order);

    return order;
  }
}

export default OrdersRepository;
