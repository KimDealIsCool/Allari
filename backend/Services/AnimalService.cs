using SSE_Project.Models;

namespace SSE_Project.Services
{
    public class AnimalService : IAnimalService
    {
        public IEnumerable<Animal> GetAnimals()
        {
            // For testing, we'll return a static list.
            return new List<Animal>
            {
                new Animal { Id = 1, Name = "Lion" },
                new Animal { Id = 2, Name = "Elephant" },
                new Animal { Id = 3, Name = "Spider" },
                new Animal { Id = 4, Name = "Eagle" },
            };
        }
    }
   

}
