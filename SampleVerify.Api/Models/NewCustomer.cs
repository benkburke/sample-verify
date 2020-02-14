namespace SampleVerify.Api.Models
{
    using System;

    /// <summary>
    /// API model
    /// Ensures the API is isolated from changes in bottom layers
    /// </summary>
    public class NewCustomer
    {
        public DateTime DateOfBirth { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
