<?php

class AdminControllerTest extends TestCase {

	/**
	 * Admin test index
	 *
	 * @return void
	 */
	public function testIndex()
	{
        $uri =  Config::get("admin::admin.uri");
	    
        $this->assertNotNull($uri);
        
		$crawler = $this->client->request('GET',$uri);
        
		$this->assertTrue($this->client->getResponse()->isOk());
	}
    public function testLogin()
    {
        
    }

}
