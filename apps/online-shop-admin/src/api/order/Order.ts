import { Customer } from "../customer/Customer";
import { OrderItem } from "../orderItem/OrderItem";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  orderItems?: Array<OrderItem>;
  updatedAt: Date;
};
