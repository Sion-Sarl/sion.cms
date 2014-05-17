<?php

class AdminControllerTest extends TestCase {

	/**
	 * A basic functional test example.
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

}
