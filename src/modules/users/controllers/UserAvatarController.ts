import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import { classToClass } from 'class-transformer';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    //////////////////////////////////////////////////
    console.log(request);
    //console.log(request.body);
    //console.log(request.file.filename);
    //console.log(request.file);
    return response.json({});
    //////////////////////////////////////////////////

    const user = updateAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    return response.json(classToClass(user));
  }
}
