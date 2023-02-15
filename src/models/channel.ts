export default class Channel {
  memoHtml: string;
  postHtml: string;
  inputHtml: string;

  constructor(init: { memoHtml: string; postHtml: string; inputHtml: string }) {
    this.memoHtml = init.memoHtml;
    this.postHtml = init.postHtml;
    this.inputHtml = init.inputHtml;
  }
}
