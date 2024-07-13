export interface Stock {
  amount: number;
  base:   string;
  date:   Date;
  rates:  { [key: string]: number };
}
