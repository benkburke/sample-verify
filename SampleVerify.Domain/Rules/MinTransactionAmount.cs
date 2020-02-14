namespace SampleVerify.Domain.Rules
{
    /// <summary>
    /// Core business rule
    /// </summary>
    public static class MinTransactionAmount
    {
        // Valid if returns true
        public static bool Verify(decimal transactionAmount) => transactionAmount > 10;
    }
}
