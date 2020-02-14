namespace SampleVerify.Domain.Entities
{
    using System;
    using System.Collections.Generic;

    // Core business object
    public class Customer
    {
        public DateTime DateOfBirth { get; set; }
        public string FirstName { get; set; }
        public int Id { get; set; }
        public string LastName { get; set; }
    }

    public static class SampleCustomers
    {
        public static readonly IList<Customer> CustomerList = new List<Customer>
        {
            new Customer
            {
                Id = 1,
                FirstName = "John",
                LastName = "Doe",
                DateOfBirth = DateTime.Today.AddYears(-21)
            },
            new Customer
            {
                Id = 2,
                FirstName = "Bob",
                LastName = "Smith",
                DateOfBirth = DateTime.Today.AddYears(-25)
            },
            new Customer
            {
                Id = 3,
                FirstName = "Jane",
                LastName = "Adams",
                DateOfBirth = DateTime.Today.AddYears(-30)
            },
            new Customer
            {
                Id = 4,
                FirstName = "Sally",
                LastName = "Jones",
                DateOfBirth = DateTime.Today.AddYears(-40)
            }
        };
    }
}
