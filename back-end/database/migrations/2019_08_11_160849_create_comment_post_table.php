<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentPostTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    // Tabela que guarda a associação entre Post e Comentário
    public function up()
    {
        Schema::create('comment_post', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('comment_id')->unsigned();
            $table->bigInteger('post_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('comment_post',function(Blueprint $table)  {
            $table->foreign('comment_id')->references('id')->on('comments')->onDelete('cascade');
        });
        Schema::table('comment_post',function(Blueprint $table)  {
            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comment_post');
    }
}
