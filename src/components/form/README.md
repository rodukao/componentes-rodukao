
# Componentes de Formulário

Esta pasta contém componentes utilizados em formulários. Inclui inputs para texto, e-mail e senha, botões de rádio, botões de submit e um formulário de login completo.

## Componentes

### FormInput

- **Descrição**: Campo de entrada para textos, e-mails e senhas com validação básica para e-mails.
- **Props**:
  | Propriedade | Tipo     | Descrição                                     | Padrão |
  |-------------|----------|-----------------------------------------------|--------|
  | label       | string   | Label do input                                | -      |
  | type        | string   | Tipo do input (text, email, password)         | 'text' |
  | name        | string   | Nome do input                                 | -      |
  | value       | string   | Valor controlado do input                     | -      |
  | onChange    | function | Função chamada na alteração do valor          | -      |
  | placeholder | string   | Placeholder do input                          | -      |
- **Validação**: Emails são validados pelo formato. Uma mensagem de erro é mostrada se o formato não for válido.

### FormInputRadio

- **Descrição**: Botão de rádio para formulários.
- **Props**:
  | Propriedade | Tipo     | Descrição                               | Padrão |
  |-------------|----------|-----------------------------------------|--------|
  | label       | string   | Label do botão de rádio                 | -      |
  | name        | string   | Nome do grupo do botão de rádio         | -      |
  | value       | string   | Valor do botão de rádio                 | -      |
  | checked     | boolean  | Se o botão de rádio está selecionado    | false  |
  | onChange    | function | Função chamada na alteração do estado   | -      |

### FormSubmit

- **Descrição**: Botão de submit para formulários.
- **Props**:
  | Propriedade | Tipo     | Descrição                               | Padrão |
  |-------------|----------|-----------------------------------------|--------|
  | text        | string   | Texto do botão                          | -      |
  | className   | string   | Classe CSS para estilização adicional   | -      |
  | onClick     | function | Função chamada ao clicar no botão       | -      |
  | style       | object   | Estilos inline para o botão             | -      |

### LoginForm

- **Descrição**: Formulário de login completo com inputs para e-mail e senha, e um link de recuperação de senha.
- **Props**:
  | Propriedade           | Tipo     | Descrição                                    | Padrão        |
  |-----------------------|----------|----------------------------------------------|---------------|
  | placeholderLogin      | string   | Placeholder para o input de e-mail           | 'E-mail'      |
  | placeholderPassword   | string   | Placeholder para o input de senha            | 'Senha'       |
- **Funcionalidades**:
  - Submissão de e-mail e senha.
  - Link para recuperação de senha com função de callback para lógica personalizada.

