/**
 * Builds the mailto: href the contact form hands to the visitor's mail client.
 * Every part is percent-encoded, so a newline pasted into the name field cannot
 * break out of the subject and forge extra headers.
 */
export function composeMailto(input: {
  to: string;
  name: string;
  email: string;
  message: string;
}) {
  const subject = `Pesan dari ${input.name}`;
  const body = `${input.message}\n\n--\n${input.name}\n${input.email}`;
  return (
    `mailto:${encodeURIComponent(input.to)}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  );
}
