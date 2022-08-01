import styled from 'styled-components'

export const Wrapper = styled.main`
  background: -webkit-linear-gradient(#06092b, #cccccc);
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const ButtonLogin = styled.button`
  font-size: 2rem;
  border-radius: 6px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  cursor: pointer;
  
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illumination = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
