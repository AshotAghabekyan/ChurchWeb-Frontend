export function copyToClimboard(text: string): void {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
}


