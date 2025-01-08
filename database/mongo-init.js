db = db.getSiblingDB('vavatips');

db.users.insertMany([
  {
    id: '61a3ae838fe6df463e7bc1cf',
    username: 'developer',
    password: '$2b$10$x9kHitv7zcZneMo3p/sz7u328xbhWkgjYfFrNr4NzZIiMAdK1bydK',
    createdAt: new Date('2021-11-28T16:29:55.475Z'),
    updatedAt: new Date('2021-11-28T16:29:55.475Z'),
    __v: 0,
  },
]);

db.reports.insertMany([
  {
    id: '61590f04f294ee0162a18e00',
    email: 'userTest@userTest.com',
    description: 'Lorem Ipsun',
    screenHeight: 728,
    screenWidth: 1366,
    createdAt: new Date('2021-10-03T02:01:40.423Z'),
    updatedAt: new Date('2021-10-03T02:01:40.423Z'),
    __v: 0,
  },
]);

db.posts.insertMany([
  {
    tags: {
      moment: 'DepoisDoPlant',
      difficult: 'Facil',
      ability: 'Nanoenxame',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Killjoy',
    },
    id: '61590639cd9902fad4021cc5',
    title: 'Pixel de KillJoy',
    description:
      'Você pode faze-lo para impedir um defuse, em uma situação onde outra killjoy conseguiu dominar o bomb e irá desarmar a spyke',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'ca474122-4212-4fa9-bd8b-f56f9256a8ba',
        description: 'Pixel para o pós plant',
        image: '1633270484252-51126504-a63b-4076-a67d-4be5c3247d1a',
      },
      {
        id: '235b3af4-d0e5-42e0-90af-96f6b81a1710',
        description: 'Para isso você precisará de fazer o plant default, entre as caixas',
        image: '1633270519745-4fc124c1-7f9b-4e10-9202-3a45382fdddc',
      },
      {
        id: '4d57b61c-fd68-494b-b450-5e3f41f656cf',
        description: 'Você precisará estar nesta posição, atrás da caixa',
        image: '1633270505433-a9b7ffdb-7a8e-4bdb-91b5-29eebef04d38',
      },
      {
        id: '0903a9f2-49ea-4bf4-bcdc-1be74a22bd51',
        description: 'Alinhe a Mira com a linha da caixa',
        image: '1633270529334-444eb66f-69b1-4c4c-8b6d-fe6b32496713',
      },
      {
        id: '3fedf2c5-5d4e-4187-9808-c2f31cbffa80',
        description: 'Mire na ponta do risco dessa explosão no céu',
        image: '1633270538939-b8958217-26f9-40a8-8b6e-3043e44a4a0a',
      },
      {
        id: 'b6110407-68e8-46c9-9a85-73cc4ae0334f',
        description: 'As granadas deverão cair em cima do plant default da spyke',
        image: '1633270549611-11e0f76a-90bf-4476-8ee3-c87606c52e7f',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:39:17.116Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'hardcore',
      ability: 'Nanoenxame',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Killjoy',
    },
    id: '6159086acd9902fad4021ce0',
    title: 'Como tirar os inimigos dessa posição',
    description: 'Muitas vezes alguém irá incomodar bastante dessa posição, aprenda a tira-lo de lá!',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '29ba8f2d-c4f5-4834-a1c0-e6e90b104070',
        description:
          'Sempre tem alguém que fica nesse ponto, muitas vezes é até a killjoy do outro time, pois bem, você conseguirá tira-la dai!',
        image: '1633270634477-40084d75-2bcb-4986-b7e1-395004b98125',
      },
      {
        id: '4bcc2b9e-9b54-4343-a6a2-0beea91ad5d0',
        description: 'Primeiramente, você precisa de estar na entrada do bomb A de Ascent, aqui!',
        image: '1633270649532-5c241959-1083-4b30-86e4-2aa927ca3e16',
      },
      {
        id: '89cfc477-d3a5-40e1-bfaa-dfd8e924abb4',
        description: 'Olhe para baixo que terá essa tampa de boieiro, aponte a mira para o meio dela',
        image: '1633270657440-d88e8686-400f-4c6d-babd-2975e58266bd',
      },
      {
        id: '4511a862-7878-4b55-ac16-0912af7d3cdc',
        description:
          'Olhe para o céu, e deixe a mira um pouco acima da quarta telha, conforme o exemplo. (Se você olhar no minimapa, a quarta telha fica bem na direção que queremos acertar)',
        image: '1633270669469-357519cc-f7f3-47ab-a8ba-7d1d097dd138',
      },
      {
        id: 'bb46975e-5966-4022-8e00-92e500d4d929',
        description:
          'Agora de um pulinho, e quando estiver chegando no limite do pulo jogue a granada. Ela tem que ser jogada nos pontos altos do pulo',
        image: '1633270684290-acd8f2e8-6e03-495d-ad8c-1467a4d5e27a',
      },
      {
        id: '8704dd18-83f6-4752-9285-1d143b2ce470',
        description: 'Ela deverá cair bem aqui, ai é só aciona-las!',
        image: '1633270692143-9148edcd-d7f8-4c10-bf56-36b89786705a',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:44:05.273Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Nanoenxame',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Killjoy',
    },
    id: '61590932cd9902fad4021ce4',
    title: 'Como tirar inimigos dessa posição',
    description: 'Essa é uma das regiões que sempre terá alguém, as vezes de Operator',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '59d6f52c-af63-400a-841e-969f2c7ca7d4',
        description:
          'Essa é outra posição que incomoda, e se o seu time estiver com problemas de smokes, você poderá ajudar o entre do seu time (Você pode combar granadas)',
        image: '1633270773432-1ebf8a61-d054-42b8-a770-ad730f086ce1',
      },
      {
        id: '22f285e2-6ebb-4860-9c9d-56b3a11c48b5',
        description:
          'Você precisará de dominar essa região, e então encostar na parede e apontar sua mira para o meio da parede, conforme mostrado',
        image: '1633270779940-ced15901-95bc-40dc-89f4-1edfa1b0e8ae',
      },
      {
        id: 'c19987f1-1e74-4f6d-ab32-aff2a81df0e5',
        description: 'Mire no meio da janela, e jogue a granada',
        image: '1633270787090-78eb77f7-45ed-4b5b-b9bb-8ed2f0f6f2d2',
      },
      {
        id: 'eadb9d25-d127-452e-a8d6-8842766018ad',
        description: 'Quem ficar ai vai levar!',
        image: '1633270793502-04c02346-eb91-47a1-8fe8-a05b663479cb',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:43:44.283Z'),
  },
  {
    tags: {
      moment: 'DepoisDoPlant',
      difficult: 'medio',
      ability: 'Nanoenxame',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'A',
      agent: 'Killjoy',
    },
    id: '6159c5a51775570b9c40611a',
    title: 'Como colocar as grandas neste ponto a distância',
    description:
      'As vezes você não conseguiu entrar ou até a outra killjoy usou a ultimate para dominar o bomb, nesse caso, é assim que você conseguirá jogar as granadas no plant padrão',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '8fc81375-42d2-4636-b9ff-b3c0ffb32801',
        description: 'Como impedir o desarme da spyke no plant padrão',
        image: '1633272952310-87a31a04-336a-49fe-b13f-0edc4c3a6400',
      },
      {
        id: '8e9940b2-2adc-43ba-9329-e85b485da8e7',
        description: 'Encoste na caixa verde, bem no ponto indicado',
        image: '1633272989328-be26fba1-1823-4183-9bf4-2e67de3204d1',
      },
      {
        id: 'f82ff979-7695-4b47-a355-59b4302f0f3e',
        description:
          'Coloque a mira nessa posição. Perceba que essa posição, peceba que ela é alinhada com o rachado mais alto e com a curva que a nuvem faz',
        image: '1633273042349-2d2ff178-a3fd-4764-81c4-1613466948b2',
      },
      {
        id: '58341921-2f46-44b8-b43c-cb01f2ab223b',
        description: 'As granadas deverão cair em cima da spyke',
        image: '1633273111119-1744cf58-9e09-46fc-a688-3a82cb970496',
      },
      {
        id: 'f88bb95d-4d74-433b-a6ea-9ced84ded8bf',
        description: 'Acione o mais rápido possível, para impedir que o inimigo consiga destrui-la',
        image: '1633273125115-ffb9e000-89a2-45de-95d8-3435b1fcaf5a',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:43:31.192Z'),
  },
  {
    tags: {
      moment: 'DepoisDoPlant',
      difficult: 'medio',
      ability: 'Nanoenxame',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Killjoy',
    },
    id: '6159c6611775570b9c40611e',
    title: 'After plant nas caixas',
    description: 'Como posicionar o nanoenxame no plant das caixas',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '82ab3f57-8e2f-4d37-8b89-a2adc871cfe0',
        description:
          'Esse píxel serve para quando você não conseguiu posicionar o nanoenxame no plant nas caixas e você precisou sair do bomb',
        image: '1633273277161-359f228a-8b52-4684-ae36-4c096e7f13a2',
      },
      {
        id: '7bbc93c8-7b48-4310-8a77-42a3a85c43ef',
        description: 'Encoste na caixa verde, nesse ponto',
        image: '1633273335533-900815d8-3c52-43b9-9242-a7866290c974',
      },
      {
        id: '2cc6152e-3ae1-4a7b-9e67-746a313848dd',
        description: 'Mire nessa rachadura no céu mais a direita bem na ponta',
        image: '1633273349294-b722c8cc-c74c-411d-b39c-e51e7c4f9383',
      },
      {
        id: '45ae2893-8fd4-4294-ba3b-e7d5ea1871e1',
        description: 'O nanoenxame deverá cair bem em cima da spyke',
        image: '1633273372065-56344b0f-d0bc-4186-86b7-a17a3ceddc47',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:43:14.907Z'),
  },
  {
    tags: {
      moment: 'DepoisDoPlant',
      difficult: 'medio',
      ability: 'Nanoenxame',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'A',
      agent: 'Killjoy',
    },
    id: '6159c7421775570b9c406122',
    title: 'Como posicionar o nanoenxame debaixo do bomb de forma a atingir os inimigos na parte de cima',
    description: 'Isso é muito útil quando seu time conseguiu entrar no bomb, e o time inimigo vem fazer o retake',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '3ebdacce-65a6-451f-9aa8-739e91765d19',
        description:
          'Esse píxel impede o inimigo de destruir o nanoenxame, possibilitando que você cause um grande dano nele caso ele tente vir pelo céu',
        image: '1633273465144-affc8dbc-896e-4743-83a3-82fcdb151830',
      },
      {
        id: '203e6be6-d26f-4261-8346-3e0535951350',
        description: 'Mire bem nessa região, você pode mirar um pouco mais a cima e jogar de perto a granada',
        image: '1633273566795-aaa5879f-d471-4946-9a7e-7daabd24b7f9',
      },
      {
        id: '6826e97c-52c3-426d-9771-abe2087669e2',
        description:
          'Mire bem nessa região e jogue a granada. quanto mais em cima a granada estiver, mais dano ela irá causar',
        image: '1633273518078-de9623a4-373b-4e6e-baad-4a15c5ba935b',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:44:24.730Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'hardcore',
      ability: 'Nanoenxame',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'Meio',
      agent: 'Killjoy',
    },
    id: '6159c83b1775570b9c406126',
    title: 'Como tirar esse ponto do time inimigo',
    description: 'Esse ponto sempre tem alguém esperando, algumas vezes de Operator',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'd4dc8371-bab5-4ee1-9fbc-cbd6614fc1a2',
        description: 'É bem comum os atacantes darem uma bisbilhotada nesse ponto, algumas vezes de Operator',
        image: '1633273683603-01854b9a-bece-473b-858b-1faab5cbec00',
      },
      {
        id: '8eb60b99-b595-49b2-aa4b-697b218a4949',
        description:
          'Você precisará de se posionar no meio, e mirar nessa região (você pode marcar no minimapa a posição desejada)',
        image: '1633273727177-a68353c9-2aa6-4ccb-beed-e093b78deab9',
      },
      {
        id: 'd8bd3efd-c34a-49e8-8094-76f22bf29729',
        description: 'Agora você vai correr até chegar nas escadinhas. Ao chegar você terá que dar um pulo',
        image: '1633273767426-f50524e4-0e74-4afa-8be2-f2c93e709c08',
      },
      {
        id: '997b6fe8-c4b0-435e-847e-7c91ce319d58',
        description:
          'No momento mais alto do pulo, você estará completamente exposto para a região do quadrado, e é nesse momento que você vai jogar a granada',
        image: '1633273807112-b1a052c1-e728-4a0c-8171-3432338599e1',
      },
      {
        id: '286ebe34-8628-4a20-bf7f-fc04740d1a66',
        description: 'Com um pouco de prática você vai conseguir tirar o inimigo de posição',
        image: '1633273843976-6707553b-02ce-421f-94e3-087efbfed60b',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:44:42.334Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Nanoenxame',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Killjoy',
    },
    id: '6159c92b1775570b9c40612a',
    title: 'Como acertar o time atacante na posição do quadrado',
    description: 'Esse píxel permitirá incomodar qualquer um que esteja na região do quadrado',
    userId: '615301f1b2f117e4b06db30e',
    imgs: [
      {
        id: '10057278-1fbc-4004-a361-b7746b893987',
        description:
          'Esse píxel incrível pode ser feito da região do mercado e pode tirar de posição alguém de operator mirando a varanda',
        image: '1633273936904-8629bd85-c9fa-495d-9199-e53f70d059b4',
      },
      {
        id: 'ea2c4403-e722-4bbf-8803-087cfafd220e',
        description: 'No mercado você precisará alinhar sua mira bem no meio da entrada. Não precisa ser perfeito ok',
        image: '1633273984572-853f0c73-fc15-4dcb-b5f5-041d15acd346',
      },
      {
        id: 'a58538f0-ae49-4d67-850a-6c4bb778af39',
        description:
          'Agora mire do lado da torre, sim, não tem um pixel exato, é um pouco do lado, sem encostar a torre',
        image: '1633274017431-7a5ea943-921a-4ba4-8c52-48b496b9b9e6',
      },
      {
        id: 'dec5653d-55ec-49c9-bf9e-0a140eabfbaf',
        description: 'Acione elas rapidamente',
        image: '1633274049798-5e41ed11-6625-4f15-bb9a-e06892462ba8',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T23:48:04.242Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Nanoenxame',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Killjoy',
    },
    id: '6159ca2b1775570b9c40612e',
    title: 'Dicas gerais de posicionamento de granadas',
    description: 'Quem incomodar os inimigos no seu bomb?',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '83d3de02-200e-4021-99fe-f1ccd0cdfcfe',
        description: 'Dicas de posicionamento de grandas no bomb B',
        image: '1633274187672-b0ff6b1d-a7e9-4559-bb60-23328437cf5d',
      },
      {
        id: 'd8c8e538-a9e7-4a74-81c0-27909d4a635e',
        description: 'Pouca gente olha nesse ponto na entrada, e ele atinge até quem esteja do outro lado da parede',
        image: '1633274208408-3dc9e60a-0d06-40ba-8164-7c8c80467174',
      },
      {
        id: '4da83d6f-218c-4957-be40-8b984c3e71ee',
        description: 'Esse é outro ponto difícil de ser notado',
        image: '1633274239709-547b3760-82cd-49ee-8a7c-31c7ee3de4fa',
      },
      {
        id: '16d64a1d-dd12-458c-ae08-a93755a0f044',
        description:
          'Esse ponto é muito roubado, praticamente imperceptível, e causa um bom dano a quem esteja entrando, você pode combar com o alarme robô para dobrar o dano',
        image: '1633274268635-1c0dd052-fb68-498d-83a7-d248964f4665',
      },
      {
        id: '8f7f43ea-0b4e-4ab3-b760-1206eca70365',
        description: 'Esse ponto em especial incomoda muito',
        image: '1633274317166-749e94b6-5769-4158-adc2-9910fb128d91',
      },
      {
        id: 'f673bb35-e0d4-4518-8d38-9e915096f879',
        description: 'Você também pode jogar uma granada dentro da caixa',
        image: '1633274356622-006f9977-71f0-465e-aedd-65753c0bc1dd',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:45:15.723Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'A',
      agent: 'Sova',
    },
    id: '6159cbca1775570b9c406132',
    title: 'Como spotar a entrada do bomb A',
    description: 'Como spotar a entrada do bomb A',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'c338aa01-ec80-43be-86b9-acdfa0609a1b',
        description: 'Com esse píxel você conseguirá spotar toda a região da entrada do bomb A',
        image: '1633274441399-fdb77429-fb39-4dd6-9c27-e4c841ce4d9f',
      },
      {
        id: 'e19de507-7565-4337-be71-63c5b83c09e1',
        description: 'Mire bem no meio dessa janela e dispare com força total',
        image: '1633274637159-40be621a-0ab1-4a16-b1e7-d22357586dde',
      },
      {
        id: '9c0476fe-cbd4-4f9a-a296-cb9fdd40dbc8',
        description:
          'Olha a janela ali em cima, isso permitirá spotar todo o time inimigo. Dica, se alguém do seu time for rushar e o time inimigo estiver destruindo sua flecha toda hora, jogue a flecha com ricochete no timing que o seu aliado avança ',
        image: '1633274673545-e5f418c1-b251-4efa-bab5-29841d418c89',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:45:32.923Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Sova',
    },
    id: '6159ccf61775570b9c406136',
    title: 'Conhece o spot girafa?',
    description: 'Esse spot permite pegar toda a região indicada',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'cca2bd99-d5d6-4155-98f1-9a08d4e8965b',
        description: 'Conhece o spot girafa? Esse spot pega toda essa região',
        image: '1633274978455-fd5778ae-a752-4905-bb71-0aa802f203e3',
      },
      {
        id: 'f6d5eb59-049a-4fc7-bce4-e0880d229aaa',
        description: 'Para faze-lo, encoste na parede, neste ponto',
        image: '1633275024010-9d44f274-5a89-4a49-8534-591b8081931e',
      },
      {
        id: '055a63dc-3b26-4ab0-86ee-dcd0e98c9285',
        description: 'Mire na girafa e disparece com força total',
        image: '1633275037633-a3d180c5-a3d1-4304-a328-642320ac5d25',
      },
      {
        id: '9a2f568b-f43b-4cdd-9257-f3c3e2350396',
        description: 'O spot girafa irá limpar toda essa região, permitindo seu time preocupar com menos lugares',
        image: '1633275065864-5942dec8-8738-44ff-9769-2a365bc01fc5',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:42:52.360Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'Meio',
      agent: 'Sova',
    },
    id: '6159cf541775570b9c40613a',
    title: 'Como spotar a região do meio e do mercado',
    description: 'Esse píxel é muito bom para ajudar o seu time a avançar pelo meio',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '39f6d107-9474-4eb1-9758-9d18db02dd1e',
        description: 'Spot que pega a região do meio e do mercado',
        image: '1633275509296-27d4e19c-8b11-4953-b769-610658200a75',
      },
      {
        id: '2b83139b-b7f9-454d-a57a-031d8fb31a27',
        description: 'Estando nessa região, encoste na parede a esquerda',
        image: '1633275532679-13e078f7-9945-4428-9463-702a1962731e',
      },
      {
        id: '63e47d0e-4e4f-4a5c-8115-ba6e2b8464ca',
        description:
          'Encostado na parede, abra o pixel até segunda janela, marque um ricochete e dispare com força total',
        image: '1633275644498-b332f81c-6b99-408f-bbf4-bcb1c007c782',
      },
      {
        id: '6ef64e3c-9daf-4da6-854f-4f8150dd0dba',
        description:
          'É uma boa ideia seu time avançar nesse momento, pois caso alguém esteja aqui, ou será spotado ou terá que destruir a flecha',
        image: '1633275692978-8879af91-07d1-466f-ad88-b8671f02f3be',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:42:28.715Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Sova',
    },
    id: '6159d0321775570b9c40613e',
    title: 'Como spotar inimigos entrando no bomb B',
    description:
      'Você pode combar esse spot com uma operator, Odin, Ares ou guardian, sempre atirando na região onde tem o cachorro',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'c8aed571-cac5-4158-939a-309c973b3fab',
        description: 'Essa flecha deverá spotar essa região',
        image: '1633275854668-84bd7ce2-2486-4f28-aba8-00a878a5f299',
      },
      {
        id: '532f61c9-bed0-4265-ab76-3517cb604c5f',
        description: 'Encoste nessa caixa',
        image: '1633275762047-501363f0-ac35-4872-a8a2-ed35b4b74deb',
      },
      {
        id: 'c7b5bf38-e504-4a1f-bca0-0ae2409f0a26',
        description: 'Mire nessa região, ao lado da lâmpada, porém, sem toca-la',
        image: '1633275816371-ee697ed2-b7ca-45ed-9c07-f4d0fc192bfd',
      },
      {
        id: '9e3fa347-77cf-4bed-8398-63e171f7786f',
        description: 'Dispare com força total, sem ricochete',
        image: '1633275840468-10ae8487-67d4-457a-8391-a73a1a256a6d',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:41:47.029Z'),
  },
  {
    tags: {
      moment: 'DepoisDoPlant',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'Meio',
      agent: 'Sova',
    },
    id: '6159d11d1775570b9c406142',
    title: 'Como spotar essa região, para pegar operator ou a entrada no bomb A',
    description:
      'O principal objetivo dessa flecha é spotar movimentação na região do meio, você pode combar com um varado a partir da região do meio',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'a2d71846-4eb8-4af0-9bc1-166bb5957811',
        description: 'que tal spotar a entrada dos inimigos no bomb A e alguém de Operator nessa região?',
        image: '1633275979446-c94b0ed4-995e-4e30-9029-b3d0d46a8d5b',
      },
      {
        id: '17be1d40-6e6b-4142-b23f-1efd3ceea2ec',
        description:
          'Encoste na parede do meio, e mire no fio em baixo da janela. Dispare com força total e com 1 ricochete.',
        image: '1633276085446-b905cae9-c165-4349-9bb0-cceb402cee0d',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:42:03.305Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'CâmeraDeVigilância',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Cypher',
    },
    id: '6159d1db1775570b9c406147',
    title: 'Um Câmera marota de Cypher',
    description: 'Um Câmera marota de Cypher',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '7eff28da-93b5-4386-a7fb-6a252dd57407',
        description: 'Basta posicionar nessa região',
        image: '1633276293553-6e67c4f0-b931-438b-856f-db6d4e7f5e8a',
      },
      {
        id: 'c0919e95-15bd-4984-8059-60c56583bf2f',
        description: 'Não subestime essa câmera, o time inimigo poderá demorar para perceber essa câmera',
        image: '1633276257045-227ae204-eace-4ecb-8a2c-41d891d9f358',
      },
    ],
    __v: 0,
    updatedAt: new Date('2021-10-03T21:41:34.219Z'),
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Nanoenxame',
      side: 'Atacantes',
      map: 'Fracture',
      mapPosition: 'A',
      agent: 'Killjoy',
    },
    id: '615b06383d918dc99eaff809',
    title: 'Impedir o desarme da Spyke plantada nesse ponto',
    description:
      'As vezes você não consegue posicionar o nanoenxame, ou simplesmente quer tornar a vida do seu adversário mais difícil',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '5ef83544-7006-4466-a2ce-30f4eb574dab',
        description: 'Esse pixel cai em cima da spyke plantada nessa posição',
        image: '1633355137570-8ae8fa72-b11e-4060-9c52-643e712b7a92',
      },
      {
        id: 'cb2713c7-ec73-418c-9c89-2161e888cd45',
        description: 'Você precisará subir nessa região',
        image: '1633355168140-f2eaaf42-3557-4330-81a0-bede2d6f98ec',
      },
      {
        id: 'c8e393db-0026-4ef0-8b94-a732f1936d61',
        description: 'Mirar nesse pixel, bem no parafuso',
        image: '1633355183656-4b298baa-a674-4dcb-a117-0c2a7fa09d89',
      },
      {
        id: '08959bdd-c1aa-4235-b457-f0c9d4f6c9e2',
        description: 'Então jogue o nanoenxame',
        image: '1633355197973-af07abfd-b7fd-4f88-99a9-dd6ec1731aa9',
      },
      {
        id: '76aaa84b-90dd-4893-a34a-5cf7951fce55',
        description: 'Eles deverão cair bem no plant padrão',
        image: '1633355217620-5e150e7e-2f07-4b4b-bce3-aaaf44db635b',
      },
    ],
    createdAt: new Date('2021-10-04T13:48:40.764Z'),
    updatedAt: new Date('2021-10-04T13:48:40.764Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Confinamento',
      side: 'Atacantes',
      map: 'Fracture',
      mapPosition: 'A',
      agent: 'Killjoy',
    },
    id: '615b07c33d918dc99eaff812',
    title: 'Boas Ultimates #1',
    description: 'Boas Ultimates #1',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '90fa1b4e-45f7-4218-bc5b-1c48b7a4a834',
        description: 'Ultimate no A que cobre essa região',
        image: '1633355535106-0cb145ed-0cf7-4869-b635-979d6cb9c877',
      },
      {
        id: '862c4f58-c5fc-4aa0-82fc-4da40a3510ee',
        description: 'Essa região',
        image: '1633355547763-3e979454-f581-4827-90c1-b79c9244e605',
      },
      {
        id: 'fcdb0fc6-1213-4788-93ff-9b78f696bdb5',
        description: 'E essa região',
        image: '1633355554180-5deb511f-8971-4945-a23d-93aff3b1970a',
      },
      {
        id: 'c927e799-486f-4e9f-a58a-e5c40a507b04',
        description: 'Para faze-la você precisa de estar na entrada do A',
        image: '1633355592621-495c714e-e2ed-4198-8d82-d15f9508fbaa',
      },
      {
        id: '97d03076-12d8-40bc-baa8-3d06bc40e3f5',
        description: 'E usar a ultimate nesse cantinho. Cuidado com granada da Raze',
        image: '1633355610942-311a640b-c5c2-4e5f-861f-7d4956b104b6',
      },
    ],
    createdAt: new Date('2021-10-04T13:55:15.029Z'),
    updatedAt: new Date('2021-10-04T13:59:06.643Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Confinamento',
      side: 'Atacantes',
      map: 'Fracture',
      mapPosition: 'A',
      agent: 'Killjoy',
    },
    id: '615b08863d918dc99eaff81a',
    title: 'Boas Ultimates #2',
    description: 'Boas Ultimates #2',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'c7045553-94f0-467f-b75c-73d28fb9e9b0',
        description: 'Ultimate que cobre essa região',
        image: '1633355779319-78ab62f6-e321-45a3-9033-062b7b92d974',
      },
      {
        id: '9dd7be08-e82a-490b-80c6-a400e57a0c47',
        description: 'E essa região',
        image: '1633355795468-0d167c40-3a85-479e-bfd4-c17987a1e79c',
      },
      {
        id: '50e952a2-5759-4c8c-9e18-907c37bd8a1c',
        description: 'Posicione o confinamento na entrada do A',
        image: '1633355843744-4867151e-57e6-4998-a36b-282cacf24e14',
      },
      {
        id: '1cfff16a-193c-46d0-8ede-fb88055a21c0',
        description:
          'Cuidado com abilidades inimigas, certifique que essa região está segura ou que o time inimigo não tem habilidades mais para counterar a ultimate',
        image: '1633355860588-4529fc47-c9d4-411b-a872-faa17e50d0b8',
      },
    ],
    createdAt: new Date('2021-10-04T13:58:30.853Z'),
    updatedAt: new Date('2021-10-04T13:58:30.853Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Confinamento',
      side: 'Atacantes',
      map: 'Fracture',
      mapPosition: 'B',
      agent: 'Killjoy',
    },
    id: '615b09633d918dc99eaff827',
    title: 'Boas Ultimates #3',
    description: 'Boas Ultimates #3',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '63b6aa24-01e8-4fc4-8b49-3fadf52e3d6a',
        description: 'Essa ultimate cobre essa região',
        image: '1633355999794-040ad242-c1da-4391-b117-941f4ff611fc',
      },
      {
        id: '8aa1e783-ce5e-4add-ac22-0b90810f0586',
        description: 'Essa região',
        image: '1633356006098-60c0aba9-7d14-42af-989f-35c5fe1b84e9',
      },
      {
        id: '9f105e42-2fd5-4196-acc4-9d9d514ec10b',
        description: 'E essa região',
        image: '1633356012389-546c60db-a67d-4cdb-a658-07fdc6ee4a85',
      },
      {
        id: 'b9b0e4f3-2757-4d78-8b43-400b2eb8fb3b',
        description:
          'Para faze-la você precisará dominar a entrada do Bomb B, e precisará se posicionar no ponto indicado',
        image: '1633356021964-4f11a911-5d19-4f27-a589-5d5a79f232af',
      },
      {
        id: '685fe523-9a9d-462a-bfd0-c6dc87292f23',
        description:
          'Certifique-se de que a área está segura e que os adversários não possuem recursos para destruir a ultimate',
        image: '1633356051690-f9e07b40-dd16-4ce4-aae8-df05e84467f0',
      },
    ],
    createdAt: new Date('2021-10-04T14:02:11.306Z'),
    updatedAt: new Date('2021-10-04T14:02:11.306Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'DepoisDoPlant',
      difficult: 'Facil',
      ability: 'VenenoDeCobra',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'A',
      agent: 'Viper',
    },
    id: '615b0aa43d918dc99eaff829',
    title: 'Como acertar a spyke no plant no meio das caixas',
    description: 'Cuidado com esse pixel, ele está em uma região bem exposta',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'a4a788a3-3a46-429b-9c6a-40db7cd39650',
        description: 'Como acertar esse píxel a partir do long da A',
        image: '1633356175249-5d324a42-5447-43ee-96b6-77c0f11ed74f',
      },
      {
        id: '2a918cc1-e637-4991-89fb-35d760dea5ad',
        description: 'Recue até a região do longo do A, e posicione no ponto indicado',
        image: '1633356200672-1f1d0943-1e4d-46fa-b312-a874e42919fa',
      },
      {
        id: 'aae152ec-1fc3-4787-946d-d4099ac1891f',
        description: 'Posicione o meio exato da barra de veneno, um pouco acima da lâmpada, conforme o exemplo.',
        image: '1633356222976-64d101f2-f684-4b95-a19b-b998479d3c22',
      },
      {
        id: 'd3838fdb-5418-46a5-a4aa-be8253e45823',
        description: 'O veneno deverá cair na spyke. Lembre-se de combar com as smokes',
        image: '1633356260297-61006abb-2e74-4f18-992d-f62269c4bce1',
      },
    ],
    createdAt: new Date('2021-10-04T14:07:32.912Z'),
    updatedAt: new Date('2021-10-04T14:07:32.912Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'DepoisDoPlant',
      difficult: 'Facil',
      ability: 'VenenoDeCobra',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'B',
      agent: 'Viper',
    },
    id: '615b0ccf3d918dc99eaff82b',
    title: 'Como acertar o plant das caixas a partir do B',
    description: 'Então você resolveu ser o lurker, seu time morreu geral e agora só você pode salvar o round!',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '1a141493-7edb-4c61-b5a1-dfdf035b8ac5',
        description: 'Como acertar o plant nas caixas no bomb A a partir do Bomb B',
        image: '1633356489926-ee1a9e60-f311-4557-89ae-434708836fde',
      },
      {
        id: 'b8cce448-3ef7-44eb-b3f2-b34b2a35ea51',
        description: 'Encoste nesse cantinho',
        image: '1633356528525-e72a41e7-821b-4bc0-b51f-185e908c40b0',
      },
      {
        id: '4578aac7-4e53-4546-a74f-53a83e0f2e35',
        description:
          'Mire bem nesse canto, mire na parte interna, o objetivo é jogarmos o veneno ali e ele rebater, indo para a spyke',
        image: '1633356812748-ff6d27fb-1d88-4a4f-be0c-142f9e8fa52e',
      },
      {
        id: 'b30ca14f-b734-454e-aabe-1d16bfcdf531',
        description: 'Pegue o veneno e jogue-o',
        image: '1633356848227-ed327baf-2945-4d7f-91e2-188b2ae022e1',
      },
      {
        id: '0d92c8a6-b3d9-4b61-9d49-a59c6b9bbf96',
        description: 'Sempre lembre de combar com a Nuvem venenosa',
        image: '1633356863206-8c0a1e4e-5687-47e0-9df2-221b87d81265',
      },
    ],
    createdAt: new Date('2021-10-04T14:16:47.389Z'),
    updatedAt: new Date('2021-10-04T14:16:47.389Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'medio',
      ability: 'VenenoDeCobra',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'B',
      agent: 'Viper',
    },
    id: '615b11673d918dc99eaff82f',
    title:
      'Apesar da B ser pouco usada, se vocês tiverem plantado a spyke no Meio e você precisou recuar, vale a pena tentar esse pixel',
    description:
      'Aqui é uma boa ter a informação se a Sage inimiga já usou a parede dela, caso não tenha usado, cuidado com esse pixel.',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '38463408-d0fb-4f52-bc4f-1356cb8d4257',
        description: 'Como acertar o plant do meio na B',
        image: '1633357917342-a6e17287-62b7-4c02-8da4-78ab1a05a9c0',
      },
      {
        id: '7a3c31b5-a76d-45d9-b8ca-5c1e6ff09074',
        description: 'Você precisará voltar a base CT e encostar no meio dela, no ponto indicado',
        image: '1633357932712-585f77d3-614d-48a1-9c3b-5707bfa9ef61',
      },
      {
        id: 'd9b9697b-1701-4d7b-ad20-84e1611eacf9',
        description: 'Após encostar no ponto indicado, mire na torre amarela, mire um pouco acima',
        image: '1633358006147-90cae8bb-dc12-4c2a-9b94-70ecb4e35a9c',
      },
      {
        id: 'c7aa9ce9-2af7-4da1-9101-a2d773305b6d',
        description: 'Esse é o posicionamento ideal',
        image: '1633358028096-cd0fa0b1-cb8b-4adf-b5e0-d65a3e4c2fc4',
      },
      {
        id: 'b1981a5a-8564-4c8d-8839-38cdc52e6193',
        description: 'Dispare o veneno',
        image: '1633358046007-f004a7e4-34a6-4023-9b41-61ce662cf451',
      },
      {
        id: 'dd2878ef-6781-4d39-a8c8-aad1925a94e0',
        description:
          'Ele deverá acertar a spyke. Certifique-se de que os oponentes não possuam recursos para bloquear objetos vindo desta direção, como a parede da Sage',
        image: '1633358055305-66ff10e0-80cf-4f21-8d92-c42166458d49',
      },
    ],
    createdAt: new Date('2021-10-04T14:36:23.799Z'),
    updatedAt: new Date('2021-10-04T14:36:23.799Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'VenenoDeCobra',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'B',
      agent: 'Viper',
    },
    id: '615b12743d918dc99eaff831',
    title: 'Como impedir o defuse/plant da Spyke no B, dentro da B',
    description:
      'Essa é uma situação é atípica, e pode acontecer se você conseguiu marotar, porém, tem muitos inimigos vivos',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '13ea624c-49dd-42c1-8d27-3e5717d781a0',
        description: 'Esse veneno atinge essa região',
        image: '1633358308385-03483fc9-a829-4ce5-9b01-3df06206c6e5',
      },
      {
        id: 'ed7df1a4-9e59-4016-9d08-d8404276d5d6',
        description: 'Encoste no fundo do bomb, no ponto indicado',
        image: '1633358326955-c5e5c03a-0941-4fea-8ecf-3ced2f088dd5',
      },
      {
        id: 'dafe546d-7305-4d58-b4fa-7a2c72ef5472',
        description: 'Mire nessa região, um pouco abaixo da parte superior e um pouco a direita dessa madeira',
        image: '1633358351346-592750d7-42ad-4832-ae3b-cd2a49ede041',
      },
      {
        id: '95af9164-9e71-48e6-950e-6ff9d7a25417',
        description:
          'Dispare o veneno, ele deverá atingir o objetivo, e com sorte, o time adversário irá te caçar longe do B.',
        image: '1633358382471-a256ee9a-a2b8-4f73-b762-700afb409fcd',
      },
    ],
    createdAt: new Date('2021-10-04T14:40:52.682Z'),
    updatedAt: new Date('2021-10-04T14:40:52.682Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'CortinaTóxica',
      side: 'Defensores',
      map: 'Haven',
      mapPosition: 'B',
      agent: 'Viper',
    },
    id: '615b133a3d918dc99eaff833',
    title: 'E que tal uma cortina tóxica para atrasar a entrada do time adversário?',
    description:
      'Cuidado, essa parede pode ser troll, o time adversário pode simplesmente se posicionar atrás da parede e bolar uma entrada ',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '82b11bd4-c9e3-48a6-82af-8fc6dbaca559',
        description: 'Essa parede cobre a entrada do B',
        image: '1633358487712-87e6064a-4f68-40f8-8145-83f6144404c3',
      },
      {
        id: '1a021b49-4f21-4981-a901-7e744de1397b',
        description: 'Essa região do Double Dors',
        image: '1633358505423-b1de0d3e-7984-44cc-9804-9a557c7d1adc',
      },
      {
        id: 'f1e0012a-b8e6-476a-8c2d-55c4ca8daf19',
        description: 'E a entrada do bomb C',
        image: '1633358518740-51b91e38-a1e6-42d7-9f37-d459d82fe859',
      },
      {
        id: 'bc9c317c-a3b1-4ca6-9d00-1f124903617f',
        description: 'Para faze-la, mire nessa região',
        image: '1633358535360-1313fa81-5ca2-4684-a6c3-96953a5d8728',
      },
      {
        id: '8ceb2c33-e644-4a10-a559-c836d8e3fe8c',
        description: 'Valide que está do jeito que você quer, olhando o minimapa',
        image: '1633358549875-939658fe-796a-4054-b81c-254c52f7a7a1',
      },
    ],
    createdAt: new Date('2021-10-04T14:44:10.357Z'),
    updatedAt: new Date('2021-10-04T14:44:10.357Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'medio',
      ability: 'VenenoDeCobra',
      side: 'Defensores',
      map: 'Haven',
      mapPosition: 'B',
      agent: 'Viper',
    },
    id: '615b14243d918dc99eaff835',
    title: 'Como impedir o plant/defuse da spyke no C, a partir do B',
    description: 'Esse pixel pode ser usado com você do lado defensor ou do lado atacante',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '5bfca4c7-f07c-4a4e-a821-2ab6a8eed389',
        description: 'Esse pixel te permitirá impedir o plant da Spyke ou impedir o defuse da mesma',
        image: '1633358696462-2e76b7e2-c396-4f71-a02b-6fe3209991d0',
      },
      {
        id: '081d564f-5273-491f-bd66-7971e19b486b',
        description: 'Se posicione nesse canto, indicado pelo ponto',
        image: '1633358756800-2e932b47-57cb-4f01-9686-af1e4bd0cb48',
      },
      {
        id: '61105321-3b28-40e3-9468-04b543a81b25',
        description: 'Mire nessa região',
        image: '1633358774308-2fee1516-22a0-49b6-a21f-d2bc3f0b2bc6',
      },
      {
        id: '5923ba10-3975-4a55-bee5-2e2036466ab0',
        description: 'Um pouco para baixo e um pouco para a esquerda',
        image: '1633358783051-fe517726-614d-4c23-93d8-6010254aba54',
      },
      {
        id: '870163db-848c-4f38-a7ac-43f868a91b73',
        description: 'Dispare o veneno, e você conseguirá ganhar um tempo ou no mínimo causar um dano ao adversário',
        image: '1633358800054-0c095459-4d6f-4b18-b3cd-d9ffddbab984',
      },
    ],
    createdAt: new Date('2021-10-04T14:48:04.070Z'),
    updatedAt: new Date('2021-10-04T14:48:04.070Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'medio',
      ability: 'FlechaRastreadora',
      side: 'Defensores',
      map: 'Haven',
      mapPosition: 'A',
      agent: 'Sova',
    },
    id: '615b152c3d918dc99eaff839',
    title: 'Como spotar o time adversário entrando no bomb A',
    description: 'Esse pixel pode ser combinado com varados, tanto na B, quando no rato',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '792c457b-a792-456c-acf3-8cbdd4ac9039',
        description: 'Flecha rastreadora para spotar a entrada do A',
        image: '1633359106291-b9715c3f-0fee-4cff-8fd6-e2a94979a0f5',
      },
      {
        id: '67851ac4-3897-41d9-adbb-7fa8f9cc7f13',
        description: 'Se posicione meio da janela, no céu da A',
        image: '1633359047380-b67c4112-6250-4d46-92cb-02b7e2e392e4',
      },
      {
        id: '3724f4ea-167f-424c-9678-cc273f03c60d',
        description: 'Mire no meio do Sol, e arraste a mira um pouco para a esquerda',
        image: '1633359065234-624fb344-6ced-49ae-92e1-f43a191b36e7',
      },
      {
        id: '61b2a76a-6910-4915-aa83-63c3e601fb48',
        description: 'Dispare com força 1, sem ricochete',
        image: '1633359087242-53da93a2-028e-4a16-a04f-eb2b883c06a8',
      },
    ],
    createdAt: new Date('2021-10-04T14:52:28.440Z'),
    updatedAt: new Date('2021-10-04T14:52:28.440Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'medio',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'Qualquer',
      agent: 'Sova',
    },
    id: '615b16383d918dc99eaff83b',
    title: 'Como spotar essa região no A',
    description:
      'É bem comum ficar alguém nessa região, e você poderá ter problemas dependendo da mira dessa pessoa, esse spot te ajudará a entender a situação rapidamente.',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '6d3ad501-2175-4020-b9ac-79f4af3451d1',
        description: 'Essa flecha spota essa região, onde normalmente costuma ficar EU de Operator ou marshal.',
        image: '1633359184617-7d3b7175-0142-4c33-b598-1fa824c7de75',
      },
      {
        id: '919dc609-c7b7-4505-83e8-cb3a23700040',
        description: 'Ainda na região da base Defensora, se posicione nesse ponto, encostado no vazo',
        image: '1633359251252-fa731824-bbce-444a-86be-1b1fde1495d0',
      },
      {
        id: 'ba12677b-57f4-43f0-bcde-2385a9bd80ec',
        description: 'Mire nessa região, debaixo da marca da árvore',
        image: '1633359286968-24298df3-cc50-4ff4-a8fa-cf7659d51604',
      },
      {
        id: '3f3cd369-e449-4a49-b095-969e02b975cc',
        description: 'Dispare com 1.5 de força',
        image: '1633359310542-c16d105b-047d-47c0-8dd4-b3509b7a3e83',
      },
    ],
    createdAt: new Date('2021-10-04T14:56:56.743Z'),
    updatedAt: new Date('2021-10-04T14:56:56.743Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'medio',
      ability: 'FlechaRastreadora',
      side: 'Defensores',
      map: 'Haven',
      mapPosition: '',
      agent: 'Sova',
    },
    id: '615b17063d918dc99eaff83d',
    title: 'Como spotar gente marotada no A',
    description:
      'Esse spot te ajudará na entrado do A pelo Long, mas ela tem vários problemas e portanto use somente para casos especificos',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'b37a4791-46dd-4fae-bc72-3575921480f5',
        description:
          'Esse spot é bom especialmente para pegar gente marotada na entrada do A, e combinando mais ricochetes pode ser usado de bait enquanto seu time avança',
        image: '1633359451884-5fe05752-d806-4ff8-8695-280e7e699793',
      },
      {
        id: '93b360b8-4023-45ca-af92-a58303ee148a',
        description: 'Encoste nesse vazo',
        image: '1633359502338-aad45d16-ff81-4d18-bdc5-4436f4b9a948',
      },
      {
        id: '542a39a2-2c1d-4f67-a57a-08c00bc1ede7',
        description: 'Mire em baixo da marca dessa árvore',
        image: '1633359511466-9ca027a9-d593-42d0-8cb8-51c5d07b4db5',
      },
      {
        id: '989346ba-e136-4989-9704-02c596abe5ae',
        description: 'Dispare a flecha com 1.5 de força e com 1 ricochete',
        image: '1633359528691-739c7a16-db2f-4ca4-be40-5204e864f59d',
      },
    ],
    createdAt: new Date('2021-10-04T15:00:22.691Z'),
    updatedAt: new Date('2021-10-04T15:00:22.691Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'Meio',
      agent: 'Sova',
    },
    id: '615b18133d918dc99eaff83f',
    title: 'Como spotar a Double Doors (prepare o varado!)',
    description:
      'Esse spot serve para você spotar gente marotada na Double Doors e DEVE ser combinado com um varado, sim, as portas varam dependendo da arma',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '28c3960a-1d36-4ee6-846a-2c05f43b06b9',
        description: 'Esse Spot atinge essa região',
        image: '1633359755523-a397e3fd-7ab0-4697-9274-ea5736717b5e',
      },
      {
        id: '65c46de5-737d-48fe-b18e-c9631d95dc39',
        description: 'Para faze-lo, alinhe a parede e encoste nela',
        image: '1633359772111-fb72abf7-4a6f-4544-90a3-e84f23e07053',
      },
      {
        id: 'd6af2049-b8e1-46bc-ab8c-512c0ff50315',
        description: 'Mire nesse parafuso de cima',
        image: '1633359795148-8347cc77-c2b1-49cf-ad65-dc4c03fe80d7',
      },
      {
        id: '4a64165f-c8e3-4532-82c2-fafef91692df',
        description: 'Dispare com força total, com dois ricochetes.',
        image: '1633359807995-ca5e9a42-3590-421a-8bfa-0878218ad058',
      },
    ],
    createdAt: new Date('2021-10-04T15:04:51.717Z'),
    updatedAt: new Date('2021-10-04T15:09:05.956Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'medio',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'C',
      agent: 'Sova',
    },
    id: '615b1a5f805f300d78edda62',
    title: 'Como spotar a frente do bomb C',
    description: 'Esse spot pode ser bem útil durante um rush na C',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '8f811bd1-1948-4485-bcb6-4c54ba110723',
        description: 'E que tal esse spot na entrada do Bomb C?',
        image: '1633360297688-baefafb3-c2fa-469a-a4b3-6f1b305fcc35',
      },
      {
        id: '321c43b6-8991-4ce5-8f2f-91357510c39d',
        description: 'Na região da entrada do C, encoste nessa parede',
        image: '1633360324646-12c402e1-2433-4d07-888d-4efc5ba386cd',
      },
      {
        id: '541cf89a-521f-479f-9282-61c630b3a6d7',
        description: 'Mire nesse encruzilhado de folhas',
        image: '1633360355201-d25f92d5-4480-4d7d-9c2f-9665c53cb1ba',
      },
      {
        id: '8faed28a-3c57-4980-9a06-1b16ce1df95c',
        description: 'Relaxa que é nesse daqui, nesse mais escuro, bem no X',
        image: '1633360372926-3212d169-2447-494d-ac6e-fc2decc81a19',
      },
      {
        id: 'be55e85f-3dcb-408a-a1cb-e7d938e3c026',
        description: 'Dispare a flecha com força de 1.5 sem ricochete',
        image: '1633360408992-32e5d504-675a-44e4-a836-ce90e67dd9a7',
      },
    ],
    createdAt: new Date('2021-10-04T15:14:39.498Z'),
    updatedAt: new Date('2021-10-04T15:14:39.498Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'C',
      agent: 'Sova',
    },
    id: '615b1b3b805f300d78edda64',
    title: 'Esse spot pega a região de trás do C',
    description: 'Esse spot é ótimo para pegar Jett/Cypher de Operator, lembre-se que as caixas também varam',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '4b3f45e0-31c2-45e7-8a75-6243667cfe32',
        description: 'E que tal esse spot no fundo da C?',
        image: '1633360502566-650af8a9-efa4-4877-abf3-1300e4e51549',
      },
      {
        id: '8e16142e-a373-4b40-9871-e7f367a2c090',
        description: 'Na região da entrada da C, encoste nessa parede',
        image: '1633360522479-7019d76b-6468-4c21-af80-a543d992e02e',
      },
      {
        id: 'e1c5841a-62a1-4b2b-a791-3f080fb21dc2',
        description: 'Mire bem no meio desse vazio',
        image: '1633360550732-3f7a3e30-24d6-4ac7-9421-91645c0cbe5f',
      },
      {
        id: '319d8f24-0686-4411-8060-ea0a632840e0',
        description: 'Dispare a flecha com 1.5 de força, sem ricochete',
        image: '1633360566948-2f116fed-c68b-4ec6-8055-48654a3dc61b',
      },
    ],
    createdAt: new Date('2021-10-04T15:18:19.721Z'),
    updatedAt: new Date('2021-10-04T15:18:19.721Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'medio',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'C',
      agent: 'Sova',
    },
    id: '615b1c0c805f300d78edda66',
    title: 'Esse spot pega boa parte do C',
    description: 'Esse spot pega boa parte do Bomb C, mas cuidado, é possível usar as caixas para marotar o Spot',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '202fddaa-b98c-4cb3-a4df-b0e0f4f4de77',
        description: 'Esse spot pega quase todo o bomb C, provavelmente é um dos melhores spots na Haven',
        image: '1633360720987-6c6fc8c8-8821-424f-939b-92ada66474b2',
      },
      {
        id: '5840f200-6391-4d8c-8a6c-2df7a416eac4',
        description: 'Para faze-lo, encoste nesse canto',
        image: '1633360748550-4b18023e-ca76-40b8-8157-0ef006944fb0',
      },
      {
        id: 'ed48a134-bad6-4f69-b115-aa2ecb9a0b8e',
        description: 'Mire nesse ponto da árvore',
        image: '1633360764613-d484b2ca-9592-4280-9c1a-e807eaf95c9f',
      },
      {
        id: 'baf104a3-3a5a-44d2-a4ed-8425153fd98d',
        description: 'Mire bem na pontinha dele',
        image: '1633360777866-d3e4ec9f-929a-4186-a3ca-6d90b111463d',
      },
      {
        id: '6cb67e97-bb78-47ea-a1c4-3c2c9aa88ddc',
        description: 'Dispare a flecha com 1 de força e sem ricochete',
        image: '1633360798015-89c7029c-f8fe-4793-8dc7-a7fa307994c8',
      },
    ],
    createdAt: new Date('2021-10-04T15:21:48.159Z'),
    updatedAt: new Date('2021-10-04T15:21:48.159Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'C',
      agent: 'Sova',
    },
    id: '615b1cb5805f300d78edda68',
    title: 'Esse spot pega praticamente todo o bomb C',
    description: 'Use e abuse dele',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '502ed5c7-46e2-4d68-96af-a18aadf9cb87',
        description: 'Esse spot pega todas as regiões importantes do bom C',
        image: '1633360928046-44e40472-c0e5-4653-9c8b-bc5894cefa39',
      },
      {
        id: 'd1e13fec-f2c5-4812-b939-7197a48d91ee',
        description: 'Encoste na parede, bem no meio desse quadro',
        image: '1633361016801-24061310-1a8c-46d5-be40-0f6251271c69',
      },
      {
        id: '651aeeb4-9257-4ef7-95d2-3438a3a3f77d',
        description: 'Mire no meio dessa madeira, no long da C',
        image: '1633361039391-5c96ddd9-635f-4b9f-be4d-b2875fab0b13',
      },
      {
        id: '87df7db3-fc45-483e-b66d-490f3687e6a3',
        description: 'Dispare com força total e com um ricochete',
        image: '1633361056176-3f8114a1-eaf8-40c8-88c6-519aa91bc9c9',
      },
    ],
    createdAt: new Date('2021-10-04T15:24:37.844Z'),
    updatedAt: new Date('2021-10-04T15:24:37.844Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Confinamento',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'C',
      agent: 'Killjoy',
    },
    id: '615b1da5805f300d78edda6a',
    title: 'Melhores Ultimates #1',
    description: 'Melhores Ultimates #1',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'bbc93c85-a239-43f2-8cd6-b28acb1e661f',
        description:
          'Essa ultimate pega quase todo o bomb C, deixando apenas a região do fundo, região essa que seu time precisará ter um foco a mais',
        image: '1633361190616-848460e9-e3ac-4c84-a71e-e8413a916f50',
      },
      {
        id: '8645ae48-298d-4b03-b736-20313161f025',
        description: 'Use a ultimate bem nesse cantinho. Você precisa dominar essa região antes de usar a ultimate',
        image: '1633361267159-5d7a9a40-fec9-4d2a-8388-226a30f32ba9',
      },
    ],
    createdAt: new Date('2021-10-04T15:28:37.250Z'),
    updatedAt: new Date('2021-10-04T15:28:37.250Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Confinamento',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'B',
      agent: 'Killjoy',
    },
    id: '615b1e57805f300d78edda6c',
    title: 'Melhores Ultimates #2',
    description: 'Melhores Ultimates #2',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '28deac12-d3f2-417d-82c7-fd7569fa41c6',
        description: 'Essa ultimate pega toda essa região',
        image: '1633361341182-22db8c0c-f13f-4db8-8b03-7b42a1932210',
      },
      {
        id: 'ec44fe5c-4363-4414-9155-98ca7132c69f',
        description: 'Impedindo o avançado da A',
        image: '1633361359254-2a1a52ee-3ee0-4b2b-bad4-fc4665bd5cd5',
      },
      {
        id: '2082c377-67cf-46ae-87b3-a23526d94465',
        description: 'O avanço pelo rato',
        image: '1633361374599-ba737f5a-4bcb-4fbd-b258-7704bcd2ff58',
      },
      {
        id: '4182f36d-a2b2-4b5d-9c56-cf625b92f2bf',
        description: 'E eventuais costinhas',
        image: '1633361386275-f1119df1-d170-4a03-a69b-85d160c03019',
      },
      {
        id: 'e2d46424-7c1d-44e2-bea6-0b4c8a9513e0',
        description:
          'Use a ultimate bem nesse cantinho. Cuidado que essa é uma região exposta para avanço pelas costas, portanto, garanta que essa região é de domínio de sua equipe, pelo menos até o final do confinamento',
        image: '1633361395950-ea9d2113-feea-4de3-87b3-91c3e0f76611',
      },
    ],
    createdAt: new Date('2021-10-04T15:31:35.024Z'),
    updatedAt: new Date('2021-10-04T15:31:35.024Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Confinamento',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'A',
      agent: 'Killjoy',
    },
    id: '615b1ec8805f300d78edda6e',
    title: 'Melhores Ultimates #3',
    description: 'Melhores Ultimates #3',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '81b2aca3-83d3-4448-a680-c20e8a8e1fb2',
        description: 'Essa ultimate impede o avanço pelo céu',
        image: '1633361514399-1629af5f-34f4-44b3-9eb8-f73291c7647e',
      },
      {
        id: '37395804-18d3-45cb-851e-6b34926aa6ce',
        description: 'E pelo B',
        image: '1633361538139-7a68c432-945b-44ca-9689-c968cc183d6d',
      },
      {
        id: '2fba98e1-d05a-49a2-8ccc-ba61f1cb9abf',
        description:
          'Use a ultimate bem nesse cantinho, certifique-se de ter o dominio sobre essa região e cuidado com uma Raze com uma granada',
        image: '1633361550208-52710379-1e41-42ae-b8c1-cbcd2c8d51e6',
      },
    ],
    createdAt: new Date('2021-10-04T15:33:28.085Z'),
    updatedAt: new Date('2021-10-04T15:33:28.085Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Confinamento',
      side: 'Atacantes',
      map: 'Haven',
      mapPosition: 'C',
      agent: 'Killjoy',
    },
    id: '615b1fd2805f300d78edda70',
    title: 'Melhores Ultimates #4',
    description: 'Melhores Ultimates #4',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '28f370f7-d847-4d88-bec2-5d59fd68b12e',
        description: 'Essa ultimate impede o avanço pela C',
        image: '1633361640032-86ed7be7-98b8-47f1-9cf2-58f86e3a0184',
      },
      {
        id: 'a1a67faf-e9a6-4939-8ed3-9fb96496544b',
        description: 'Impede o avanço pelo A em direção ao C',
        image: '1633361655464-2c456fd7-9941-4ef2-b69f-2b75b4f707ef',
      },
      {
        id: '7dbd82e5-2595-4219-b5e0-cb4dc3042c9c',
        description: 'E protege parcialmente o avanço do A para o B',
        image: '1633361684584-beb1eaf4-86b2-4325-87e7-48e845b91473',
      },
      {
        id: '5bbc8aa1-4d10-4c0a-8139-39fe127f55fa',
        description: 'E pelo meio para o B',
        image: '1633361724904-470470bf-d944-4392-83ff-f61ca8c78c1b',
      },
      {
        id: '5748c1dc-f982-42c9-9950-91bfbf7460ca',
        description: 'Use a ultimate nesse canto',
        image: '1633361739184-020433e2-4475-4a26-85a9-287bc0e25737',
      },
    ],
    createdAt: new Date('2021-10-04T15:37:54.881Z'),
    updatedAt: new Date('2021-10-04T15:37:54.881Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'Nanoenxame',
      side: 'Defensores',
      map: 'Haven',
      mapPosition: 'Qualquer',
      agent: 'Killjoy',
    },
    id: '615b204e805f300d78edda72',
    title: 'Dicas de posicionamento de granadas',
    description: 'Dicas gerais de posicionamento',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'd816cab1-6984-427b-8c3b-e2e556fac9a1',
        description: 'Dicas de posicionamento do nanoenxame',
        image: '1633361891106-a92cb452-c972-4cfa-8f33-408d3af7a6ae',
      },
      {
        id: 'fbead6ed-3879-442e-b56a-06eb6b3ebc0c',
        description:
          'Posicione eles em cima das "mangueiras" no chão e nos cantos, das caixas. Serve para o bomb A e C',
        image: '1633361912801-fd9cec2b-b8a7-4132-a553-1dc09759546b',
      },
    ],
    createdAt: new Date('2021-10-04T15:39:58.266Z'),
    updatedAt: new Date('2021-10-04T15:39:58.266Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'InicioPartida',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Breeze',
      mapPosition: 'BaseDefensora',
      agent: 'Sova',
    },
    id: '615ce6b2885145167e3e464e',
    title: 'Como spotar essa região?',
    description: 'Sempre tem alguém que fica nessa região, ',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '6575aa99-d07f-4308-8ca3-16ed8f211435',
        description:
          'Essa flecha pega essa região, permitindo um avanço do seu time pelo meio, sem preocupações com Operator',
        image: '1633477553273-f9a74dd4-9753-49e5-86bc-1845362a9994',
      },
      {
        id: '1bb83860-6eea-4e82-8049-64428ddb88ef',
        description: 'Encoste nesse cantinho',
        image: '1633477565100-323adb73-f454-4279-9cf5-2324344c56fb',
      },
      {
        id: 'b127715f-2d09-48b1-b4c0-865f5ab87d81',
        description: 'Mire nessa região, na mesma linha da janela, e no meio do quadrado',
        image: '1633477580183-8c119ce8-5711-4f78-bc11-eab04d61ad76',
      },
      {
        id: 'e090d2e8-e903-4aad-9e77-94d95c35a9ec',
        description: 'Dispare com força total e com dois ricochetes',
        image: '1633477586473-c7a01c1d-b233-40e7-b07e-435e7f83183d',
      },
    ],
    createdAt: new Date('2021-10-05T23:58:42.200Z'),
    updatedAt: new Date('2021-10-05T23:58:42.200Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Medio',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Breeze',
      mapPosition: 'BaseDefensora',
      agent: 'Sova',
    },
    id: '615ce798885145167e3e4658',
    title: 'Como spotar a região da Double Doors?',
    description:
      'Não é tão comum ter alguém nessa região, em especial no Low Elo, porém tem players que adoram explorar essa região para fazer costinha, ou, te esperar de Judge',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '5315de9a-26ad-4240-9d20-0ed46293da69',
        description: 'Esse spot pega a região da Double Doors',
        image: '1633478362494-7043d07c-9b0c-4175-9772-4b90ba18e3c9',
      },
      {
        id: '5650fe8f-4ffe-423c-85ec-2c10ee6521d9',
        description: 'Encoste nessa quina',
        image: '1633478385930-fb08df71-41d1-4a0b-9aa4-19174e691886',
      },
      {
        id: '8d79307c-5020-4ebc-90a5-a7ab5ac79d29',
        description: 'Mire na linha de baixo do terceiro bloco (de baixo para cima)',
        image: '1633478403844-df950d77-fec2-4e8a-9cd8-573e144d8062',
      },
      {
        id: 'c5de4238-47fc-4697-a502-4d522fa3906d',
        description: 'Dispare com força total e com 1 ricochete',
        image: '1633478440034-a76d3636-c1b5-40d4-8e08-0763bd248913',
      },
    ],
    createdAt: new Date('2021-10-06T00:02:32.262Z'),
    updatedAt: new Date('2021-10-06T00:02:32.262Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Breeze',
      mapPosition: 'BaseDefensora',
      agent: 'Sova',
    },
    id: '615ce926885145167e3e4668',
    title: 'Como spotar essa região?',
    description:
      'É bem comum o seu time decidir fazer a entrada pelo meio, em especial quando os dois lados estão bem complicados, porém, algum mirudo(a) pode estar nessa posição esperando seu time',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '3407b77e-fe17-4f6d-b45d-9abc5ffb3e83',
        description: 'Essa região geralmente é bem povoada, algumas vezes por um Operator',
        image: '1633478748085-88f05f88-f5b1-449d-9ca8-6e6e5800ee39',
      },
      {
        id: '9d852a69-f343-475c-9629-e867e8dba77b',
        description: 'Primeiramente encoste nessa linha',
        image: '1633478783858-8e8df75f-5eed-4c5e-abaf-81fdea32f57d',
      },
      {
        id: '02ed1902-12eb-42af-9c97-98782751d5e5',
        description: 'Mire bem em cima do telhado. Esse espaço aberto em baixo é justamente o nosso objetivo',
        image: '1633478802091-cfe64545-142e-4e38-bf2b-92351b7a4cf2',
      },
      {
        id: '7557618f-42ab-410e-89d6-b6d05e22fd76',
        description: 'Dispare com força total',
        image: '1633478834522-9fd7c9b3-fc23-4062-b379-43ef36557bcd',
      },
    ],
    createdAt: new Date('2021-10-06T00:09:10.102Z'),
    updatedAt: new Date('2021-10-06T00:09:10.102Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'InicioPartida',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Defensores',
      map: 'Split',
      mapPosition: 'A',
      agent: 'Sova',
    },
    id: '615cea4a885145167e3e466b',
    title: 'Como spotar o time inimigo no começo do round',
    description: 'Esse Spot é muito bom, mas não faça toda hora, pois sua flecha será insta destruida',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'e5403f1f-66bf-43a2-b2d3-73583b82188b',
        description: 'Esse Spot sempre funciona comigo, e é bem famoso na Split',
        image: '1633478979770-27a91415-0d38-4119-bd1b-2dd439ae90be',
      },
      {
        id: 'e8403e76-d90d-492b-a263-5d29cec2fa16',
        description: 'Primeiramente fique na região da Seta, se trata de uma linha reta',
        image: '1633479014543-6037da3c-b7b0-43de-a4c5-eb272e7dfb16',
      },
      {
        id: 'c22cc631-96c5-480c-8735-fd8f4319bdd7',
        description: 'Mire no quadro',
        image: '1633479043105-d2c7ecaa-75f0-4483-b622-d2a595a45cff',
      },
      {
        id: '583c1c1f-3840-4766-9ca0-268b965c28d5',
        description: 'Você deve mirar nessa região',
        image: '1633479066070-b8fa1fbe-7d52-414b-945e-4d73106b68b0',
      },
      {
        id: '659f8de4-87e8-42e2-af12-ba20f487ee18',
        description: 'Dispare com força tota',
        image: '1633479079388-f6fed342-c01c-4d27-b97b-df751ecf144d',
      },
    ],
    createdAt: new Date('2021-10-06T00:14:02.875Z'),
    updatedAt: new Date('2021-10-06T00:14:02.875Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Díficil',
      ability: 'FlechaRastreadora',
      side: 'Defensores',
      map: 'Split',
      mapPosition: 'A',
      agent: 'Sova',
    },
    id: '615cebd6885145167e3e4672',
    title: 'Uma forma dificil de spotar a entrada do time inimigo',
    description: 'Esse spot é bem complicado, mas, se você acertar os timming, pode ser um ótimo bait.',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'fe55540f-2501-4df8-8489-77cad4e72e57',
        description:
          'Esse spot pode ser usado quando os sposts padrões estão manjados, um outro uso dele é como Bait, para algum ...(eu) de Raze rushar (2 ricochetes que é sucesso)',
        image: '1633479261986-fdda4175-c8f1-42ee-a9f9-e8f6c0e5599e',
      },
      {
        id: '1cb6be88-dd53-434f-a6df-399a6e66798a',
        description: 'Encoste nessa parede',
        image: '1633479352519-f04b13dd-4a43-43fd-b6aa-f30a99c242b1',
      },
      {
        id: 'ff65d12c-10d3-4b21-8990-8f45f6e9e327',
        description: 'Mire no segundo "ponto" da estrutura',
        image: '1633479367630-f0b3e934-e9ca-4c47-86ca-d21083f8b248',
      },
      {
        id: '57b91caa-03d5-41ca-9a5b-88f7e1c92dbc',
        description: 'Nesse ponto aqui',
        image: '1633479391198-811817c1-07e5-4136-b27d-8af59ee266ec',
      },
      {
        id: 'f6ab8848-df91-45d9-b2d3-0a4ba9f11e46',
        description:
          'Dispare com menos de uma força, tem que ser algo entre 0.85 e 0.99, 1 ou um pouco mais e ele sai para fora',
        image: '1633479401882-d22f9703-e905-4734-9a6b-1152622738eb',
      },
    ],
    createdAt: new Date('2021-10-06T00:20:38.836Z'),
    updatedAt: new Date('2021-10-06T00:20:38.836Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Split',
      mapPosition: 'A',
      agent: 'Sova',
    },
    id: '615ced36885145167e3e4693',
    title: 'Como spotar a região do céu, na entrada do A',
    description: 'Esse spot é ótimo para limpar essa região',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '771e0fe6-0cd6-4443-ba94-106f22039c87',
        description: 'Esse spot é muito bom para tirar os inimigos dessa posição',
        image: '1633479755463-4e0021d0-bae9-4f54-b2b4-dfc4f7ba319d',
      },
      {
        id: '34372c6f-68fa-4684-b172-e6d57e99052d',
        description: 'Suba nesse vazo e encoste na parede',
        image: '1633479776231-1b470b7c-6d98-4638-90ed-b273555d3648',
      },
      {
        id: 'c3476721-af2d-40e7-9a41-26db96dd34a8',
        description: 'Mire nessa região, sim, tem uma marca no centro da mira',
        image: '1633479802636-7097e7ea-0847-4fda-9cbd-62046a209c1d',
      },
      {
        id: '97d7c6b6-5519-4bcd-b113-1433036da573',
        description: 'Esse ponto aqui, ele é bem visível na tela grande',
        image: '1633479824252-9725bd45-5cf3-44be-9ed5-047b79a64c50',
      },
      {
        id: 'db4c0bbe-d063-4787-8727-3073799e9d42',
        description: 'Dispare a flecha com 1 de força e com 1 ricochete',
        image: '1633479849735-702bf6eb-2636-4e07-9dcb-29ae4d2fb738',
      },
    ],
    createdAt: new Date('2021-10-06T00:26:30.272Z'),
    updatedAt: new Date('2021-10-06T00:26:30.272Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Split',
      mapPosition: 'B',
      agent: 'Sova',
    },
    id: '615cf08f885145167e3e4696',
    title: 'Como spotar o fundo da B',
    description: 'Como spotar o fundo da B',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '5f02e42a-77c5-46b4-9b4e-9698088a5ba9',
        description: 'Esse Spot pega a região do fundo da Split, onde sempre tem alguém.',
        image: '1633480004669-4de4be88-c35d-4196-be07-610482c3f427',
      },
      {
        id: '85c27968-d909-45f6-8b70-803582f90dcb',
        description: 'Suba nessa caixa e encoste na parede no ponto marcado',
        image: '1633480164137-cb1af4f2-2820-43fc-adce-e77d9678743c',
      },
      {
        id: '6b77f0ce-c7a0-4bcd-933a-1b5883726f07',
        description: 'Encoste bem na linha',
        image: '1633480185125-dfa3feac-304b-4d58-a6e8-ea4c1a422efe',
      },
      {
        id: 'a5ea14fb-b8c2-4d43-a0a4-8d5c19a9ece2',
        description: 'Alinhe a mira em baixo dessa placa',
        image: '1633480208952-e0adc6e1-1fa9-4eab-9a49-f3e46110fc24',
      },
      {
        id: 'b05821ce-44f4-405b-9532-670a2819a8f3',
        description: 'Dispare a flecha com força 2, sem ricochetes',
        image: '1633480376335-fc7e7d80-387d-480b-858a-3eb58320fbdf',
      },
    ],
    createdAt: new Date('2021-10-06T00:40:47.467Z'),
    updatedAt: new Date('2021-10-06T00:40:47.467Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'InicioPartida',
      difficult: 'Facil',
      ability: 'CâmeraDeVigilância',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'Meio',
      agent: 'Cypher',
    },
    id: '615f311ed5dfc1f8ad206f2f',
    title: 'Esse pixel permite pegar os atacantes na região do meio',
    description: 'Esse pixel permite pegar os atacantes na região do meio',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '5e7b422d-6286-4988-b037-42cb2365e2f9',
        description:
          'Daqui é possível pegar aquele Operator padrão, e o melhor, é possível varar ele pela parede. SIM, as paredes varam!',
        image: '1633628285014-7f06c962-bc0e-4e3d-b999-4a29115a8339',
      },
      {
        id: '1faa69eb-7bee-41aa-8a4a-de36627d3e0c',
        description: 'Posicione a câmera em baixo da janela e bom jogo!',
        image: '1633628276758-00517ae5-dff7-49c0-8e2b-0f9a0888932e',
      },
    ],
    createdAt: new Date('2021-10-07T17:40:46.545Z'),
    updatedAt: new Date('2021-10-07T17:40:46.545Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FioArmadilha',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Cypher',
    },
    id: '615f32ccd5dfc1f8ad206f42',
    title: 'Dicas de posicionamento de fio armadilha na B',
    description: 'Dicas de posicionamento de fio armadilha na B',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '72b52722-3300-45a6-b1a1-49eafd92bf6f',
        description: 'Dicas de posicionamento de fio armadilha',
        image: '1633628807309-f0818950-d9d7-4ae2-b742-4c06b5eb73c0',
      },
      {
        id: 'cebc37e0-8f52-483e-aedb-963fae48f275',
        description: 'Dicas de posicionamento de fio armadilha',
        image: '1633628832305-a2b27583-1681-44f2-ac16-309d3c295b69',
      },
    ],
    createdAt: new Date('2021-10-07T17:47:56.488Z'),
    updatedAt: new Date('2021-10-07T17:47:56.488Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Medio',
      ability: 'CâmeraDeVigilância',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'A',
      agent: 'Cypher',
    },
    id: '615f33aed5dfc1f8ad206f49',
    title: 'Câmera imperceptível para retake no Bomb A',
    description: 'Essa câmera é muito boa para retake, e permite que você marque e vare o time atacante',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '864e2e12-e74f-4830-8c4b-b49c01d0dab6',
        description:
          'Você pode deixar essa câmera para retake, e ativa-la no momento que o seu time está entrando no bomb',
        image: '1633628937453-9a196652-8096-42e5-802c-30104553c536',
      },
      {
        id: '982e6ba5-8a8e-4dab-8330-41e327f8466b',
        description:
          'Você terá que subir em cima do gerador, sim, não é fácil, e portanto você terá que praticar o pulo',
        image: '1633628978103-c8425dbf-13c3-4c42-8a46-dca1088a5ead',
      },
      {
        id: 'b7431898-c719-4d12-9c45-493ebf7d03c6',
        description: 'Encoste nessa região',
        image: '1633629008275-f51a62c2-63a3-4d54-a9fa-64c0426fa4d6',
      },
      {
        id: '55e29ba0-99d1-44c6-8dff-b0a82caa8483',
        description: 'Coloque a câmera na posição desejada',
        image: '1633629018857-d7bca4da-ad57-4b96-9056-31095fec97e0',
      },
    ],
    createdAt: new Date('2021-10-07T17:51:42.006Z'),
    updatedAt: new Date('2021-10-07T17:51:42.006Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Medio',
      ability: 'CâmeraDeVigilância',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'A',
      agent: 'Cypher',
    },
    id: '615f349bd5dfc1f8ad206f4b',
    title: 'Câmera que pega o bomb A e a região da varanda',
    description:
      'Essa câmera pode ser usada para retake, e se você acertar o "timing", o time atacante não irá perceber onde ela está',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '18b4c69b-3e9a-4ba9-b2b7-8a8249701cc0',
        description: 'Essa câmera é muito boa para retake, e permite spotar todo o bomb e parte da região da varanda',
        image: '1633629118857-f0eb3fa2-6dcb-427a-b34d-8603a03cc738',
      },
      {
        id: '9147c752-6407-4644-b2a8-245dac571d0e',
        description:
          'Você precisará subir no gerador, treine esse pulo em uma partida personalizada. (É um pulo quando você estiver quase para cair, e o botão de agachar para você chegar em cima do gerador)',
        image: '1633629173794-b912c7e7-fb0f-4b87-9033-4dff7a167128',
      },
      {
        id: '8b17b549-a569-46c4-b786-c64dc3ea73e2',
        description: 'No canto do gerador, posicione a câmera no ponto indicado',
        image: '1633629256339-dadef593-e7b0-4eb4-ac70-901175d55586',
      },
    ],
    createdAt: new Date('2021-10-07T17:55:39.117Z'),
    updatedAt: new Date('2021-10-07T17:55:39.117Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FioArmadilha',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'A',
      agent: 'Cypher',
    },
    id: '615f3555d5dfc1f8ad206f4d',
    title: 'Dicas de posicionamento de fio armadilha no Bomb A',
    description: 'Se liga ia nessas dicas de OneWay',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '9ec758bc-b2fd-438d-9f18-6f45af01c848',
        description: 'Combe os fios armadilha com varados e OneWay',
        image: '1633629353573-fc0031ec-90d6-4c0d-aa18-d0f8e4a89be6',
      },
      {
        id: 'eb0c2cab-6056-4386-b382-7bbcf6e5e7e9',
        description:
          'Esse fio parece troll, porém, dificilmente o time atacante irá pensar que tem um fio colado no chão. Já spotei três vezes uma Jett, com dois fios desse tipo e a câmera, foi divertido hahaha',
        image: '1633629386793-331d4442-4d7c-49c1-99d6-25da5271affc',
      },
    ],
    createdAt: new Date('2021-10-07T17:58:45.888Z'),
    updatedAt: new Date('2021-10-07T17:58:45.888Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Medio',
      ability: 'JaulaCibernética',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'A',
      agent: 'Cypher',
    },
    id: '615f3653d5dfc1f8ad206f4f',
    title: 'One Way no bom A',
    description: 'Essa One Way te fornece uma grande vantagem, em especial quando combinada com os fios armadilhas',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '8233f2ec-f6df-45be-9358-d57974c8594b',
        description:
          'Essa One Way pode e deve ser combinada com o fio armadilha, e você deve ficar na espera por alguém do time atacante cair na armadilha',
        image: '1633629560818-c444af87-6b6d-4965-b15e-f789e249a296',
      },
      {
        id: '9700e90d-ed03-4d23-9b4d-92b176b065a8',
        description: 'Encoste nesse cantinho',
        image: '1633629626605-5a1af8c8-53a8-465f-9e27-73d1081ba295',
      },
      {
        id: '24d3eb5f-3d14-4d32-9fd2-a6767b9fd263',
        description: 'Olhe para o céu',
        image: '1633629640926-253d1fbb-346b-4257-aa4f-cd7098901512',
      },
      {
        id: 'c6dfafdf-d49a-4b72-81eb-1b304da1b68f',
        description:
          'Encontre essa chaminé da casa, e posicione a mira um pouco mais para a direita e para cima (use a marshal e depois vende ela para pegar outra arma)',
        image: '1633629660300-b1f53bb9-6660-44f3-9f13-42226705db77',
      },
      {
        id: '8c5baf19-801f-4847-bdbb-b2a6c26010a7',
        description: 'Jogue a jaula cibernética',
        image: '1633629710516-758b3624-000e-4110-88f6-0cf13775a45a',
      },
    ],
    createdAt: new Date('2021-10-07T18:02:59.304Z'),
    updatedAt: new Date('2021-10-07T18:02:59.304Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'CortinaTóxica',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'A',
      agent: 'Viper',
    },
    id: '615f37bbd5dfc1f8ad206f51',
    title: 'Parede gigante da vyper',
    description:
      'Essa parede é muito boa, em especial em rounds ECOnômicos, cujo o time atacante esta com colete 1 ou sem colete',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '75727c21-6ecd-4150-94dc-7fe39a3a87e4',
        description: 'Essa parede cobre basicamente metade do mapa, e tira 30 de dano ao passar por ela',
        image: '1633629812950-42d91e0c-9ada-4609-8c39-3b460f3dca4c',
      },
      {
        id: '29da166b-4592-4461-87c5-86bb7849ef2b',
        description: 'Região da varanda',
        image: '1633629869469-b0410a6a-5570-403b-b767-a8878f24d8dc',
      },
      {
        id: '5bc5e69e-8580-4515-8a39-6272491838dc',
        description: 'Região do meio',
        image: '1633629886198-7f996e22-face-4bfd-a35d-20ddb68e217b',
      },
      {
        id: 'a46ae7e7-5125-42e5-9116-1be7c489530e',
        description:
          'Encoste no bomb A, e alinhe a parede conforme mostrado no mini mapa. Repare que a parede está um pouco para baixo, ela não pode passar em cima da parede do meio, ou você verá no ultimo item desta dica',
        image: '1633629897630-de8761b0-bfb6-48fa-916f-16dce778a59a',
      },
      {
        id: '6b22a51d-65a9-4944-8822-cbc80e3703a0',
        description:
          'Se você deixar a parede alinhada com o meio, ela irá passar por cima, por este motivo você deve deixar a parede um pouco deslocada do meio\n',
        image: '1633629998658-d1f36bcf-51f7-4e8b-b80c-5c24648f9010',
      },
    ],
    createdAt: new Date('2021-10-07T18:08:59.827Z'),
    updatedAt: new Date('2021-10-07T18:08:59.827Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'InicioPartida',
      difficult: 'Facil',
      ability: 'PoçoPeçonhento',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Viper',
    },
    id: '615f38bbd5dfc1f8ad206f53',
    title: 'Ultimate que cobre o mercado e a entrada do B',
    description:
      'Essa ultimate não é tão intimidadora, porém, cobre duas regiões de acesso que o time atacante frequentemente usam quando querem entrar no bomb B',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '1d5cc264-731c-43b2-95b7-3e98a8bf43da',
        description:
          'Essa ultimate cobre a entrada do Bomb A (nada impede eu de voar por cima e dar um dash no bomb ok)',
        image: '1633630181621-272e3e22-24b5-4d8e-b385-ffca7d322527',
      },
      {
        id: '99a755be-13a0-41a0-aad5-5a3a9954f315',
        description: 'E também cobre a região do mercado',
        image: '1633630231697-4cbefb09-0b20-4841-85de-8dacbf70dba6',
      },
      {
        id: 'bb471bed-dd98-4344-ba47-ab5cdbcbfbc3',
        description: 'Suba nessa região',
        image: '1633630348687-03a8e1d6-4946-4a2a-bbbc-81448aebc678',
      },
      {
        id: '72b81bed-07a6-4a51-860d-6ab649400808',
        description: 'Alinhe a ultimate nessa posição, tem que ser exatamente nessa região para pegar as duas entradas',
        image: '1633630361435-16bc33ff-8ad3-4104-bc2f-5518cb67aa61',
      },
    ],
    createdAt: new Date('2021-10-07T18:13:15.385Z'),
    updatedAt: new Date('2021-10-07T18:13:15.385Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Bind',
      mapPosition: 'BaseDefensora',
      agent: 'Sova',
    },
    id: '615f39d3d5dfc1f8ad206f55',
    title: 'Como spotar o fundo do bomb A',
    description: 'Esse spot deve ser usado com cautela, pois, é fácil contera-lo',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'f3025566-6061-461b-bc9f-da62f05032ac',
        description:
          'Esse spot pega no fundo do bomb A, e geralmente não funciona duas vezes, pois o time defensor simplesmente se esconde ou destrói a flecha',
        image: '1633630542445-c2e29146-cfb1-4c79-8184-fac5e73b7924',
      },
      {
        id: '4fa35462-797d-477d-89ef-9a0946c4e1eb',
        description: 'Suba na caixa e encoste no ponto indicado',
        image: '1633630589699-df7fb42b-a104-4564-a134-308c3088e071',
      },
      {
        id: '91367fcf-9d66-4e6a-9ee1-2ea6ae740d99',
        description: 'Mire no meio da Luz, em cima da torre',
        image: '1633630603903-060b0e41-f07c-4216-a2a5-86a8f757432a',
      },
      {
        id: 'c5576287-5db0-4993-8991-d135bbd7186c',
        description: 'Dispare a flecha com 1 de força',
        image: '1633630616494-8a571f71-d299-43cc-a0c1-2cdeaea6842e',
      },
    ],
    createdAt: new Date('2021-10-07T18:17:55.893Z'),
    updatedAt: new Date('2021-10-07T18:17:55.893Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Medio',
      ability: 'FlechaRastreadora',
      side: 'Atacantes',
      map: 'Bind',
      mapPosition: 'BaseAtacante',
      agent: 'Sova',
    },
    id: '615f3b86d5dfc1f8ad206f57',
    title: 'Spot dentro do bomb, para pegar alguém marotado debaixo do Hooka ou em cima da entrada pelo jardim',
    description: 'Esse spot é perigoso, pois, não revela a região da base CT ou a região do fundo',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '03efe20a-d71f-4768-b14e-79249c682532',
        description:
          'Esse spot muito bom, porém, seu time também precisa estar avançando pelo hookah, pois, esse spot não pega os defensores recuados.',
        image: '1633630689086-d98082c9-64fc-4b89-8e68-afa57c61fd9c',
      },
      {
        id: '83df54f6-68a3-4ff2-9d40-9d367cfcf1ee',
        description: 'Encoste na fonte, andando em linha reta, e alinhe sua mira na estrela, no ponto indicado',
        image: '1633630882799-20182f60-2488-4f77-991d-ba5f8366f332',
      },
      {
        id: 'cdb029b8-c58b-4c90-aa27-f263927ac516',
        description: 'Mire nessa região, um pouco acima da linha azul e exatamente em baixo da curva do encanamento',
        image: '1633630936869-399e555f-e3c8-4674-a2d5-f419bfc61c2f',
      },
      {
        id: '3de88ffc-2c6d-49a3-bb11-8843f105dc06',
        description: 'Dispare com força total e um ricochete',
        image: '1633630976626-04c8607f-264b-42d0-8aef-c538a38483f1',
      },
    ],
    createdAt: new Date('2021-10-07T18:25:10.894Z'),
    updatedAt: new Date('2021-10-07T18:25:10.894Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Defensores',
      map: 'Bind',
      mapPosition: 'Outra',
      agent: 'Sova',
    },
    id: '615f3c63d5dfc1f8ad206f59',
    title: 'Como spotar o time atacante preparando o entry na A',
    description:
      'Esse spot costuma funcionar várias vezes no Low Elo, mas nem sempre resulta em kills, apenas informação mesmo',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '2ccb2b5f-1b55-42d9-baf0-9a5978b28791',
        description: 'Esse spot pega todo o time atacante preparando o entry e pode ser combinado com smokes e varados',
        image: '1633631124159-9326c9d4-32d8-48c3-bd35-f2386973d59a',
      },
      {
        id: '86c0d283-a137-4ff0-923d-c43e599432f2',
        description: 'Na região do céu, encoste no ponto indicado (não precisa ser exato)',
        image: '1633631170098-b47dddd9-3e5c-401f-9b54-033dcfb62fb2',
      },
      {
        id: '0d9c9ea3-e9e6-4ddf-8223-21c66233737d',
        description: 'Mire nessa região, mais para a esquerda da madeira.',
        image: '1633631211791-b03f25e6-7aed-49a0-a4a4-900ef51ae7e9',
      },
      {
        id: '9ae95426-e0de-4f27-963c-1da7a0eb5449',
        description: 'Dispare com força total e um ricochete',
        image: '1633631232819-992106a4-53ac-44a6-bab5-1297c22321e7',
      },
    ],
    createdAt: new Date('2021-10-07T18:28:51.653Z'),
    updatedAt: new Date('2021-10-07T18:28:51.653Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'FlechaRastreadora',
      side: 'Defensores',
      map: 'Bind',
      mapPosition: 'A',
      agent: 'Sova',
    },
    id: '615f3de8d5dfc1f8ad206f5b',
    title: 'Como spotar o time atacante no respawn pelo banheiro do A',
    description:
      'Esse spot sempre funciona comigo, e pode também ser usado de bait, enquanto o time inimigo mira para destruir a flecha, alguém do seu time avança pelo banheiro',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '45d52810-8f34-4066-959e-cb2ac0f70cbe',
        description: 'Esse spot é muito bom, ele pega o time atacante preparando o entry pelo banheiro',
        image: '1633631344520-3568a8f9-0b35-4e5f-a10f-e3779d939a88',
      },
      {
        id: '601d71e5-a586-40a2-b927-841fdd1f075c',
        description: 'Encoste nesse cantinho',
        image: '1633631404715-01877bc6-19d1-4792-81ca-2d4e745c69e5',
      },
      {
        id: '21d02b83-7ed2-409f-b644-7b7292806d23',
        description:
          'Posicione a ponta debaixo do primeiro diamante da flecha rastreadora no cantinho a esquerda do condicionador de Ar. (Sim, esse spot envolve não a mira, mas sim a "HUD" do sova)',
        image: '1633631419817-951db726-c4ce-421c-bef3-5c98a4989544',
      },
      {
        id: 'aea0a5ca-69b8-4e49-ac49-f292ac7954fb',
        description:
          'Dispare com 1 força a flecha. Treine em uma personalizada para confirmar que o diamante da sua HUD não esteja deslocado (Resoluções diferentes podem afetar  a HUD)',
        image: '1633631531118-a0cd851b-fb64-4594-8c2e-aed7d9a9503e',
      },
    ],
    createdAt: new Date('2021-10-07T18:35:20.302Z'),
    updatedAt: new Date('2021-10-07T18:35:20.302Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'DuranteRush',
      difficult: 'Medio',
      ability: 'TormentaDeAço',
      side: 'Defensores',
      map: 'Icebox',
      mapPosition: 'B',
      agent: 'Jett',
    },
    id: '615f3f47d5dfc1f8ad206f62',
    title: 'Ângulo surpresa para conseguir alguns abates',
    description: 'Essa ângulo não é esperado pelo time atacante, e você pode abusar dele para conseguir alguns abates',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '95100c6b-76f1-44b4-a423-490dbe591b63',
        description:
          'O time atacante dificilmente irá esperar você por esse ângulo, e se você for rápido e bom de mira, provavelmente vai conseguir alguns abates',
        image: '1633631767277-556abe0a-89c3-4837-b65b-aa0fd5a25d8b',
      },
      {
        id: '2b78d480-1ea2-4962-b0b1-4354c8f25c27',
        description: 'Fique nessa região e dê um salto quando tiver a informação que o time atacante está entrando',
        image: '1633631898100-33c3c548-a848-4e78-bec4-c69938cd24e7',
      },
    ],
    createdAt: new Date('2021-10-07T18:41:11.686Z'),
    updatedAt: new Date('2021-10-07T18:41:11.686Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Medio',
      ability: 'BrisaDeImpulso',
      side: 'Atacantes',
      map: 'Icebox',
      mapPosition: 'Meio',
      agent: 'Jett',
    },
    id: '615f411ed5dfc1f8ad206f64',
    title: 'Como chegar na região do container no inicio do round',
    description: 'Essa é uma região bem interessante, permite acesso ao Bomb B, ao bomb A e a base defensora',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '1f71b508-0e28-4fc1-ba66-c066266dce22',
        description:
          'Ao chegar nessa região, você pode simplesmente se esconder, pois o time defensor terá uma preocupação adicional além do seu time',
        image: '1633632089097-f8d9a251-737a-4b90-b6d6-100622a21949',
      },
      {
        id: 'de2186d8-968b-42d8-842c-a21ae1b80abe',
        description:
          'Jogue uma erupção das brumas em cima da caixa, não tente controlar ela, apenas jogue ela e já inicie o próximo passo',
        image: '1633632182645-bd0ee194-18c3-4bf7-8a9f-81b9cbfa208a',
      },
      {
        id: 'f6616df1-7952-4299-bebe-624cdc9e4fd3',
        description: 'De um salto para cima (você estará correndo na direção da Erupção das brumas, e então irá pular)',
        image: '1633632218107-df4b45ac-3999-4422-8af9-f81ba07e3ae4',
      },
      {
        id: '16628394-6d0f-4062-bc1b-d205e84d70f2',
        description:
          'Após o pulo, não perca tempo, use o dash para chegar o quanto antes na erupção da brumas. Lembre-se, você não precisa trocar com o time defensor, a simples presença sua naquela região irá influenciar no time defensor',
        image: '1633632261876-ae4b094e-56ca-49a9-a2dd-22da9249d482',
      },
    ],
    createdAt: new Date('2021-10-07T18:49:02.483Z'),
    updatedAt: new Date('2021-10-07T18:49:02.483Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'DuranteRush',
      difficult: 'Medio',
      ability: 'TormentaDeAço',
      side: 'Defensores',
      map: 'Icebox',
      mapPosition: 'B',
      agent: 'Jett',
    },
    id: '615f428ed5dfc1f8ad206f66',
    title: 'Pixel para surpreender os atacantes',
    description: 'Esse píxel é muito forte e portanto tem boas chances de você conseguir um abate',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'bebaea52-e162-41ff-9a49-08377f4ac3fd',
        description: 'Esse pixel é quase certeza de kill grátis, pois ninguém espera alguém nessa região',
        image: '1633632744589-99e33085-6932-4f96-845f-5ecbc236987c',
      },
      {
        id: 'a9c830fc-b2bc-4361-af0f-e576eb032056',
        description: 'Se posicione nessa região',
        image: '1633632752714-740bc7f8-a970-4da1-85ee-aa9dc31b7346',
      },
      {
        id: '5657e31d-db2a-4331-b232-c212cfc47ad3',
        description: 'Use o primeiro pulo',
        image: '1633632757814-499f2649-1161-4b37-8712-3c87f1309695',
      },
      {
        id: '47392b49-ff1f-4d70-b4a5-e6b38736a60d',
        description: 'Rapidamente use o segundo, e você chegará ao objetivo',
        image: '1633632770307-24f35994-62f0-4a24-a078-8e7ce7edb3df',
      },
    ],
    createdAt: new Date('2021-10-07T18:55:10.922Z'),
    updatedAt: new Date('2021-10-07T18:55:10.922Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'DuranteOPlant',
      difficult: 'Medio',
      ability: 'CorrenteAscendente',
      side: 'Atacantes',
      map: 'Icebox',
      mapPosition: 'Outra',
      agent: 'Jett',
    },
    id: '615f43b6d5dfc1f8ad206f68',
    title: 'Pixel supressa para quando o time defensor está virando para a B',
    description: 'Esse píxel é muito ocasional e provavelmente irá ser executado com sucesso algumas poucas vezes',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'a3ffc7d4-4b05-4db7-b582-fc2ca4b9d9e3',
        description:
          'Esse píxel é bom ser feito quando seu time conseguiu estourar o bomb B, e só falta dois, que, graças a informação, você sabe que ainda estão na A',
        image: '1633632928525-c7ef7d63-f247-4148-b21b-fd23f0f78704',
      },
      {
        id: 'b44a5718-44b8-407f-bbae-2c11aab618d6',
        description: 'Após ter dominado essa região, plane indo em direção a esquerda',
        image: '1633633018292-cf968f6f-45a6-4860-9ab8-5d411744bf49',
      },
      {
        id: '5d5b5821-0ff8-4d60-9f39-f826e56f8ab8',
        description: 'Plane até chegar perto do chão, use um pulo para continuar seu planeio',
        image: '1633633046899-2d5ca92d-a30c-4db5-b649-4a2c2a12bce5',
      },
      {
        id: '764dbe77-ed54-4dab-8d57-26195ab146b5',
        description: 'Use um segundo pulo para chegar a região desajada',
        image: '1633633074983-b0da9077-5003-4b4d-a2d0-251873815e84',
      },
    ],
    createdAt: new Date('2021-10-07T19:00:06.412Z'),
    updatedAt: new Date('2021-10-07T19:00:06.412Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Medio',
      ability: 'CorrenteAscendente',
      side: 'Defensores',
      map: 'Icebox',
      mapPosition: 'B',
      agent: 'Jett',
    },
    id: '615f4541d5dfc1f8ad206f6a',
    title: 'Como pousar no container na entrada da B',
    description: 'Esse píxel também pode ser feito com o Omen e normalmente permite marotrar',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '5dd2728e-d619-4446-8bd7-ae0b32875e55',
        description: 'Esse píxel é um pouco conhecido, portanto, cuidado no momento de voltar',
        image: '1633633495259-e7cb691b-276f-4d7f-bfd3-4c4919779b97',
      },
      {
        id: '95b99d72-3c60-4040-b458-8f3785d0abb0',
        description: 'Use o planeio em direção ao objetivo',
        image: '1633633377824-f642a74b-39a7-4f86-b126-b572ee4272d5',
      },
      {
        id: 'c8ee7c75-21dc-40e7-a5da-d88c33f897a4',
        description: 'Use o pulo para chegar ao container cinza',
        image: '1633633404519-39887d93-8f0a-4906-a7df-539adb2a8d6f',
      },
      {
        id: 'e5c38dc1-ca37-4294-8aac-bbe8e1128b4a',
        description:
          'Faltando +- 1s para iniciar a partida, use a corrente ascendente, precisa ser nesse momento para o time atacante não te escutar',
        image: '1633633425361-7e665ef8-28d0-48fb-a246-7f61cb85262f',
      },
      {
        id: 'a24af256-090d-48ac-b80f-3e3c90f6edd4',
        description: 'Pouse no container, faça silêncio e consiga alguns abates',
        image: '1633633470230-cdcedaf4-b8cc-4fac-b819-f0201c6ea692',
      },
    ],
    createdAt: new Date('2021-10-07T19:06:41.125Z'),
    updatedAt: new Date('2021-10-07T19:06:41.125Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'OrbeDeBarreira',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Sage',
    },
    id: '61619ea1ce40a7938c9cec94',
    title: 'Ângulo diferenciado para pegar o time atacante',
    description: 'Existe uma chance de você conseguir algumas kills sem ser percebido',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '09690b4f-1335-4d62-9e2d-4ca4d4eb1715',
        description: 'Essa parede permite ver a entrada do bomb B e uma parte da região do mercado',
        image: '1633787374437-0ad5d62e-39c7-4d25-b236-9376990c45e5',
      },
      {
        id: 'ec431f4f-6b3f-496a-ba61-90f95fafa164',
        description: 'Posicione a mira nessa região',
        image: '1633787408738-c16e413e-b5a5-4480-9467-89b78cea3489',
      },
      {
        id: 'f7b0b466-05d2-4d4f-9f23-b90fed5c0b06',
        description: 'Se posicione!',
        image: '1633787451579-031de654-a498-469a-bb5d-126375dfe06f',
      },
    ],
    createdAt: new Date('2021-10-09T13:52:33.741Z'),
    updatedAt: new Date('2021-10-09T13:52:33.741Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'InicioPartida',
      difficult: 'Medio',
      ability: 'OrbeDeBarreira',
      side: 'Atacantes',
      map: 'Ascent',
      mapPosition: 'B',
      agent: 'Sage',
    },
    id: '6161a035ce40a7938c9cec9f',
    title: '#1 Parede para aliados, Omen, Jett ou Raze',
    description:
      'Esse pixel permite seus aliados conseguirem uma vantagem sobre quem do time defensor fica na região da varanda',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: '34713c48-556c-40e4-a16f-bd34dd3637ea',
        description: 'Esse píxel é extremamente forte, porém, deve ser executado com rapidez',
        image: '1633787599464-ea36726c-e22b-4ccf-bcde-129105b577e6',
      },
      {
        id: '5c9a607a-4294-41e0-a4be-9b1e426de1d6',
        description:
          'É interessante que o seu aliado já tenha conseguido subir na casinha, antes mesmo de você fazer a parede. Então, posicione a parede debaixo do seu aliado',
        image: '1633787842477-4ca00f1a-7fe6-43e7-b7d4-a3a8e8260a78',
      },
      {
        id: 'd6015c5f-8058-4543-9e76-cb9a6f13d803',
        description:
          'A parede deverá ficar assim, infelizmente é, ou impossível ou extremamente difícil de você aproveitar desse pixel.',
        image: '1633787891441-ba0105bb-041d-4e6f-8c3c-bfb359b82a8a',
      },
    ],
    createdAt: new Date('2021-10-09T13:59:17.106Z'),
    updatedAt: new Date('2021-10-09T13:59:17.106Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'OrbeDeBarreira',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'BaseDefensora',
      agent: 'Sage',
    },
    id: '6161a0f0ce40a7938c9cecaa',
    title: 'Ângulo diferenciado para pegar o time atacante pelo meio',
    description: 'Esse pixel é interessante, mas você deve executa-lo com cuidado!',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'd31f8a58-9805-45ed-8e54-a92c92b40f4c',
        description:
          'Esse pixel te permite um ângulo diferenciado para pegar o time atacante pelo meio, mas é facilmente percebido e só te dará uma vantagem de poucos milissegundos',
        image: '1633787974809-02e70deb-bc3a-4f5e-a17e-87488ced1522',
      },
      {
        id: '12876ee6-56b8-4f3d-8f42-25309f329ac1',
        description: 'Posicione a parede nessa região, (fique em cima dela antes de ativa-la, ok!)',
        image: '1633788040250-a40af793-b9d8-4e51-bd3a-017360409226',
      },
      {
        id: 'edb1d5fc-8e3f-4683-af22-03cbbfa9b5c1',
        description: 'Aproveite!',
        image: '1633788075874-6b8a90df-31e4-4cf4-be97-49476f7175df',
      },
    ],
    createdAt: new Date('2021-10-09T14:02:24.457Z'),
    updatedAt: new Date('2021-10-09T14:02:24.457Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'QualquerMomento',
      difficult: 'Facil',
      ability: 'OrbeDeBarreira',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'Outra',
      agent: 'Sage',
    },
    id: '6161a1fece40a7938c9cecb5',
    title: '#2 Parede para aliados, Omen, Jett ou Raze',
    description:
      'Esse pixel é forte com times que jogam recuado, talvez esperando habilidades do seu time(uma faca do Kay/0), e é extremamente exposto, portanto, as chances do seu aliado morrer são altas, mas, é um ângulo diferenciado!',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'd62c05f9-d601-4d1c-b7ba-26259faaafd7',
        description: 'Esse pixel pode permitir uma kill para o seu time',
        image: '1633788168782-1485420f-a049-4733-aed2-5bd7c94d9ecf',
      },
      {
        id: '9400b083-e959-41a3-845c-7cef027051f2',
        description: 'Posicione a barreira em cima da caixa, é interessante que o seu aliado já suba em cima da caixa',
        image: '1633788321480-e76bc335-876a-4229-8ffc-f97b7e05046d',
      },
      {
        id: '0e90841f-ae29-4750-925d-b6707f0f4a24',
        description: 'A barreira deverá ficar Mais ou menos assim',
        image: '1633788357747-79db16f7-9071-44db-836e-927bfe8d764d',
      },
    ],
    createdAt: new Date('2021-10-09T14:06:54.238Z'),
    updatedAt: new Date('2021-10-09T14:06:54.238Z'),
    __v: 0,
  },
  {
    tags: {
      moment: 'DuranteRush',
      difficult: 'Medio',
      ability: 'OrdeDeLentidão',
      side: 'Defensores',
      map: 'Ascent',
      mapPosition: 'A',
      agent: 'Sage',
    },
    id: '6161a2fdce40a7938c9cecc0',
    title: 'Como segurar um Rush no Bomb B a partir do céu da A',
    description: 'Esse píxel é interessante ser combinado com as habilidades de outros agentes, como o da killjoy',
    userId: '61a3ae838fe6df463e7bc1cf',
    imgs: [
      {
        id: 'efc3b1ff-ec08-4183-b779-a80734dc70ef',
        description:
          'Esse pixel é muito forte para segurar rush, mas, não garante nada e um bom uso é com as granadas da killjoy durante um rush do time atacante',
        image: '1633788427195-8345cd12-fc3c-44d4-b4c5-1488f7b139bf',
      },
      {
        id: '07f3a469-e1f4-4864-b0c5-9db3faee0407',
        description: 'Se posicione nesse canto, pode ser perfeitamente alinhado a parede, ou mais ou menos alinhado',
        image: '1633788493336-f71377e8-645e-4242-8544-bc85a099c5bb',
      },
      {
        id: 'efa162a9-a9d7-402f-86a1-acc930096a96',
        description: 'Mire um pouco acima do TERCEIRO vale do telhado e jogue o orbe de lentidão',
        image: '1633788519265-ab976b19-14f3-46b5-8041-c176d1ff5219',
      },
    ],
    createdAt: new Date('2021-10-09T14:11:09.380Z'),
    updatedAt: new Date('2021-11-04T16:02:17.837Z'),
    __v: 0,
  },
]);
