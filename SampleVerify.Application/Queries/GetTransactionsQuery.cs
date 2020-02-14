namespace SampleVerify.Application.Queries
{
    using System.Collections.Generic;
    using Domain.Entities;

    public class GetTransactionsQuery
    {
        public IList<Transaction> Run()
        {
            // Static list used instead of actual database
            return SampleTransactions.TransactionList;
        }
    }
}
