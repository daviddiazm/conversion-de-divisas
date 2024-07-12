export interface Currency {
  amount: number;
  base:   string;
  date:   Date;
  rates:  { [key: string]: number };
}
