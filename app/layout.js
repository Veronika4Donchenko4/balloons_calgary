import './globals.css'

export const metadata = {
  title: 'Balloons Calgary — Beautiful Balloon Arrangements',
  description: 'Handcrafted balloon compositions for birthdays, baby showers, romantic surprises & special events in Calgary, Alberta.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
