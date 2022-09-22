import { CardDiv, DescriptionDiv, DivNav, ImageDiv, MaxImage } from './styles';

const MainContent = () => {
  return (
    <DivNav>
      <DescriptionDiv>
        <p
          style={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '16px',
            width: '100%',
          }}
        >
          Now taking online orders
        </p>

        <p style={{ fontSize: '18px' }}>
          Eos suscipit maiores et nemo dolor in molestias voluptatem et numquam
          possimus qui excepturi dolore. At voluptatem consequatur non assumenda
          debitis ut galisum internos.
        </p>
      </DescriptionDiv>

      <ImageDiv>
        <MaxImage src="fotocha.png" />
      </ImageDiv>

      <div style={{ flex: '1', justifyContent: 'center', display: 'flex' }}>
        <CardDiv>
          <p
            style={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            100% organic
          </p>
        </CardDiv>
      </div>
    </DivNav>
  );
};

export default MainContent;
