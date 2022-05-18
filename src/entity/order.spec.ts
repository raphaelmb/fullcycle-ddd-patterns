import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit test", () => {
  it("should create an order", () => {
    const orderItem = new OrderItem("1", "guitar", 500);
    const order = new Order("1", "123", [orderItem]);
    expect(order).toEqual({
      _id: "1",
      _customerId: "123",
      _items: [{ id: "1", name: "guitar", price: 500 }],
      _total: 500,
    });
  });

  it("should throw an error when id is empty", () => {
    expect(() => new Order("", "123", [])).toThrowError("Id is required.");
  });

  it("should throw an error when customerId is empty", () => {
    expect(() => new Order("123", "", [])).toThrowError(
      "Customer ID is required."
    );
  });

  it("should throw an error when items is empty", () => {
    expect(() => new Order("123", "123", [])).toThrowError("Item is required.");
  });

  it("should calculate total", () => {
    const orderItem1 = new OrderItem("1", "guitar", 500);
    const orderItem2 = new OrderItem("2", "amp", 700);
    const order = new Order("1", "123", [orderItem1, orderItem2]);
    expect(order.total()).toBe(1200);
  });
});
