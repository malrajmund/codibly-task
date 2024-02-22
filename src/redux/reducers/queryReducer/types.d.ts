interface QueryState {
  filter: string;
  page: number;
  perPage: number;
}

interface QueryPayload {
  prop: QueryProp;
  value: string | number | any[] | null;
}
