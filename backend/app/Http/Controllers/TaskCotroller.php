<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TaskCotroller extends Controller
{
    // public function __construct()
    // {
    //     /* $this->middleware("auth"); */
    //     $this->middleware("auth.revisor");
    // }

    public $due_date;
    public $note;
    public $reminder_date;
    public $reminder_hour;

    public function setReminder(Request $request, $id)
    {
        $obj = [
            "uno" => 1,
            "due" => 2,
            "tre" => 3,
            "cinque" => 5,
            "settimana" => 7,
        ];

        $reminder_at = $request->reminder;
        
        foreach ($obj as $key => $value) {
            
            if ($reminder_at == $key && $reminder_at != null) {
                $days = $obj[$key];
                $reminder_at = Carbon::create(now()->addDays($days));
                $scadenza = $request->scadenza_del_compito;
                
                // $date = date('y-m-d', strtotime($reminder_at));
                $task = Task::create([
                    "reminder_at" => $reminder_at,
                    "ricorsi_id" => intval($id),
                    "scadenza_del_compito" => $scadenza,
                    "descrizione_compito"=>$request->descrizione_compito,
                ]);
                

                if(!$task){
                    return response()->json([
                        'success' => false,
                        'message' => "The task was not created 1!",
                    ], 404);
                } else {
        
                    return response()->json([
                        'success' => true,
                        'message' => 'Thank you, the task is been assigned!',
                        'task'=> $task,

                    ], 200);
                }     
            }
            
        }
        return response()->json([
            'success' => false,
            'message' => "The task was not created!2",
        ], 404);
       
    }

    public function deleteTask($id) {
        
        $task = Task::find($id);
        
        $ricorsi_id = $task->ricorsi_id;

        $task->delete();
        
        return redirect("/detail_ricorso/" . $ricorsi_id)->with("id", $ricorsi_id);
    }
}
