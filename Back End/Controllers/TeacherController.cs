using Microsoft.AspNetCore.Mvc;
using Prueba_Abr_Back_End.Models;
using Prueba_Abr_Back_End.Services;

namespace Prueba_Abr_Back_End.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeacherController: ControllerBase
{
    ITeacherService teacherService;

    public TeacherController(ITeacherService service)
    {
        this.teacherService = service;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(teacherService.Get());
    }

    [HttpPost]
    public IActionResult Post([FromBody] Teacher teacher)
    {
        return Ok(teacherService.Save(teacher).Result);
    }

    [HttpPut("{id}")]
    public IActionResult Put(Guid id, [FromBody] Teacher teacher)
    {
        return Ok(teacherService.Update(id, teacher).Result);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        teacherService.Delete(id);
        return Ok();
    }
}

