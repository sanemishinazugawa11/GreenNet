export function getEventStatus(date:string): "cancelled" | "upcoming" | "completed" {
  // if (event.cancelled) return "cancelled";

  const [day, month, year] = date.split("/").map(Number);
  const eventDate = new Date(year, month - 1, day);

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (eventDate > today) return "upcoming";
  if (eventDate < today) return "completed";
  return "upcoming"; // If it's exactly today, treat it as upcoming
}
