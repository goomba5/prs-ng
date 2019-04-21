export class JsonResponse {
  // json-response -> an array -> so user method can loop through users
  data: object;
  errors: object;
  meta: object;

  constructor(data: object, error: object, meta: object) {
    this.data;
    this.errors;
    this.meta;
  }
}
