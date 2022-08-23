import { Handler, Request, Response } from "apiframework/http";
import { HTTPError } from "apiframework/errors";

import FlyAttendant from "../../models/FlyAttendant.js";

export default class FlyAttendantHandler extends Handler {
  async get(req: Request): Promise<Response> {
    const data = await FlyAttendant.all();

    return Response.json(data);
  }

  async post(req: Request): Promise<Response> {
    if (!req.parsedBody) {
      throw new HTTPError("Invalid body.", 400);
    }

    const data = {
      ...req.parsedBody,
    };

    const saved = await FlyAttendant.create(data);
    if (!saved) {
      throw new HTTPError("Failed to save a new Flight.", 500);
    }

    return Response.json(data).withStatus(201);
  }

  async handle(req: Request): Promise<Response> {
    switch (req.method) {
      case "GET":
        return await this.get(req);

      case "POST":
        return await this.post(req);
    }

    return Response.status(405);
  }
}