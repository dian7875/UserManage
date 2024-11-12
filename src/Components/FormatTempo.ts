import { format } from "@formkit/tempo";

const Tz = "America/Costa_Rica";

export const formatToDMY = (date: Date | string): string => {
  return format({
    date: date,
    format: "DD/MM/YYYY",
    tz: Tz,
  });
};

export const formatToYMD = (date: Date | string): string => {
  return format({
    date: date,
    format: "YYYY-MM-DD",
    tz: Tz,
  });
};