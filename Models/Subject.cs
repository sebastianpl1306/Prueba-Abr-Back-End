﻿namespace Prueba_Abr_Back_End.Models;

public class Subject
{
    public Guid SubjectId { get; set; }
    public string Name { get; set; }
    public virtual Student Student { get; set; }
}