namespace SampleVerify.Domain.Rules
{
    using System;

    /// <summary>
    /// Core business rule
    /// </summary>
    public static class MinCustomerAge
    {
        // Valid if returns true
        public static bool Verify(DateTime dateOfBirth) => (DateTime.Today - dateOfBirth.Date).Days / 365.25 >= 21;
    }
}
