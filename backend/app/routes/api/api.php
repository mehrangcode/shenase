<?php
use App\Middleware\AccessMiddleware;


$app->get('/api', function ($request, $response, $args) {
    return $response->withStatus(200)->write('Hello From API!');
});

//User Controller

$app->get('/api/token', "UserController:token");
$app->get('/api/users', "UserController:index");
$app->post('/api/users/register', "UserController:register");
$app->post('/api/users/login', "UserController:login");
$app->get('/api/users/getinfo', "UserController:get_user_data");
$app->get('/api/users/getPanelData', "UserController:getUserData");

//Role
$app->get('/api/role', "RoleController:index");
$app->get('/api/role/{roleId}', "RoleController:findOne");
$app->post('/api/role', "RoleController:create");
$app->put('/api/role/{roleId}', "RoleController:update");
$app->delete('/api/role/{roleId}', "RoleController:delete");
$app->get('/api/role/{roleId}/Permissions', "RoleController:getRolePermissions");
$app->put('/api/role/{roleId}/Permissions', "RoleController:setPermissionsToRole");

//Permission
$app->get('/api/permission', "PermissionController:index");
$app->get('/api/permission/{permissionId}', "PermissionController:findOne");
$app->post('/api/permission', "PermissionController:create");
$app->put('/api/permission/{permissionId}', "PermissionController:update");
$app->delete('/api/permission/{permissionId}', "PermissionController:delete");

//userRole
$app->post('/api/setRolesTo/{userId}', "UserController:setRolesToUser");

//Gallery
$app->post('/api/gallery/createfolder', "LoaderController:createFolder");
$app->post('/api/uploader', "LoaderController:uploader");
$app->post('/api/fileuploader', "LoaderController:fileUploader");
$app ->post("/api/loader", "LoaderController:loader");

//Template
$app->get('/api/templates', "TemplateController:index");
$app->get('/api/templates/{templateId}', "TemplateController:findOne");
$app->post('/api/templates', "TemplateController:create");
$app->put('/api/templates/{templateId}', "TemplateController:update");
$app->delete('/api/templates/{templateId}', "TemplateController:delete");