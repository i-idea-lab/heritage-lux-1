using HeritageLux.Api.Dtos;
using HeritageLux.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace HeritageLux.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IDataService _dataService;

    public ProductsController(IDataService dataService)
    {
        _dataService = dataService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<ProductDto>> GetProducts()
    {
        var products = _dataService.GetProducts().Select(p => new ProductDto
        {
            Id = p.Id,
            Name = p.Name,
            CategoryId = p.CategoryId,
            Price = p.Price,
            Description = p.Description,
            Collection = p.Collection,
            Images = p.Images,
            Sizes = p.Sizes,
            Color = p.Color,
            Material = p.Material
        });
        return Ok(products);
    }

    [HttpGet("{id}")]
    public ActionResult<ProductDto> GetProduct(int id)
    {
        var p = _dataService.GetProductById(id);
        if (p == null) return NotFound();

        var dto = new ProductDto
        {
            Id = p.Id,
            Name = p.Name,
            CategoryId = p.CategoryId,
            Price = p.Price,
            Description = p.Description,
            Collection = p.Collection,
            Images = p.Images,
            Sizes = p.Sizes,
            Color = p.Color,
            Material = p.Material
        };
        return Ok(dto);
    }

    [HttpGet("category/{categoryId}")]
    public ActionResult<IEnumerable<ProductDto>> GetProductsByCategory(string categoryId)
    {
        var products = _dataService.GetProductsByCategoryId(categoryId).Select(p => new ProductDto
        {
            Id = p.Id,
            Name = p.Name,
            CategoryId = p.CategoryId,
            Price = p.Price,
            Description = p.Description,
            Collection = p.Collection,
            Images = p.Images,
            Sizes = p.Sizes,
            Color = p.Color,
            Material = p.Material
        });
        return Ok(products);
    }
}
