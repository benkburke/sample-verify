namespace SampleVerify.Domain.Entities
{
    using System.Collections.Generic;

    // Core business object
    public class Transaction
    {
        public decimal Amount { get; set; }
        public int CustomerId { get; set; }
        public int Id { get; set; }
    }

    public static class SampleTransactions
    {
        public static readonly IList<Transaction> TransactionList = new List<Transaction>
        {
            new Transaction
            {
                Id = 1,
                CustomerId = 1,
                Amount = 11
            },
            new Transaction
            {
                Id = 2,
                CustomerId = 2,
                Amount = 100
            },
            new Transaction
            {
                Id = 3,
                CustomerId = 3,
                Amount = 1000
            },
            new Transaction
            {
                Id = 4,
                CustomerId = 4,
                Amount = 9999
            }
        };
    }
}
