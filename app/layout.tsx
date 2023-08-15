import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GoFarm',
  description: 'Modernize farming with GoFarm through precise area calculation, resource management, weather updates, recommendations & crop prices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
