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

    [HttpPost]
    public IActionResult Post([FromBody] Student student)
    {
        studentService.Save(student);
        return Ok();
    }
}

