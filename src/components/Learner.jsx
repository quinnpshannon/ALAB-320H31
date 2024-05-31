import styled from 'styled-components'
import LearnerScore from "./LearnerScore";

const LearnerBox = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
background: teal;
margin-bottom: 5px;
border-radius: 20px;
`;
const Name = styled.h2`
margin:0;
margin-left: auto;
margin-right: auto;
`;
const Bio = styled.p`
margin: 5px;
`;

function Learner({learners}) {
    const learnerList = learners.map(learner =>
        <LearnerBox>
            <Name>{learner.name}</Name>
            <Bio>{learner.bio}</Bio>
            <LearnerScore scores= {learner.scores}/>
        </LearnerBox>
    );
    return (
        <>{learnerList}</>
    );
}

export default Learner;