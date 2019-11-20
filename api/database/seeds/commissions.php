<?php

use Illuminate\Database\Seeder;

class commissions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('commissions')->insert([	 
			'fee' => 3,
        ]);
    }
}
