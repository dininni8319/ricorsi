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
        
        $scadenza = $request->scadenza_del_compito;

            if ($reminder_at) {
                // dd($scadenza, 'testando la scadenza');
                $days = $obj[$reminder_at];
                $reminder_at = Carbon::create(now()->addDays($days));
              
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
            } else {
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

                    ], 201);
                }    
            }
            
        return response()->json([
            'success' => false,
            'message' => "The task was not created!2",
        ], 404); 
    }

    public function allTasks($id) {
        $tasks = Task::where('ricorsi_id', $id)->get();
        
        if(!$tasks){
            return response()->json([
                'success' => false,
                'message' => "The tasks were not found!",
            ], 404);
        } else {
           
            return response()->json([
                'success' => true,
                'message' => 'Success, here are all the tasks!',
                'tasks'=> $tasks,
            ], 200);
        }     
    }

    public function deleteTask($id) {
        if(!$id){
            return response()->json([
                'success' => false,
                'message' => "The tasks were not found!",
            ], 404);
        } else {
            $task = Task::find($id);
            $task->delete();
           
            return response()->json([
                'success' => true,
                'message' => 'Success, the task is been deleted!',
                'task'=> $task,
            ], 200);
        }     
    }
}
