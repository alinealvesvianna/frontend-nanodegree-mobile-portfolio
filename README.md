
# Website Performance Optimization portfolio project

Descrição do projeto
--------------
Este projeto tem como objetivo refatorar o código fornecido pela Udacity, otimizando os caminhos críticos de renderização. A pontuação no PageSpeed Insights deve ser de no mínimo 90 para mobile e desktop. Além disso, o frame rate da animação quando é feito scroll na página views/pizza.html deve ser
de 60fps. E o tempo de redimensionamento das pizzas deve ser menor que 5ms.

## Otimizações Feitas
* Aumentei a pontuação do PageSpeed Insights de 20 no mobile para 92, e no desktop de 40 para 95.
* Configurei o Task Runner Grunt para:
  * Criar imagens responsivas para 3 tipos de resoluções diferentes : Small, Medium e Large;
  * Minimizar imagens geradas para os 3 tipos de resoluções;
  * Minimizar arquivos js, css e html;
  * Fazer replace de arquivo css crítico na página (Internal Style Sheet / Css Incorporado);
  * Criar e deletar pasta de deploy.
* Substitui propriedades css que exigiam recalcular o valor do layout para criar animações. Ex:  position: left para transform: translateX;
* Refatorei funções que exigiam muito processamento de renderização, e faziam cálculos complexos. Ex:. utilizando programação dinâmica, onde calculo antecipadamente valores possíveis e guardo em um array, sem precisar recalcular a posição de cada objeto ao scrollar a página.
* Utilizei media query link para carregar somente a folha de estilo necessária para cada tipo de mídia.


## Visualizar o Projeto

Para visualizar o projeto corretamente, faça o seguinte:

1- Instale os pacotes de dependência do projeto, navegando até a pasta e executando o npm com os seguintes comandos:

```
$> cd /path/to/frontend-nanodegree-mobile-portfolio
$> npm install
```

  * Para que o Grunt posso rodar corretamente suas tarefas, talvez você precise instalar na sua máquina o ImageMagick para redimensionar as imagens. O passo a passo esta nesse [repositório](https://github.com/andismith/grunt-responsive-images).

2- Depois de instalar os pacotes, execute o grunt para gerar a pasta "dist",
onde estará o código otimizado e com os caminhos corretos para o projeto funcionar corretamente.

  ``
  $> grunt
  ``

3-  Depois de concluídas as etapas 1 e 2, abra o browser e acesse o projeto pela pasta relativa a dist.

  * caminhoDoProjeto/dist/index.html
  * caminhoDoProjeto/dist/views/pizza.html
