angular.module('meuApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            abstract: true,
            templateUrl: 'app/views/partials/comHeaderFooterEMenu.html', // Template com header, sidebar e footer
        })
        .state('main.home', {
            url: '/',
            templateUrl: 'app/views/home.html', // Template da dashboard
            controller: 'testeController' // Controller para a dashboard
        })
        .state('main.criarUsuario', {
            url: '/usuarios/criar',
            templateUrl: 'app/views/criarUsuarios.html', // Template da dashboard
            controller: 'criarUsuariosController' // Controller para a dashboard
        })
        .state('main.primeiroExercicio', {
            url: '/exercicios/primeiro',
            templateUrl: 'app/views/exercicios/primeiro.html', // Template da dashboard
            controller: 'primeiroController' // Controller para a dashboard
        })
        .state('main.calculadoraExercicio', {
            url: '/exercicios/calculadora',
            templateUrl: 'app/views/exercicios/calculadora.html', // Template da dashboard
            controller: 'calculadoraController'
        })
        // .state('login', {
        //     url: '/login',
        //     templateUrl: 'app/partials/login.html', // Apenas um conteúdo sem partials
        //     controller: 'LoginController' // Controller para o login
        // })
        // .state('main.produtos', {
        //     url: '/produtos',
        //     templateUrl: 'app/partials/produtos.html', // Outra página que usa o layout com partials
        //     controller: 'ProdutosController'
        // });
        ;
});