
# instruções claras sobre como rodar o projeto e testar a funcionalidade de login:

### Inicalizando o projeto

- Primeiro, abra o programa místico chamado VSCode (também conhecido como Visual Studio Code).
- Logo após isso, pressione o botão com a escrita `Clone Git Repository...` ou seja lá o que for em português.
- Na barra que aparecerá na área superior da tela, copie e cole na barra o seguinte link:

```
https://github.com/helo-wordd/2024-IA22--trabalho-final
```

- Pressione Enter.
- Abra o terminal do VS Code pressionando Alt, Tab, Tab, Tab, Tab, Tab, Tab, Enter, Enter.
> Você também pode abrir o terminal do VS Code utilizando o mouse, pressionando o botão "Terminal" no canto superior esquerdo da tela ou pressionando as teclas: Ctrl, Aspas (ou o botão que estiver abaixo do Esc) se você não tiver acidentalmente removido esse atalho como eu fiz.
- Digite no terminal:

```bash
npm i
```

- Após isso, rode o seguinte comando:

```bash
npm run dev
```

- Agora, abra seu navegador preferido e digite o seguinte link em sua barra de endereço:

```
http://localhost:3000/
```

### Testando o sistema de login

- Primeiro, para testar se a verificação de token está funcionando corretamente, pressione o botão Cadastrar e preencha o formulário.
- Você receberá uma mensagem de erro e será arremessado de volta para a tela de login.
- Agora, preencha o formulário de login com as seguintes informações:

```
Email: admin@mail.com
Senha: admin
```

- Pressione o botão Entrar.
- Você receberá uma mensagem de sucesso e fortuna e será lançado até a página de registro, onde você poderá preencher o formulário com as informações que desejar.
- Se tiver feito corretamente, você não será atirado devolta para a tela de login, mas sim, continuará na tela de registro para registrar a quantidade de usuários que desejar.
- Quando estiver entediado de criar usuários repetidamente, você pode pressionar o botão Cancelar, que irá te disparar para a tela de login.
- Na tela de login, você poderá preencher as informações com os dados utilizados no(s) registro(s) e, portanto, testar se todos foram inseridos no banco de dados corretamente.

> Segredo: se você estiver logado e entrar na página `http://localhost:3000/acesso-privado.html`, você poderá ver todas as informações de todos os usuários (exceto pelas senhas). Caso não esteja logado, você não verá nada. (favor ignorar o formulário vazio. eu não sei como removê-lo.)