import { Request } from 'express';

declare interface PublicRequest extends Request {}

declare interface ProtectedRequest extends PublicRequest {}
