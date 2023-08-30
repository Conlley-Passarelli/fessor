import { useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import { TeacherItem, Teacher }from "../../components/TeacherItem";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

import "./styles.css";

const teachers: Teacher[] = [
  {
    id: 1,
    subject: "Biologia",
    cost: 20,
    name: "João",
    avatar:
      "https://avatars.githubusercontent.com/u/62860172?s=460&u=1b6b8b0b9b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0&v=4",
    whatsapp: "123456789",
    bio: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    subject: "Matemática",
    cost: 40,
    name: "Bruno",
    avatar:
      "https://avatars.githubusercontent.com/u/62860172?s=460&u=1b6b8b0b9b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0&v=4",
    whatsapp: "123456789",
    bio: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    subject: "História",
    cost: 35,
    name: "Leonardo",
    avatar:
      "https://avatars.githubusercontent.com/u/62860172?s=460&u=1b6b8b0b9b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0&v=4",
    whatsapp: "123456789",
    bio: "Lorem ipsum dolor sit amet",
  },
];

export function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  function searchTeachers(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matemática", label: "Matemática" },
              { value: "Química", label: "Química" },
              { value: "Português", label: "Português" },
              { value: "História", label: "História" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => {
              setWeek_day(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Horário"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}
