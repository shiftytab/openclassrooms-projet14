import styled from 'styled-components';

type ModalProps = {
    title?: string;
    children: JSX.Element | JSX.Element[];
    show: boolean;
    handleClose: Function;
}

export default function index({ children, title, show, handleClose } : ModalProps) {
  return show && (
    <Container>
      <Backdrop onClick={() => handleClose()}/>
      <Modal>
        {
          (title) && (
            <Title>{title}</Title>
          )
        }
        <Content>
          {children}
        </Content>
        <Footer>
          <Button onClick={() => handleClose()}>Close</Button>
        </Footer>
      </Modal>
    </Container>
  )
}


const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`

const Modal = styled.div`
  position:relative;
  width: 500px;
  min-height: 300px;
  background-color: #fff;
  z-index: 1000;
  border-radius: 25px;
  padding: 20px;
  display:flex;
  flex-direction: column;
`

const Footer = styled.div`
  padding: 10px;
`

const Button = styled.button`
  padding: 15px;
  background-color: dodgerblue;
  border: none;
  border-radius: 100px;
  text-align: center;
  width: 100%;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0d6efd;
  }
`


const Content = styled.div`
  flex: 1;
  text-align: center;
  color: gray;
`

const Title = styled.h2`
  text-align: center;
`