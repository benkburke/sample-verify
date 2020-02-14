namespace SampleVerify.Application.Commands
{
    using System;
    using Domain.Entities;
    using Domain.Rules;

    /// <summary>
    /// Command and command handler are combined in this example
    /// </summary>
    public class AddCustomerCommand
    {
        private readonly DateTime _dateOfBirth;
        private readonly string _firstName;
        private readonly string _lastName;

        public AddCustomerCommand(string firstName, string lastName, DateTime dateOfBirth)
        {
            _firstName = firstName;
            _lastName = lastName;
            _dateOfBirth = dateOfBirth;
        }

        public Customer Run()
        {
            // Simple validation
            // A true rules engine should be used in production in order to 
            // allow the addition of new rules without having to change existing commands
            if (!MinCustomerAge.Verify(_dateOfBirth))
            {
                // Verification failed, return empty customer
                // Can be a standard Command response with validation failures instead
                return new Customer();
            }

            var customer = new Customer
            {
                Id = SampleCustomers.CustomerList.Count + 1,
                FirstName = _firstName,
                LastName = _lastName,
                DateOfBirth = _dateOfBirth
            };

            SampleCustomers.CustomerList.Add(customer);

            return customer;
        }
    }
}
