<?php

use Illuminate\Database\Seeder;

class users extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
 
			//'user_id' => 'admin',
			 
			'power' => 2,			 
			'user_name' => 'Sang',
            'user_password' => md5('a3'),
            'user_fullName' => 'Phan Tan Sang',
			'user_email' => 'sang@gmail.com',
			'user_address' => '139/8a trần hưng đạo',
			'user_phoneNumber' => '01232755345',
			//'user_gender' => 'Nam'			 
		]);
    }
}
