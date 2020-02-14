namespace SampleVerify.Application.Commands
{
    using Domain.Entities;
    using Domain.Rules;

    /// <summary>
    /// Command and command handler are combined in this example
    /// </summary>
    public class AddTransactionCommand
    {
        private readonly decimal _amount;
        private readonly int _customerId;

        public AddTransactionCommand(int customerId, decimal amount)
        {
            _customerId = customerId;
            _amount = amount;
        }

        public Transaction Run()
        {
            // Simple validation
            // A true rules engine should be used in production in order to 
            // allow the addition of new rules without having to change existing commands
            if (!MinTransactionAmount.Verify(_amount) || !MaxTransactionAmount.Verify(_amount))
            {
                // Verification failed, return empty transaction
                // Can be a standard Command response with validation failures instead
                return new Transaction();
            }

            var transaction = new Transaction
            {
                Id = SampleTransactions.TransactionList.Count + 1,
                CustomerId = _customerId,
                Amount = _amount
            };

            SampleTransactions.TransactionList.Add(transaction);

            return transaction;
        }
    }
}
