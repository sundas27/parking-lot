// pages/index.tsx
import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import { Container, Typography } from '@mui/material';
import ParkingLotComponent from '../components/parkingLot/ParkingLot';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Parking Lot App</title>
        <meta name="description" content="Welcome to the Parking Lot App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <>
          <Navbar />
          <Container>
            <Typography variant="h4" gutterBottom>
              Parking Lot Page
            </Typography>
            <ParkingLotComponent />
          </Container>
        </>
      </main>
    </div >
  );
};

export default Home;
