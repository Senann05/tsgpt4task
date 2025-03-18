import { useState } from "react";
import UserForm from "./UserForm";
import "./User.css";

interface Users {
  id: number;
  name: string;
  email: string;
  password: string;
}

function UserManager() {
  const [user, setUser] = useState<Users>({ id: 0, name: "", email: "", password: "" });
  const [userList, setUserList] = useState<Users[]>([]);
  const [mistake, setMistake] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (id: number) => {
    const updatedList = userList.filter((u) => u.id !== id);
    setUserList(updatedList);
    setSuccessMessage("Silindi!");
    setMistake("");
  };

  const handleEdit = (editUser: Users) => {
    setUser(editUser);
    setMistake("");
    setSuccessMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user.name.length < 3) {
      setMistake("İsim en az 3 karakter olmalı");
      return;
    }
    if (!user.email.includes("@")) {
      setMistake("Geçerli bir email girin");
      return;
    }
    if (user.password.length < 6) {
      setMistake("Şifre en az 6 karakter olmalı");
      return;
    }

    if (user.id !== 0) {
      // Güncelleme
      const updatedList = userList.map((u) => (u.id === user.id ? user : u));
      setUserList(updatedList);
      setSuccessMessage("Güncellendi!");
    } else {
      // Yeni ekleme
      const newUser = { ...user, id: Date.now() };
      setUserList([...userList, newUser]);
      setSuccessMessage("Eklendi!");
    }

    setUser({ id: 0, name: "", email: "", password: "" });
    setMistake("");
  };

  return (
    <div className="bullshit">
      <h1 >Kullanıcı Yönetimi</h1>

      <UserForm user={user} onChange={handleChange} onSubmit={handleSubmit} />

      {mistake && <p style={{ color: "red" }}>{mistake}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <ul>
        {userList.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => handleEdit(u)}>Düzenle</button>
            <button onClick={() => handleDelete(u.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManager;
