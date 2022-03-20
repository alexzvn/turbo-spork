
export class Greeting {
  constructor(private readonly message: string) {}

  say(): string {
    return this.message;
  }
}
