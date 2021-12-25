import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
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
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    transition: color .5s ease-in-out;
    display: block;
    padding: 20px;
  }
  &:hover {
    color: ${props => props.theme.accentColor};
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
`
const coins = [
  {name: 'bit', id: 1},
  {name: 'eth', id: 2},
];

const Coins = () => {
  return (
    <Container>
      <Header>
        <Title>CoinCoin</Title>
      </Header>
      <CoinsList>
        {coins.map(coin => (
          <Coin>
            <Link to={`/${coin.id}`}>
              {coin.name} &rarr;
            </Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  )
}

export default Coins;
