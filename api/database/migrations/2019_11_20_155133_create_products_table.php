<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('auction_id');
            $table->foreign('auction_id')->references('id')->on('auctions');
            $table->string('name');
            $table->string('picture')->nullable();
            $table->string('price');
            $table->string('description')->nullable();
            $table->string('brand')->nullable();
            //$table->string('category')->nullable();
            $table->string('status');
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
        Schema::dropIfExists('products');
    }
}
