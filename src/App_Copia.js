import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Container>
        {/* SECTION 1 */}
        <Row>
          <Col md={6} lg={true}>
            <h1>Tiggidoo connecte les professionnels du ménage résidentiel et leurs futurs clients</h1>
            <p>Sans frais, sans engagement et sans complication, la plateforme Tiggidoo vous permet de recevoir des offres d’emploi et de les gérer comme bon vous semble.</p>
            <p>Profitez en plus d’outils de gestion intégrés à votre compte pro conçus spécialement pour vous faciliter la tâche.</p>
            <p>Tiggidoo est la solution idéale pour tous les travailleurs autonomes en entretien ménager qui souhaitent augmenter leurs revenus.</p>
            <Button variant="outline-secondary" size="lg">Devenez un Todoo</Button>
          </Col>          
          <Col md={6} lg={true}>
            <img src="images/emploi-entretien-menage.svg" />
          </Col>          
        </Row>

        {/* SECTION 2 */}
        <Row>
          <Col md={6} lg={true}>
            <img src="images/menage.svg" />
          </Col>          
          <Col md={6} lg={true}>
            <h1>Une plateforme qui améliore votre organisation au quotidien</h1>
            <ul>
              <li>Inscription gratuite sans engagement</li>
              <li>Création simple et facile de votre compte pro</li>
              <li>Gestion de votre calendrier et horaire</li>
              <li>Facturation automatisée et centralisée</li>
              <li>Soutien technique de l’équipe Tiggidoo</li>
            </ul>
            <Button variant="outline-secondary" size="lg">Je m’inscris</Button>
          </Col>          
        </Row>
        {/* SECTION 3 */}
        <div>
          <h1>Comment ça fonctionne?</h1>
          <h4>C’est vous le patron! Vous décidez où et quand vous travaillez.</h4>
          <h4>Bingo! Votre profil est sélectionné par votre futur client :</h4>
        </div>
        <Row>
          <Col md={6} lg={true}>
            <div>1</div>
            <p>Soyez immédiatement prévenu par courriel lorsqu’une nouvelle offre est arrivée sur votre compte pro</p>
          </Col>
          <Col md={6} lg={true}>
            <div>2</div>
            <p>Visualisez l’offre client que vous êtes libre d’accepter ou de refuser</p>
          </Col>
          <Col md={6} lg={true}>
            <div>3</div>
            <p>Effectuez un ménage de qualité, obtenez un avis positif sur votre profil</p>
          </Col>
          <Col md={6} lg={true}>
            <div>4</div>
            <p>Obtenez vos honoraires rapidement et de façon sécurisée.</p>
          </Col>
        </Row>
        {/* SECTION 4 */}
        <h1>Proposez vos services comme aide de ménage avec Tiggidoo</h1>
        <Row>
          <Col md={6} lg={true}>
            Slider
          </Col>
          <Col md={6} lg={true}>
            Slider
          </Col>
          <Col md={6} lg={true}>
            Slider
          </Col>
          <Col md={6} lg={true}>
            Slider
          </Col>
        </Row>
        {/* SECTION 5 */}
        <h1>En 3 étapes simples</h1>
        <Row>
          <Col>
            <div>
              <img src="images/Fichier 3.png" />
              <h3>Répondez à quelques questions</h3>
              <p>Complétez le formulaire d’inscription en ligne. Simple et rapide, il permet à l’équipe Tiggidoo de faire une pré-sélection des futurs Todoo.</p>
            </div>
          </Col>
          <Col>
            <div>
              <img src="images/entrevue-entretien-menage.png" />
              <h3>Participez à une entrevue à distance</h3>
              <p>À ce stade ci, une entrevue par vidéoconférence de quelques minutes nous permet de bien préciser les attentes d’un côté comme de l’autre. Nous validons aussi toutes vos informations et répondons à vos questions.</p>
            </div>
          </Col>
          <Col>
            <div>
              <img src="images/prestation-menage.png" />
              <h3>Rejoignez enfin la gang des Todoo</h3>
              <p>Votre profil est mis en ligne aussitôt que votre inscription est complète. Vous recevez désormais chaque notification par courriel dès qu’une offre de prestation correspond à vos critères de sélection.</p>
            </div>
          </Col>
        </Row>

        {/* SECTION 6 */}
        <h1>Prêt à augmenter votre revenu?</h1>
        <p>Débutez dès maintenant le processus de recrutement. Vous obtiendrez une réponse en moins de 48h.</p>
        <Button variant="outline-secondary" size="lg">COMMENCE</Button>

        {/* SECTION 7 */}
        <h1>Les 4 critères essentiels pour intégrer la plateforme Tiggidoo</h1>
        <p>La plateforme Tiggidoo est un intermédiaire entre des personnes à la recherche d’un service de ménage de qualité et des travailleurs autonomes experts en entretien ménager. Le lien de confiance, le respect et l’engagement envers la qualité sont les valeurs fondamentales de notre entreprise.</p>
        <p>C’est pourquoi vous devez répondre à quelques critères pour devenir un Todoo et recevoir des demandes de prestation via notre plateforme.</p>

        <Row>
          <Col md="6" lg={true}>
            <div>
              <img src="images/identite.png" />
              <h3>Une identité vérifiée</h3>
              <p>Pour des raisons de sécurité évidentes, nous procédons à la vérification de l’identité de tous les travailleurs autonomes qui s’inscrivent sur la plateforme Tiggidoo.</p>
            </div>
          </Col>
          <Col md="6" lg={true}>
            <div>
              <img src="images/banque.png" />
              <h3>Un compte bancaire valide</h3>
              <p>Vous devez posséder un compte bancaire à votre nom pour le versement de vos honoraires suite à la réalisation de vos prestations d’entretien ménager.</p>
            </div>
          </Col>
          <Col md="6" lg={true}>
            <div>
              <img src="images/internet.png" />
              <h3>Un accès à Internet</h3>
              <p>D’un ordinateur ou d’un cellulaire, une connexion internet est primordiale pour le bon déroulement de vos activités sur la plateforme Tiggidoo.</p>
            </div>
          </Col>
          <Col md="6" lg={true}>
            <div>
              <img src="images/charte-qualite-menage.png" />
              <h3>Le respect de notre charte de qualité</h3>
              <p>Afin d’offrir un service impeccable à chaque client, vous devez vous engager à respecter nos conditions générales, les termes de chaque prestation et notre charte de qualité.</p>
            </div>
          </Col>
        </Row>        
        <Button variant="outline-secondary" size="lg">DEVENIR PRO</Button>

        {/* SECTION 8 */}
        <h1>Les questions que les professionnels se posent</h1>
        <h2>What things are covered in support?</h2>
        <p>Ut recalcitrantes et rebellis quod tenus rerum tumore et per quid strepit custodiri : - Custodiri quid ut iusserim quodam postulat maiestati et tenus formidine - Inusitato incusat postulat ordo haec ignorare nos tumore incusat - Nos incusat inusitato ut recalcitrantes nimirum quod ignorare. Ut recalcitrantes et rebellis quod tenus rerum tumore et per quid strepit custodiri</p>

        <ul>
          <li>How many shortcakes/blocks are there in Saasland?</li>
          <li>Can I use all the Home page demos in a single website?</li>
          <li>What happens after my support is expired?</li>
        </ul>
        
        {/* SECTION 9 */}
        <Row>
          <Col lg={5}>
            <h1>Un service 100% humain</h1>
          </Col>
          <Col lg="7">
            <p>Vous avez besoin de quelques informations supplémentaires? N’hésitez surtout pas à nous poser vos questions, un humain vous répond avec rapidité et bonne humeur.</p>
            <Button variant="outline-secondary" size="lg">Contactez-nous</Button>
          </Col>
        </Row>
        {/* SECTION 10 */}

      </Container>

     </div>
  );
}

export default App;
