export function formatDate(date: string) {
  const dt = new Date(date);
  return `${dt.getDay().toString().padStart(2, "0")}/${(dt.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${dt.getFullYear()}`;
}
