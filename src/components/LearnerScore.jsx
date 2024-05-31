import styled from 'styled-components'

const ScoresBox = styled.div`
display: flex;
justify-content: space-between;
`;
const ScoreBox = styled.div`
padding: 5px;
border: 2px dotted black;
border-radius: 10px;
display: flex;
flex-direction: column;
`;
const Score = styled.p`
margin:0;
padding:0;
color:goldenrod;
font-family: "Press Start 2P", system-ui;
font-size: .5em;
`;
const DateText = styled.p`
color:blueviolet;
margin:0;
padding:0;

`;
function DatetoDate(dateString){
    const newDate=Date.parse(dateString);
    const result = newDate.getMonth;
    console.log(result)
    return dateString;
}
function LearnerScore({scores}) {
    const scoreList = scores.map(score =>
        <ScoreBox>
            <DateText>Date: {score.date}</DateText>
            <Score>Score: {score.score}</Score>
        </ScoreBox>
    );
    return (
        <ScoresBox>{scoreList}</ScoresBox>
    );
}

export default LearnerScore;