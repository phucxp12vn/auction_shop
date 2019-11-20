<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(auction_users::class);
        $this->call(admin::class);
        $this->call(auctions::class);
        $this->call(products::class);
        $this->call(categories::class);
        $this->call(commissions::class);
    }
}
