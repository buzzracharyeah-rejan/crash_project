import styled from 'styled-components';
import tw from 'twin.macro';

const HomePageContainer = () => {
  return (
    <Container>
      <h1>hello world</h1>
    </Container>
  );
};

const Container = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  h-full
  items-center
  overflow-x-hidden`}

  h1 {
    ${tw`
    underline
    text-3xl`}
  }
`;

export default HomePageContainer;
