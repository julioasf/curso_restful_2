import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';

class RedisCache {
  private client: RedisClient;
  private connected = false;

  constructor() {
    if (!this.connected) {
      this.client = new Redis(cacheConfig.config.redis);
      this.connected = true;
    }
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

  public async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }
}

export default new RedisCache();
