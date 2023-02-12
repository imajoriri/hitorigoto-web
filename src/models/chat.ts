import { Delta } from "@vueup/vue-quill";

export default class Chat {
  readonly delta: Delta;
  readonly createdAt: Date;

  constructor(init: { delta: Delta; createdAt: Date }) {
    this.delta = init.delta;
    this.createdAt = init.createdAt;
  }
}
