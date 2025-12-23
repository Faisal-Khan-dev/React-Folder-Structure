export const StatusChip = (status) => {
  switch (status) {
    case "Pending":
    case "In-Progress":
      return {
        bg: "#FFF6D2",
        color: "#FFCC00",
      };

    case "Approved":
      return {
        bg: "#E5F3FF", // light blue
        color: "#007BFF", // blue
      };

    case "Completed":
      return {
        bg: "#F0FDF4",
        color: "#2E7D32",
      };

    case "Rejected":
    case "Not Given":
    case "NotCreated":
      return {
        bg: "#FFE5E5", // light red
        color: "#FF3B3B", // red
      };

    case "Given":
    case "Created":
      return {
        bg: "#F0FDF4",
        color: "#2E7D32",
      };

    default:
      return {
        bg: "transparent",
        color: "inherit",
      };
  }
};
