export function GET() {
  return new Response('google-site-verification: google55a6da75d36e63eb.html', {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
