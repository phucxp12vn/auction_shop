<?php

use Illuminate\Database\Seeder;

class admin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admin')->insert([	 
			'username' => 'Sang',
            'password' => md5('a3'),
			'email' => 'sang_admin@gmail.com'		 
		]);
    }
}
