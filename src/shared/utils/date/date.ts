import { formatDistanceToNow } from "date-fns";

export const timeDifference = (_date: Date | string) => {
  const date = new Date(_date);

  return formatDistanceToNow(date, { addSuffix: true });
};
