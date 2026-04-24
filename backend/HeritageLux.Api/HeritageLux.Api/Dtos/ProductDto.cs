namespace HeritageLux.Api.Dtos;

public class ProductDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string CategoryId { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public string Collection { get; set; } = string.Empty;
    public List<string> Images { get; set; } = new();
    public List<string> Sizes { get; set; } = new();
    public string Color { get; set; } = string.Empty;
    public string Material { get; set; } = string.Empty;
}
