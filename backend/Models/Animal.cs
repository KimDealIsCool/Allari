using System.ComponentModel.DataAnnotations;

namespace SSE_Project.Models
{
    public class Animal
    {
        [Required]
        public int Id { get; set; }

        [Required][StringLength(100)] public string Name { get; set; } = string.Empty;

    }

}