using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SSE_Project.Models;
using SSE_Project.Services;

namespace SSE_Project.Controllers
{

    [EnableCors("AllowReactApp")] 
    [ApiController]
    [Route("api/animals")]
    public class AnimalsController : ControllerBase
    {
        private readonly IAnimalService _animalService;

        public AnimalsController(IAnimalService animalService)
        {
            _animalService = animalService;
        }

        [HttpGet]
        public IActionResult GetAnimals()
        {
            try
            {
                var animals = _animalService.GetAnimals();
                return Ok(animals);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }

}
