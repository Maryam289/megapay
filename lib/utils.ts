import {type ClassValue, clsx} from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind CSS classes safely.
//  * Used by shadcn/ui components.
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format date time
export const fromatDataTime = (dateString: Date) => {
    const dateTimeOptions: Intl.DateTimeFormatOptions = {
        weekday: "short", // "Saturday"
        month: "short",    // "October"
        day: "numeric",  // "31"
        year: "numeric", // "2026"
        hour: "numeric", // "05"
        minute: "numeric", // "30"
        hour12: true, // use 12-hour clock (true) || 24-hour clock (false)
    };
}

//  * Format monetary values.
//  * Example: formatCurrency(1500, "EGP")
//  * Example: formatCurrency(5000, "RUB")
export function formatCurrency(
  amount: number,
  currency: string,
  locale: string = "en-US"
): string {
  if (!Number.isFinite(amount)) return "—";

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${amount} ${currency}`;
  }
}


//  * Format regular numbers.
export function formatNumber(
  value: number,
  locale: string = "ar-EG",
  maximumFractionDigits: number = 2
): string {
  if (!Number.isFinite(value)) return "—";

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits,
  }).format(value);
}


// Safely convert supported date inputs into a Date.
function toValidDate(
  value: Date | string | number
): Date | null {
  const date = value instanceof Date ? value : new Date(value);

  return Number.isNaN(date.getTime()) ? null : date;
}

// * Format file sizes.
//  * Example: formatFileSize(1048576) => 1 MB
export function formatFileSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "—";

  if (bytes === 0) return "0 Bytes";

  const units = ["Bytes", "KB", "MB", "GB", "TB"];
  const unitIndex = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  );

  const size = bytes / Math.pow(1024, unitIndex);

  return `${Number(size.toFixed(2))} ${units[unitIndex]}`;
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const removeSpecialCharacters = (value: string) => {
    return value.replace(/[^\w\s]/gi, "");
};

