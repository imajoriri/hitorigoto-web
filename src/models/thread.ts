export default class Thread {
  bodyHTML: string;

  constructor(init: { bodyHTML: string }) {
    this.bodyHTML = init.bodyHTML;
  }
}
