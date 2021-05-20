import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { text, admin_id, user_id } = request.body;

    const messagesService = new MessagesService();

    const messages = await messagesService.create({
      text,
      admin_id,
      user_id,
    });

    return response.status(201).json(messages);
  }

  async showByUserId(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const messagesService = new MessagesService();

    const messagesList = await messagesService.listByUserId(user_id);

    return response.status(200).json(messagesList);
  }
}

export { MessagesController };
