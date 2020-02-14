namespace SampleVerify.Api.Models
{
    /// <summary>
    /// API model
    /// Ensures the API is isolated from changes in bottom layers
    /// </summary>
    public class NewTransaction
    {
        public decimal Amount { get; set; }
        public int CustomerId { get; set; }
    }
}
