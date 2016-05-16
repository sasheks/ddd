<?php
/**
 * Created by PhpStorm.
 * User: aleks
 * Date: 5/16/2016
 * Time: 5:03 PM
 */

class Aleks_Sort_IndexController extends Mage_Core_Controller_Front_Action
{
    public function indexAction()
    {
        $this->loadLayout(array('default'));
        $this->renderLayout();
    }
}