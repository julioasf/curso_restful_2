import { Request, Response } from 'express';
import CreateCustomerService from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';

export default class CostumersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCostumers = new ListCustomerService();

    const costumers = await listCostumers.execute();

    return response.json(costumers);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCostumer = new ShowCustomerService();

    const costumer = await showCostumer.execute({ id });

    return response.json(costumer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCostumer = new CreateCustomerService();

    const costumer = await createCostumer.execute({ name, email });

    return response.json(costumer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;

    const updateCostumer = new UpdateCustomerService();

    const costumer = await updateCostumer.execute({
      id,
      name,
      email,
    });

    return response.json(costumer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCostumer = new DeleteCustomerService();

    await deleteCostumer.execute({ id });

    return response.json([]);
  }
}
