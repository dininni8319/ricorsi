<?php

namespace App\Actions;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RicorsoAction 
{
  public function handleResponse($value, $unSuccessMessage = null, $message = null, $id = null)
  {
    if(!$value){
      return response()->json([
       'success' => false,
       'message' => $unSuccessMessage,
      ], 404);
    } else {
      
      return response()->json([
        'success' => true,
        'data' => $value,
        'message' => $message,
        'id' => $id ?? '',
      ], 200);
    }   
  }
}
