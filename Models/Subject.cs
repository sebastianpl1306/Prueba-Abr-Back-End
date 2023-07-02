﻿using System.Text.Json.Serialization;

namespace Prueba_Abr_Back_End.Models;

public class Subject
{
    public Subject()
    {
        this.Students = new List<StudentSubject>();
    }

    public Guid SubjectId { get; set; }
    public string Name { get; set; }
    public virtual ICollection<StudentSubject> Students { get; set; }
}