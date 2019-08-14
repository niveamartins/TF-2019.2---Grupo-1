<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// importações necessárias ao funcionamento da Controller do Passport
use Auth;
use App\User;
use DB;

class PassportController extends Controller
{
    //
    // definição da variável de sucesso
    public $successStatus = 200;

    // função para realizar a entrada do usuário no sistema
    public function login() {
        if (Auth::attempt(['name' => request('name'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        }
        else {
            return response() -> json (['error' => 'Unauthorized'], 401);
        }
    }

    // função para cadastrar um novo usuário
    public function register(Request $request) {
        $validator = Validator::make($request -> all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator -> fails()) {
            return response()->json(['error' => $validator -> errors()], 401);
        }
        $newUser = new User;
        $newUser->name = $request->name;
        $newUser->email = $request->email;
        $newUser->password = bcrypt($request->password);
        $newUser->save();
        // linhas trocadas pois é necessário ter o usuário para se criar a sua respectiva token
        $success['token'] = $newUser->createToken('MyApp')->accessToken;
        $success['name'] = $newUser->name;

        return response()->json(['success' => $success], $this->successStatus);
    }

    // função para recuperar informações de um usuário logado
    public function getDetails() {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus); //retorna as informações do usuário
        logado
    }

    // função para editar as informações de um usuário já existente
    public function update(Request $request) {
        // para implementar
    }

    // função para realizar a saída do usuário do sistema
    public function logout() {
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update([
            'revoked' => true
        ]);
        $accessToken->revoke();
        return response()->json(null, 204);
    }
}
