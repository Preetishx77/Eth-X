export const sortTransactionHistoryByDateTime = transactionHistory => {
  return transactionHistory.sort((a, b) => {
    // Convert date strings to Date objects for comparison
    const dateA = new Date(a.dateTime);
    const dateB = new Date(b.dateTime);

    // Compare the dates
    return dateA - dateB;
  });
};
