namespace SampleVerify.Application.Queries
{
    using System.Collections.Generic;
    using Domain.Entities;

    public class GetCustomersQuery
    {
        public IList<Customer> Run()
        {
            // Static list used instead of actual database
            return SampleCustomers.CustomerList;
        }
    }
}
