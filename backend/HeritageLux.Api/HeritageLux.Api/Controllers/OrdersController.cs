using HeritageLux.Api.Dtos;
using HeritageLux.Api.Models;
using HeritageLux.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace HeritageLux.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly IDataService _dataService;

    public OrdersController(IDataService dataService)
    {
        _dataService = dataService;
    }

    [HttpPost]
    public ActionResult CreateOrder(OrderCreateDto orderDto)
    {
        var order = new Order
        {
            CustomerName = orderDto.CustomerName,
            Email = orderDto.Email,
            Address = orderDto.Address,
            City = orderDto.City,
            PostalCode = orderDto.PostalCode,
            CreatedAt = DateTime.UtcNow,
            Items = orderDto.Items.Select(item => {
                var product = _dataService.GetProductById(item.ProductId);
                return new OrderItem
                {
                    ProductId = item.ProductId,
                    ProductName = product?.Name ?? "Unknown",
                    Quantity = item.Quantity,
                    UnitPrice = product?.Price ?? 0
                };
            }).ToList()
        };

        order.TotalAmount = order.Items.Sum(i => i.UnitPrice * i.Quantity);

        _dataService.AddOrder(order);

        return CreatedAtAction(nameof(CreateOrder), new { id = order.Id }, order);
    }
}
