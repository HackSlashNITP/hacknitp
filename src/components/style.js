import styled from "styled-components"

export const Maindiv=styled.div`
background-color:#aa9090;
`

export const Aboutdiv = styled.div`
  background-color: #0f0000;
  padding-bottom: 15vh;
  padding-top: 15vh;
  .abouthead{
    font-family:"Poppins";
  }
  .abouttxt {
    font-family: "NotoSans";
    font-style: normal;
    line-height: 130.2%;
    letter-spacing: 0.15em;
    color: #aa9090;
  }
  h1 {
    color: #fff8f8;
  }
`
export const Sponsordiv = styled.div`
  background-color: #0f0000;
  padding-bottom: 15vh;
  padding-top: 15vh;
  h1 {
    margin-top: 10vh;
    color: #FFF8F8;
    font-family: "Poppins";
    font-size: 2.5rem;
    font-weight: bold;
  }
  .container{
    max-width:1500px;
  }
`
export const Sponsorcarddiv = styled.div`
  width: 200px;
  height: 150px;
  margin:4vh;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
`