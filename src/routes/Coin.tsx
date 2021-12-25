import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Header, Loader, Title } from './Coins';

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading...'}</Title>
      </Header>
      {loading ? (
        <Loader>loading...</Loader>
      ) : null}</Container>
  )
}

export default Coin;
