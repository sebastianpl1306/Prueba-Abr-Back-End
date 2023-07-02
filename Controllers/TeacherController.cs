﻿using Microsoft.AspNetCore.Mvc;
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
        teacherService.Save(teacher);
        return Ok();
    }

    [HttpPut("{id}")]
    public IActionResult Put(Guid id, [FromBody] Teacher teacher)
    {
        teacherService.Update(id, teacher);
        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        teacherService.Delete(id);
        return Ok();
    }
}

