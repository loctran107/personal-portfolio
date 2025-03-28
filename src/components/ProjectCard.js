import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repoUrl }) => {
    const handleCardClick = () => {
        if (repoUrl) {
            window.open(repoUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx" onClick={handleCardClick}>
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};