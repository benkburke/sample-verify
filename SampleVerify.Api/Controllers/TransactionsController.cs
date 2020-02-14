namespace SampleVerify.Api.Controllers
{
    using Application.Commands;
    using Application.Queries;
    using Microsoft.AspNetCore.Mvc;
    using Models;

    [ApiController]
    [Route("api/[controller]")]
    public class TransactionsController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            // Send the query
            var query = new GetTransactionsQuery();
            var transactions = query.Run();

            return Ok(transactions);
        }

        [HttpPost]
        public ActionResult Post(NewTransaction model)
        {
            // Can perform server side validation of the API model here

            // Send the command
            var command = new AddTransactionCommand(model.CustomerId, model.Amount);
            var transaction = command.Run();

            return Ok(transaction.Id);
        }
    }
}
