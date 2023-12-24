<?php

use Behat\Behat\Context\Context;
use Behat\Behat\Context\SnippetAcceptingContext;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;
use Behat\MinkExtension\Context\MinkContext;


/**
 * Defines application features from the specific context.
 */
class FeatureContext extends MinkContext implements Context
{
    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
    }

     /**
     * @Given Je suis un visiteur
     */
    public function jeSuisUnVisiteur()
    {
        $this->visit('http://localhost/testBd/');
    }

    /**
     * @When Je visite la page d'acceuil du site
     */
    public function jeVisiteLaPageDacceuilDuSite()
    {
       $this->visitPath('/');
    }

    /**
     * @Then Je devrais voir le feed Instagram incorporé
     */
    public function jeDevraisVoirLeFeedInstagramIncorpore()
    {
        $this->assertPageContainsText('Instagram');
    }

    /**
     * @When Je visite le site
     */
    public function jeVisiteLeSite()
    {
        $this->visitPath('/');
    }

    /**
     * @When Je fais défiler la page vers le bas
     */
    public function jeFaisDefilerLaPageVersLeBas()
    {
        $this->visitPath('/#colophon');
    }

    /**
     * @Then Je devrais voir toutes les informations disponibles
     */
    public function jeDevraisVoirToutesLesInformationsDisponibles()
    {
        $infos = array ( 'épreuves', 'inscriptions', 'contact',
        'village','éco-responsabilité', 'merci à eux', 'médias',
    'triathlon', 'swimrun', 'aquathlon', 'pratique', 'accès', 'hébergement');

        foreach($infos as $info){
            $this->assertPageContainsText($info);
        }
    }

    /**
     * @When Je clique sur le menu de navguation :arg1
     */
    public function jeCliqueSurLeMenuDeNavguation()
    {
        $path = '//a[contains(@href, "?page_id=596")]';
        $moreInfos = $this->getSession()->getPage()->find('xpath', $path);
        $moreInfos->click();
    }

        /**
     * @Then Je devrais être redirigé vers la section des informations de la page
     */
    public function jeDevraisEtreRedirigeVersLaSectionDesInformationsDeLaPage()
    {
        $expectedUrl = 'http://localhost/testBd/?page_id=596';

        $this->assertSession()->addressEquals($expectedUrl);
    }


    /**
     * @When Je clique sur le menu de naviguation :arg1
     */
    public function jeCliqueSurLeMenuDeNaviguation($arg1)
    {
        $path = '//a[contains(@href, "?page_id=596")]';
        $moreInfos = $this->getSession()->getPage()->find('xpath', $path);
        $moreInfos->click();
    }

    /**
     * @Then Je devrais voir la liste des cours disponibles
     */
    public function jeDevraisVoirLaListeDesCoursDisponibles()
    {
        $infos = array('triathlon', 'swimrun', 'aquathlon');
        foreach($infos as $info){
            $this->assertPageContainsText($info);
        }
    }

    /**
     * @When Je visite une page qui n'existe pas
     */
    public function jeVisiteUnePageQuiNexistePas()
    {
        $this->visitPath('/une-page-qui-nexiste-pas');
    }

    /**
     * @Then Je devrais recevoir une réponse avec un code d'erreur :arg1
     */
    public function jeDevraisRecevoirUneReponseAvecUnCodeDerreur($arg1)
    {
        $expectedStatusCode = (int) $arg1;
        $actualStatusCode = $this->getSession()->getStatusCode();

        if($actualStatusCode !== $expectedStatusCode){
            throw new \RuntimeException(
                sprintf('Excpted status code %d but received %d', $expectedStatusCode, $actualStatusCode)
            );
        }
    }
}
