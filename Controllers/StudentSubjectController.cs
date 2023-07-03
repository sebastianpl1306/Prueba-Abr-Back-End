using Microsoft.AspNetCore.Mvc;
using Prueba_Abr_Back_End.Models;
using Prueba_Abr_Back_End.Services;

namespace Prueba_Abr_Back_End.Controllers;

[ApiController]
[Route("api/student/assign")]
public class StudentSubjectController : ControllerBase
{
    IStudentSubjectService studentSubjectService;

    public StudentSubjectController (IStudentSubjectService studentSubjectService)
    {
        this.studentSubjectService = studentSubjectService;
    }

    [HttpPost]
    public IActionResult Post([FromBody] StudentSubject studentSubject)
    {
        return Ok(studentSubjectService.Assign(studentSubject).Result);
    }
}
