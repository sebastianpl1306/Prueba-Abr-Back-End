using Microsoft.AspNetCore.Mvc;
using Prueba_Abr_Back_End.Models;
using Prueba_Abr_Back_End.Services;

namespace Prueba_Abr_Back_End.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SubjectController : ControllerBase
{
    ISubjectService subjectService;

    public SubjectController(ISubjectService service)
    {
        this.subjectService = service;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(subjectService.Get());
    }

    [HttpPost]
    public IActionResult Post([FromBody] Subject subject)
    {
        return Ok(subjectService.Save(subject).Result);
    }

    [HttpPut("{id}")]
    public IActionResult Put(Guid id, [FromBody] Subject subject)
    {
        return Ok(subjectService.Put(id, subject).Result);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id) {
        return Ok(subjectService.Delete(id).Result);
    }
}
