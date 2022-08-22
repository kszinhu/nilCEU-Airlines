import TerminalHandler from "./TerminalHandlers/TerminalHandler.js";
import TerminalByIdHandler from "./TerminalHandlers/TerminalByIdHandler.js";
import CompanyHandler from "./CompanyHandlers/CompanyHandler.js";
import CompanyByIdHandler from "./CompanyHandlers/CompanyByIdHandler.js";
import PlaneHandler from "./PlaneHandlers/PlaneHandler.js";
import PlaneByIdHandler from "./PlaneHandlers/PlaneByIdHandler.js";

export const Handlers: { [key: string]: any } = {
  Terminal: {
    TerminalById: TerminalByIdHandler,
    Terminal: TerminalHandler,
  },
  Company: {
    CompanyById: CompanyByIdHandler,
    Company: CompanyHandler,
  },
  Plane: {
    Plane: PlaneHandler,
    PlaneById: PlaneByIdHandler,
  },
};
