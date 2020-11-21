import styled from "styled-components"

export const Maindiv = styled.div`
  background-color: #aa9090;
`

export const Aboutdiv = styled.div`
  background-color: #0f0000;
  padding-bottom: 15vh;
  padding-top: 15vh;
  .abouthead {
    font-family: "Poppins";
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
    color: #fff8f8;
    font-family: "Poppins";
    font-size: 2.5rem;
    font-weight: bold;
  }
  .container {
    max-width: 1500px;
  }
`
export const Sponsorcarddiv = styled.div`
  width: 200px;
  height: 150px;
  margin: 4vh;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
`
export const FaqWrapper = styled.div`
  background: #260404;
  border-radius: 25px;
  position: relative;
  color: #fff;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  padding: 15px 5px 15px 32px;
  .expand {
    position: absolute;
    right: 25px;
  }
`
export const FaqSection = styled.section`
  background: #0f0000;
  padding: 10vh 0;

  .heading {
    color: #fff8f8;
    padding: 0 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 55px;
    line-height: 82px;
    text-align: center;
    margin-bottom: 10vh;
  }
`

export const FaqSolutionWrapper = styled.div`
  color: floralwhite;
  background-color: #941010;
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  border-radius: 25px;
  margin: 20px 0;
  padding: 20px 30px;
  line-height: 40px;

  text-align: center;
`
