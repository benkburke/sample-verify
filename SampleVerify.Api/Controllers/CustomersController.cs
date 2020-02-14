namespace SampleVerify.Api.Controllers
{
    using Application.Commands;
    using Application.Queries;
    using Microsoft.AspNetCore.Mvc;
    using Models;

    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            // Send the query
            var query = new GetCustomersQuery();
            var customers = query.Run();

            return Ok(customers);
        }

        [HttpPost]
        public ActionResult Post(NewCustomer model)
        {
            // Can perform server side validation of the API model here

            // Send the command
            var command = new AddCustomerCommand(model.FirstName, model.LastName, model.DateOfBirth);
            var customer = command.Run();

            return Ok(customer.Id);
        }
    }
}
