<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    
    // Tabela que guarda os 'likes' dos usuários
    public function up()
    {
        Schema::create('comment_user', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('comment_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('comment_user',function(Blueprint $table)  {
            $table->foreign('comment_id')->references('id')->on('comments')->onDelete('cascade');
        });
        Schema::table('comment_user',function(Blueprint $table)  {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comment_user');
    }
}
