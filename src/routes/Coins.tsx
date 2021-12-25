import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background: white;
  color: ${props => props.theme.bgColor};
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    transition: color .5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  &:hover {
    color: ${props => props.theme.accentColor};
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
`

const Loader = styled.span`
  text-align: center;
`

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}


const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async() => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  },[])
  return (
    <Container>
      <Header>
        <Title>CoinCoin</Title>
      </Header>
      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map(coin => (
            <Coin>
              <Link to={`/${coin.id}`}>
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt='coin image' />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )
      }
    </Container>
  )
}

export default Coins;


