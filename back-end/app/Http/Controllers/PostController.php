<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Validator;

use App\Post;

class PostController extends Controller
{
    public function create(Request $request){

//$post = Auth::user();
//if ( $user ) {
$post = new Post;

    $post->title = $request->title;
    $post->text = $request->text;

    $file = $request->file('image');

    $filename = 'image.'.$file->getClientOriginalExtension();

        If (!Storage::exists('localPhotos/'))
    			Storage::makeDirectory('localPhotos/',0775,true);

                $validator = Validator::make($request->all(), [
                'image' =>'required|file|image|mimes:jpeg,png,gif,webp|max:2048'
                ]);

                if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
                }


                $path = $file->storeAs('localPhotos', $filename);
                $post->image = $file;

                $post->save();

    // return response()->download($path, $post->image);



        return response()->json( [
            "message" => "Post criado com sucesso!",
            //"data" => $post
        ], 200 );

//    } else {

        //return response()->json( [
    //        "message" => "Não autorizado!",
        //    "data" => null
        //], 401 );

    //}
}

public function edit(Request $request, $id)
{
    // $user = Auth::user();

    // if ( $user ) {

        $post = Post::findOrFail($id);

        if($request->title) {
            $post->title = $request->title;
        }

        if($request->text) {
            $post->text = $request->text;
        }

        if($request->image){
        $file = $request->file('image');

        $filename = 'image.'.$file->getClientOriginalExtension();

            If (!Storage::exists('localPhotos/'))
        			Storage::makeDirectory('localPhotos/',0775,true);

                    $validator = Validator::make($request->all(), [
                    'image' =>'required|file|image|mimes:jpeg,png,gif,webp|max:2048'
                    ]);

                    if ($validator->fails()) {
                    return response()->json(['error' => $validator->errors()], 400);
                    }


                    $path = $file->storeAs('localPhotos', $filename);

                    $post->image = $file;
                     //$post->image = $request->image;
                }
         $post->save();

        return response()->json(
            [
            "message" => "Post editado com sucesso!",
            // "data" => $post
        ], 200 );

    // } else {
    //
    //     return response()->json( [
    //         "message" => "Não autorizado!",
    //         "data" => null
    //     ], 401 );

    // }
 }

 public function destroy($id)
 {

     //$user = Auth::user();

     //if ( $user ) {

         $post = Post::find($id);
         $post->destroy($id);

         return response()->json( [
             "message" => "Post deletado com sucesso!",
             //"data" => $reserva
         ], 200 );
     //
     // } else {
     //
     //     return response()->json( [
     //         "message" => "Não autorizado!",
     //         "data" => null
     //     ], 401 );
     //
     // }
 }



     public function index()
        {

          $post = Post::all();
          return response()->json( [
              "message" => "Busca concluída!",
              //"data" => $post
          ], 200 );

      // } else {
      //
      //     return response()->json( [
      //         "message" => "Não autorizado!",
      //         "data" => null
      //     ], 401 );
      //
      // }
        }

        public function show($id){
     $post = Post::find($id);
     return response()->json( [
         "message" => "Busca concluída!",
         //"data" => $post
     ], 200 );

 // } else {
 //
 //     return response()->json( [
 //         "message" => "Não autorizado!",
 //         "data" => null
 //     ], 401 );
 //
 // }
}


}
