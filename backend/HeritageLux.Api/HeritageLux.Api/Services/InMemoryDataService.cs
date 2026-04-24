using HeritageLux.Api.Models;

namespace HeritageLux.Api.Services;

public class InMemoryDataService : IDataService
{
    private readonly List<Category> _categories;
    private readonly List<Product> _products;
    private readonly List<Order> _orders = new();

    public InMemoryDataService()
    {
        _categories = new List<Category>
        {
            new Category { Id = "sherwanis", Name = "Sherwanis", Description = "Exquisite handcrafted sherwanis for the modern royalty." },
            new Category { Id = "kurta-sets", Name = "Kurta Sets", Description = "Timeless kurta sets for every occasion." }
        };

        _products = new List<Product>
        {
            new Product
            {
                Id = 1,
                Name = "Midnight Emerald Velvet Sherwani",
                CategoryId = "sherwanis",
                Price = 185000,
                Description = "Exude regal sophistication in our signature Midnight Emerald Velvet Sherwani. Each piece is a labor of love, featuring meticulously hand-stitched velvet and antique gold zardosi embroidery that captures the essence of ancestral Indian craftsmanship.",
                Collection = "The Royal Collection",
                Images = new List<string> {
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAH9h262r49XBBNT7g7wkKiZ2dLE80fvjsjqo1ZvV2TSUhVUHQvjZt-c0S5As-dyz2HpYd2Ad1oJssnASrrASaqN5RjpJzYvdCsLOLREtxfl5ScDr5lHJvN4ucgKo57xKop4kIr7McL-Kv_etNE1urfs7w5OuH8r74ogzlBu2b48akbkRrGhvNWBfHpalXWUIS_WHfOmy630PQ7BcHtUl3pwQAuKmeSc32MsbzzxsBaON16iuMSB7hfziwlzXQfj2wUPc_NNaJXo9A",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBIu3QRXjw-EKgYLY-gSyn94Acsgwst7Fm0i_H9IadUXObEF3_qKObOv5Tbkb8eCQpRNKWEgoL8il-pMHagaZfzvpuUApZzpmdydKcwhkY2urbW9fKETMODDgvmEcdMwihdUh1Ii1OMqBJS99MATClcqKpWjiXoO-_sihEDKJytQWFcWGKyDW50Po2prfUt5ThGPMTFYG52r_fXSgIB7KvCzcEQm8Yo_kWSwsWE8nUpf5Nd2COAc_RyfjmgzdcL8JWuX0CGZcXYZJ4",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3lLW_NTbxilwGVsUevDDXOOWqWyV24_LhIbuYzVrc93AfDDIWKLRflhsB3JyUp7lrf-w_-OeoehyOs4Y8KA0_Me2tYcqmxDSIk52kGjL5Cugovc7AsaGBOqq16j6LOdHOZxJXQQF3aGgroJjdyqwXaLxYec4PP6DFLwurmXLXmlv-KEnh6mjqS8s_Iy_lbP0VkIVUPF2UPTFfwluWTNQSpxHiQJdUB2Fi6CwyUQ7rCsDhWHreVf-U14cd2QVaflbEPbKG-EAKYp0"
                },
                Sizes = new List<string> { "S", "M", "L", "XL", "XXL" },
                Color = "Midnight Emerald",
                Material = "Velvet"
            },
            new Product
            {
                Id = 2,
                Name = "Zardosi Hand-Embroidered Sherwani",
                CategoryId = "sherwanis",
                Price = 124000,
                Description = "A masterpiece of traditional embroidery.",
                Collection = "Heritage Collection",
                Images = new List<string> { "https://lh3.googleusercontent.com/aida-public/AB6AXuBFNhMWtmxj8xguLcOsuGNlLj855pniVORlN2x1jNNjxOdmJMnviMDdqACWOthws90yOu3loOyp-VXn6ViKv0Zx05XcgrgtjGpkduHqMRmq8VJ1TaOiB5H4YI4Z5wqp94wi2-jYfh0qeldiwlWd1u_7N3niYtHLeKjv_aK_ynXSmvbAcdrqm72QHdY-54vFW8XvZ11WC88epa6pQBoZILYTbfSxL3Z9o5zVd52ugVqYhjmTfJQJhWa6RGeD5Bcw5Eton1AEj7O6sXE" },
                Sizes = new List<string> { "S", "M", "L", "XL" },
                Color = "Deep Emerald",
                Material = "Silk"
            },
            new Product
            {
                Id = 3,
                Name = "Raw Silk Ivory Kurta Set",
                CategoryId = "kurta-sets",
                Price = 45000,
                Description = "Elegant raw silk kurta set in ivory.",
                Collection = "Classic Collection",
                Images = new List<string> { "https://lh3.googleusercontent.com/aida-public/AB6AXuDWlEe5igznQ43PYw-1V0yofk1YP0htOZ5vPjh8oXQ3k7ulmNvZ74nLjWyVtpGA1jhrd83IP41u1FEfW9k0Ed0hT7YfEIJ3XvKx2Ji8FAeU73VnwogOtRgL4B4DqHp9-93QiAnfEeQWSVTZJnjzPrirYtHI-IEr45K9gimzBzXAZ05x3DXttScu3LUpHeTXJDqfywsaVSp_CyMqI00HCJnFHwBp2MxMRHRV4HUM7YuBW2q6oU4hJjHRtWhgekQ-t-5hVVrr-UUn2gE" },
                Sizes = new List<string> { "S", "M", "L", "XL" },
                Color = "Ivory",
                Material = "Raw Silk"
            }
        };
    }

    public List<Category> GetCategories() => _categories;
    public List<Product> GetProducts() => _products;
    public Product? GetProductById(int id) => _products.FirstOrDefault(p => p.Id == id);
    public List<Product> GetProductsByCategoryId(string categoryId) => _products.Where(p => p.CategoryId == categoryId).ToList();
    public void AddOrder(Order order)
    {
        order.Id = _orders.Count + 1;
        _orders.Add(order);
    }
}
