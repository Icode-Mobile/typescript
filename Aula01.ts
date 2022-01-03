interface IUserProps {
  name: string;
  email: string;
}

function enviarEmail({ name, email }: IUserProps) {
  console.log('Enviando email para ' + name + ' com email ' + email);
}

enviarEmail({ name: 'Icode Mobile', email: 'codarmobile@gmail.com' });
