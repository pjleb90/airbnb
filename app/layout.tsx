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


const font = Nunito({
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export const metadata = {
  title: 'Airbnb',
  description: 'An Airbnb clone inspired by Code with Antonio',
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
