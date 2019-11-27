<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuctionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auctions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('start_bid');
            $table->string('last_bid')->nullable();
            $table->string('bidAmount');
            $table->dateTime('time_start');
            $table->dateTime('time_end');
            $table->string('seller');
            $table->string('winner')->nullable();
            $table->smallInteger();
            $table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('auctions');
    }
}
