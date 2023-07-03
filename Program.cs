using Microsoft.Extensions.DependencyInjection;
using Prueba_Abr_Back_End;
using Prueba_Abr_Back_End.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSqlServer<SchoolContext>("Data Source=DESKTOP-C1DKC49\\SQLEXPRESS; Initial Catalog=SchoolDB; Integrated Security=true;Trusted_Connection=SSPI;MultipleActiveResultSets=true;Trust Server Certificate=true");
builder.Services.AddScoped<ITeacherService, TeacherService>();
builder.Services.AddScoped<IStudentService, StudentService>();
builder.Services.AddScoped<ISubjectService, SubjectService>();
builder.Services.AddScoped<IStudentSubjectService, StudentSubjectService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
