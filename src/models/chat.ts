export default class Chat {
  readonly html: string;
  readonly createdAt: Date;

  constructor(init: { html: string; createdAt: Date }) {
    this.html = init.html;
    this.createdAt = init.createdAt;
  }
}
