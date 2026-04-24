using HeritageLux.Api.Dtos;
using HeritageLux.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace HeritageLux.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly IDataService _dataService;

    public CategoriesController(IDataService dataService)
    {
        _dataService = dataService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<CategoryDto>> GetCategories()
    {
        var categories = _dataService.GetCategories().Select(c => new CategoryDto
        {
            Id = c.Id,
            Name = c.Name,
            Description = c.Description
        });
        return Ok(categories);
    }
}
