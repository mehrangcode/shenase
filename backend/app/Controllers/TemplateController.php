<?php

namespace App\Controllers;
use \App\Models\Template;

class TemplateController extends Controller
{
    

    public function creatorId($request) {
        $token = $request->getAttribute("jwt");
        return $token['context']->id;
    }

    public function index ($request, $response) {
        $data = Template::all();
        return $response->withStatus(200)->withJson($data);
    }

    public function findOne ($request, $response, $templateId) {
        $data = Template::where('id', $templateId)->first();
        if(!$data){
            return $response->withStatus(400)->withJson(["message" => "template not found"]);
         }
        return $response->withStatus(200)->withJson($data);
    }
    public function create ($request, $response) {
        Template::create([
            'title'=> $request->getParam('title'), 
            'description'=> $request->getParam('description'),
            'status' => $request->getParam('status') ? $request->getParam('status') : 1,
            'content' =>  $request->getParam('content'),
            'user_id' => $this->creatorId($request)
        ]);
        return $response->withStatus(200)->withJson(["message" => "Create template Successful"]);
    }

    public function update ($request, $response, $templateId) {
            $template = Template::where('id', $templateId)->first();
            if(!$template){
                return $response->withStatus(400)->withJson(["message" => "template not found"]);
            };
            $template->title = $request->getParam('title');
            $template->description = $request->getParam('description');
            $template->content = $request->getParam('content');
            $template->status = $request->getParam('status') ? $request->getParam('status') : 1;
            $template->save();
        return $response->withStatus(200)->withJson(["message" => "template was updated Successful"]);
    }
    public function delete ($request, $response, $templateId) {
            $template = Template::where('id', $templateId)->first();
            if(!$template){
                return $response->withStatus(400)->withJson(["message" => "template not found"]);
            };
            $template->delete();
        return $response->withStatus(200)->withJson(["message" => "template was deleted Successful"]);
    }
    

}