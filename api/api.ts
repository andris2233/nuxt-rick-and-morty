import http from './http';

class Api {
  base: string;
  hasProps: string[];
  constructor(base: string, hasProps: string[]) {
    this.base = base;
    this.hasProps = hasProps;
  }
  async getById (id: number | string): Promise<object> {
    const res = await http.get(`${this.base}/${id}`);
    return res.data;
  };
  async getAll(): Promise<object> {
    const res = await http.get(this.base);
    console.log(res);
    return res.data;
  }
  async getByFiltrer(props: any): Promise<object> {
    const isValidProps: boolean = !!Object.keys(props).find((prop: string) => { !this.hasProps.includes(prop) });
    if (!isValidProps) {
      throw new Error('Invalid props!');
    }
    const propsStr: string = Object.keys(props).reduce((url: String, curProp: string): string => {
      return url += `&${curProp}=${props[curProp]}`;
    });
    const res = await http.get(`${this.base}/?${propsStr.substr(1, propsStr.length)}`);
    return res.data;
  }
}

const character: Api = new Api('character', ['name', 'status', 'species', 'type', 'gender']);
const location: Api = new Api('location', ['name', 'type', 'dimension']);
const episode: Api = new Api('episode', ['name', 'episode']);

export { character, location, episode };
