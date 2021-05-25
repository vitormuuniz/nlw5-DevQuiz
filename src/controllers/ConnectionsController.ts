import { Request, Response } from "express";
import { ConnectionsService } from "../services/ConnectionsService";

class ConnectionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { socket_id, user_id, admin_id, id } = request.body;

    const connectionsService = new ConnectionsService();

    try {
      const user = await connectionsService.create({
        socket_id,
        user_id,
        admin_id,
        id,
      });
      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ConnectionsController };
