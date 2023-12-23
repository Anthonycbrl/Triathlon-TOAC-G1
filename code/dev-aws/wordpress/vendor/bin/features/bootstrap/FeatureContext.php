<?php

use Behat\Behat\Context\Context;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;
use Behat\Behat\Tester\Exception\PendingException;

use Behat\Behat\Hook\Scope\AfterStepScope;
use Behat\Behat\Hook\Scope\BeforeStepScope;
use Behat\MinkExtension\Context\MinkContext;
use Behat\MinkExtension\Context\RawMinkContext;

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
     * @When je fais défiler le site
     */
    public function jeFaisDefilerLeSite()
    {
        # Défile jusqu'au pied de page
        $this->visitPath('/#colophon');
    }

    /**
     * @Then je peux consulter les informations
     */
    public function jePeuxConsulterLesInformations()
    {   
        $infos = array('inscriptions', 'épreuves', 'triathlon', 'aquathlon', 'swimrun', 'pratique', 'accès', 'hébergement', 'village', 'éco-responsabilité', 'merci à eux', 'médias', 'contact');
        foreach($infos as $info){
            $this->assertPageContainsText($info);
        }

        # Icones facebook et instagram
        $labels = array('Facebook', 'Instagram');
        // Trouver l'élément avec l'attribut aria-label
        foreach($labels as $label){
            $this->assertElementOnPage("a[aria-label='{$label}']");
        }
    }

    /**
     * @Given je suis sur la page d'accueil
     */
    public function jeSuisSurLaPageDaccueil()
    {   
        # On se place dans la home page
        $this->visitPath('/');
        # Vérification
        $this->assertHomepage();
    }

    /**
     * @When je défile jusqu'a la section Instagram
     */
    public function jeDefileJusquaLaSectionInstagram()
    {
        # Défile jusqu'au pied de page
        $this->visitPath('/#colophon');
        # Vérifie s'il y a marqué Instagram
        $this->assertPageContainsText('Instagram');
    }

    /**
    * @Then je peux voir le feed Instagram :arg1
    */
    public function jePeuxVoirLeFeedInstagram($arg1)
    {
        # Vérifie s'il y a l'iFrame du feed Instagram
        $this->assertElementOnPage("iframe[src='{$arg1}']");
    }

    /**
     * @Given je suis sur la page des courses
     */
    public function jeSuisSurLaPageDesCourses()
    {
        $this->visitPath('/?page_id=596');
    }

    /**
     * @When je clique sur une course
     */
    public function jeCliqueSurUneCourse()
    {
        $moreInfos = $this->getSession()->getPage()->find('css', 'a[href*="?page_id=973"]');

        if (null === $moreInfos) {
            throw new \InvalidArgumentException(sprintf('Cette course n\'existe pas'));
        }

        $moreInfos->click();
    }

    /**
     * @Then je peux voir les informations de la course
     */
    public function jePeuxVoirLesInformationsDeLaCourse()
    {
        $this->assertPageContainsText('Inscriptions');
    }

    /**
     * @Given je suis sur n'importe quelle page
     */
    public function jeSuisSurNimporteQuellePage()
    {
        # On se place dans la home page ou n'importe quelle page
        $this->visitPath('/');
        # Vérification
        $this->assertHomepage();
    }

    /**
     * @When je clique sur les menus
     */
    public function jeCliqueSurLesMenus()
    {
        $moreInfos = $this->getSession()->getPage()->find('css', 'a[href*="?page_id=596"]');
        
        if (null === $moreInfos) {
            throw new \InvalidArgumentException(sprintf('Cannot find link'));
        }

        $moreInfos->click();
    }

    /**
     * @Then je suis redirigé vers les informations de la page
     */
    public function jeSuisRedirigeVersLesInformationsDeLaPage()
    {
        $expectedUrl = $this->locatePath('/?page_id=596');
        $actualUrl = $this->getSession()->getCurrentUrl();

        if ($expectedUrl !== $actualUrl) {
            throw new \RuntimeException("Expected to be redirected to $expectedUrl, but got $actualUrl.");
        }
    }
}
