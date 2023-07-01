import theme from '../../theme'
import { styled } from "styled-components";

import ZRPIcon from '../../assets/zrp.png'
import iColaboraIcon from '../../assets/icolabora.png'
import InputIcon from '../../assets/input.png'

function CareerSection() {

    const CareerHeader = styled.h1`
        font-size: ${theme.font.size.title};
        font-weight: ${theme.font.weight.bold};
        text-align: center;
        color: ${theme.palette.primary};
    `

    const CareerJobCardWrapper = styled.section`
        display: flex;
        flex-direction: column;
        gap: 72px;
    `    

    const CareerJobCard = styled.div`
        display: flex;
        gap: 48px;
        padding: 0 100px;
    `

    const CareerCompanyIcon = styled.img`
        width: 128px;
        height: 128px;
    `

    const CareerJobCardContent = styled.span`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `

    const CareerCompanyTitle = styled.h2`
        font-size: ${theme.font.size.highlight};
        font-weight: ${theme.font.weight.bold};
    `

    const CareerPositionTitle = styled.h3`
        font-size: ${theme.font.size.highlight};
        font-weight: ${theme.font.weight.bold};
        color: ${theme.palette.primary};
    `

    const CareerPositionDescription = styled.p`
        font-size: ${theme.font.size.highlight};
        color: ${theme.palette.text.secondary};
    `

    return (
        <>
            <CareerHeader>CAREER</CareerHeader>
            <CareerJobCardWrapper>
                <CareerJobCard>
                    <CareerCompanyIcon src={ZRPIcon} />
                    <CareerJobCardContent>
                        <CareerCompanyTitle>ZRP</CareerCompanyTitle>
                        <CareerPositionTitle>Full-stack Developer [Apr/22 - May/23]</CareerPositionTitle>
                        <CareerPositionDescription>
                            Acted in different projects using Node.js, React.js and Material UI; including a Twilio Chatbot 
                            integrated to a Node.js API (Strapi); along the projects has also had experiences with Serverless 
                            Framework (AWS Lambda), Typescript, Nest.js, TypeORM, Jest and more
                        </CareerPositionDescription>
                    </CareerJobCardContent>
                </CareerJobCard>
                <CareerJobCard>
                    <CareerCompanyIcon src={iColaboraIcon} />
                    <CareerJobCardContent>
                        <CareerCompanyTitle>iColabora</CareerCompanyTitle>
                        <CareerPositionTitle>Junior Programmer Analyst [Nov/19 - Apr/22]</CareerPositionTitle>
                        <CareerPositionDescription>
                            Had worked with Turbina, a BPMS, developing new processes and features through the 
                            application (using Vue.js, Javascript, HTML & CSS). Had also built and worked on backend APIs 
                            using Node.js.
                        </CareerPositionDescription>
                    </CareerJobCardContent>
                </CareerJobCard>
                <CareerJobCard>
                    <CareerCompanyIcon src={InputIcon} />
                    <CareerJobCardContent>
                        <CareerCompanyTitle>Input Tecnologia</CareerCompanyTitle>
                        <CareerPositionTitle>Software Development Intern [Apr/19 - Nov/19]</CareerPositionTitle>
                        <CareerPositionDescription>
                            Developed and maintained different ERP systems but acting mainly in the company Hospital System (WinHosp), using the Clarion IDE/Language connected with Microsoft SQL Server Databases.
                            {' '}
                        </CareerPositionDescription>
                    </CareerJobCardContent>
                </CareerJobCard>
            </CareerJobCardWrapper>
        </>
    );
}

export default CareerSection;