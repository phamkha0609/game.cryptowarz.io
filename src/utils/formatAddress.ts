export default function formatAddress(account: string) {
  if (!account || account?.length < 10) return account;
  const k = account.length;
  return `${account.slice(0, 5)}...${account.slice(k - 5, k)}`;
}
