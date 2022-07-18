<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Users extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('name');
            $table->unsignedInteger('role');
            $table->string('phone_number');
            $table->string('address');
            $table->string('token');
            $table->timestamps();
        });

        Schema::create('roles', function (Blueprint $table) {
            // $table->unsignedInteger('role_id');
            // $table->foreign('role_id')->references('role')->on('users');
            $table->foreignId('role_id')->constrained('users');
            $table->string('role_name');
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
        Schema::dropIfExists('roles');
        Schema::dropIfExists('users');
    }
}
