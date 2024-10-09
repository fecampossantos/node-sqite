export class HttpError extends Error {
  constructor(
    public readonly message: string,
    public readonly httpCode: number
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
