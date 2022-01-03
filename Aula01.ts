import { User } from './User';

interface IUserProps {
  name: string;
  email: string;
}

type UserPropsJson = {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  photo: string;
};

function enviarEmail({ name, email }: IUserProps) {
  console.log('Enviando email para ' + name + ' com email ' + email);

  User.map((response: UserPropsJson) => {
    console.log(response.photo);
  });
}

enviarEmail({ name: 'Icode Mobile', email: 'codarmobile@gmail.com' });
