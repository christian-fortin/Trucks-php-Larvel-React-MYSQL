<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // This is basically where I defined the schema and the requirements for the model. Its the Blue Print!
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->string('trip_name')->unique();
            $table->string('vin_number');
            $table->float('distance');
            $table->integer('tolls');
            $table->integer('foodBudget');
            $table->integer('wearAndTear');
            $table->integer('misc');
            $table->string('startingPoint');
            $table->string('endingPoint');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trips');
    }
};
