export interface Products {
    filter(arg0: (prd: any) => boolean): any;
    id: number,
    name: string,
    price: number,
    url: string,
    description: string,
    amount: string;

}
