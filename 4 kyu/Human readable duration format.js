function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  const units = [
    { name: "year", duration: 60 * 60 * 24 * 365 },
    { name: "day", duration: 60 * 60 * 24 },
    { name: "hour", duration: 60 * 60 },
    { name: "minute", duration: 60 },
    { name: "second", duration: 1 },
  ];
  const parts = [];
  units.forEach((unit) => {
    const count = Math.floor(seconds / unit.duration);
    if (count > 0) {
      parts.push(count + " " + (count === 1 ? unit.name : unit.name + "s"));
      seconds %= unit.duration;
    }
  });
  let result = parts[0];
  for (let i = 1; i < parts.length - 1; i++) {
    result += ", " + parts[i];
  }
  if (parts.length > 1) {
    result += " and " + parts[parts.length - 1];
  }
  return result;
}
