using Microsoft.AspNetCore.Mvc;
using Prueba_Abr_Back_End.Models;
using Prueba_Abr_Back_End.Services;

namespace Prueba_Abr_Back_End.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudentController : ControllerBase
{
    IStudentService studentService;

    public StudentController(IStudentService service)
    {
        this.studentService = service;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(studentService.Get());
    }

    [HttpGet("{id}")]
    public IActionResult GetOne(Guid id)
    {
        return Ok(studentService.GetOne(id).Result);
    }

    [HttpPost]
    public IActionResult Post([FromBody] Student student)
    {
        
        return Ok(studentService.Save(student).Result);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        return Ok(studentService.Delete(id).Result);
    }

    [HttpPut("{id}")]
    public IActionResult Put(Guid id, [FromBody] Student student)
    {
        
        return Ok(studentService.Update(id, student).Result);
    }
}

