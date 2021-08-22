import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';

export default class RedisCache {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: any): Promise<void> {
    // Utilizando JSON.stringify pois value pode ser qualquer tipo de dado (value: any), inclusive um array.
    // Nesse caso, um array deve ser convertido para uma string.
    await this.client.set(key, JSON.stringify(value));
  }

  // <T> é um tipo genérico.
  public async recover<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);

    if (!data) {
      return null;
    }

    const parsedData = JSON.parse(data) as T;

    return parsedData;
  }

  public async invalidate<T>(key: string): Promise<void> {
    await this.client.del(key);
  }
}
