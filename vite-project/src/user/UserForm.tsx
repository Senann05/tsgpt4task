interface Users {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface UserFormProps{
  user: Users;
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit:(e:React.FormEvent) => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onChange, onSubmit }) =>{
  return(
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={user.name} onChange={onChange} placeholder="isim"/>
      <input type="email" name="email" value={user.email} onChange={onChange} placeholder="email"/>
      <input type="password" name="password" value={user.password} onChange={onChange} placeholder="sifre"/>
      <button type="submit">Gönder</button>
    </form>
  );
};
export default UserForm;
