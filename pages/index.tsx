// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Parking Lot App</title>
        <meta name="description" content="Welcome to the Parking Lot App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <h1>Welcome to the Parking Lot App</h1>
        <p>
          Go to{' '}
          {/* <Link href="/parking-lot"> */}
            {/* <a>Parking Lot Page</a>
          </Link>{' '}
          or{' '}
          <Link href="/parking-manager">
            <a>Parking Manager Page</a>
          </Link> */}
        </p>
      </main>
    </div>
  );
};

export default Home;
