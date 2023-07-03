using Microsoft.AspNetCore.Mvc;
using Prueba_Abr_Back_End.Services;

namespace Prueba_Abr_Back_End.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReportController : ControllerBase
{
    IReportService reportService;

    public ReportController(IReportService service)
    {
        this.reportService = service;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(reportService.Get().Result);
    }
}
