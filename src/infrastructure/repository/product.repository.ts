import Product from "../../domain/entity/product";
import ProductRepositoryInterface from "../../domain/repository/product-repository-interface";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {
  async create({ id, name, price }: Product): Promise<void> {
    await ProductModel.create({ id, name, price });
  }
  async update({ id, name, price }: Product): Promise<void> {
    await ProductModel.update({ name, price }, { where: { id } });
  }
  async find(id: string): Promise<Product> {
    const product = await ProductModel.findOne({ where: { id } });
    return new Product(product.id, product.name, product.price);
  }
  async findAll(): Promise<Product[]> {
    const products = await ProductModel.findAll();
    return products.map(
      (product) => new Product(product.id, product.name, product.price)
    );
  }
}
