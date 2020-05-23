<?php

$container['view'] = function ($container) {
    
    $view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
    'cache' => false
    ]);

    // Instantiate and add Slim specific extension
    $router = $container->get('router');
    $uri = \Slim\Http\Uri::createFromEnvironment(new \Slim\Http\Environment($_SERVER));
    $view->addExtension(new \Slim\Views\TwigExtension($router, $uri));

    return $view;
};
$container['UserController'] = function($container) {
    return new \App\Controllers\UserController($container);
};
$container['RoleController'] = function($container) {
    return new \App\Controllers\RoleController($container);
};
$container['PermissionController'] = function($container) {
    return new \App\Controllers\PermissionController($container);
};
$container['LoaderController'] = function($container) {
    return new \App\Controllers\LoaderController($container);
};