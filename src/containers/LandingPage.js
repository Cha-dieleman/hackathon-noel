import React, { Component } from "react";
import "../App.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <div className="lpsection-home">
          <Container>
            <div className="lp-maintext-section">
              <h1>KidDo</h1>
              <h3>Mon cadeau ? </h3>
              <h3>C'est moi qui l'a fé !</h3>
            </div>
            <div>
              <Button>Découvrir</Button>
            </div>
          </Container>
        </div>
        <div className="lpsection-examples">
          <h2>Venez en prendre plein les mirettes</h2>
          <Container>
            <Row>
              <Col xs="12" md="4">
                <div className="card-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://www.maman-plume.fr/wp-content/uploads/2019/04/shoot-7112-1080x720.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Activité</CardTitle>
                      <CardSubtitle>Age - Ville - Catégorie</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>En savoir plus</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div className="card-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://www.maman-plume.fr/wp-content/uploads/2019/04/shoot-7112-1080x720.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Activité</CardTitle>
                      <CardSubtitle>Age - Ville - Catégorie</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>En savoir plus</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div className="card-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://www.maman-plume.fr/wp-content/uploads/2019/04/shoot-7112-1080x720.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Activité</CardTitle>
                      <CardSubtitle>Age - Ville - Catégorie</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>En savoir plus</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="lpsection-proposez">
          <Container>
            <Row>
              <Col sm="12" md="6">
                <h2>Proposez votre activité</h2>
                <p>
                  Vous avez un talent particulier pour la couture, la
                  programmation, l'ébénisterie, la peinture, la pirogravure sur
                  palette ? Vous souhaitez proposer un atelier pour les enfants,
                  avec ou sans leurs parents ? En voiture Simone !{" "}
                </p>
                <Button>Proposez</Button>
              </Col>
              <Col sm="12" md="6"></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default LandingPage;