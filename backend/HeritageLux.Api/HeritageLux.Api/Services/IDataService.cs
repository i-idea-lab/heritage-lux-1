using HeritageLux.Api.Models;

namespace HeritageLux.Api.Services;

public interface IDataService
{
    List<Category> GetCategories();
    List<Product> GetProducts();
    Product? GetProductById(int id);
    List<Product> GetProductsByCategoryId(string categoryId);
    void AddOrder(Order order);
}
