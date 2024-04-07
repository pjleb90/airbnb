import { Nunito } from 'next/font/google'

import './globals.css'

import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';

import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';

import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import Footer from './components/Footer';
import type { Metadata } from 'next'


const font = Nunito({
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";


export const metadata: Metadata = {
  metadataBase: new URL("https://rental-app-ebon.vercel.app/"),
  openGraph:  {
    type: "website",
    url: "https://rental-app-ebon.vercel.app/",
    title: "Airbnb Clone",
    description: "A full stack Airbnb clone built with Next.js 13, React, Tailwind, Prisma, MongoDB, and NextAuth",
    siteName: "Airbnb Clone",
    images: [{
      url: "https://www.digital.ink/wp-content/uploads/airbnb_logo_detail.jpg",
    }],
  }
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
