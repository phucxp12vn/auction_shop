<?php

use Illuminate\Database\Seeder;

class auction_users extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('auction_users')->insert([
 
			//'user_id' => 'admin',
			 
			'priority' => 2,			 
			'user_name' => 'sang',
			'user_password' => md5('a3'),
			'user_email' => 'sang@gmail.com',
			'user_address' => '139/8a trần hưng đạo',
			'user_phoneNumber' => '01232755345',
			'user_gender' => 'Name'			 
		]);
    }
}
